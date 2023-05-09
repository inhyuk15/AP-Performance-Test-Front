import { io, Socket } from 'socket.io-client';

type Latency = number;
export interface MeasurementResult {
  avgPing: Latency;
  jitter: Latency;
  upstreamSpeed: number; // KB/s
  downstreamSpeed: number; // KB/s
}

let socket: Socket;

const SocketClient = (url: string) => {
  if (!socket) socket = io(url);
  let pingResults: Latency[] = [];

  // Jitter 측정 -> Latency를 바탕으로 측정할 수 있나봄
  const calculateJitter = (latencies: Latency[]): Latency => {
    let sum = 0;
    for (let i = 1; i < latencies.length; i += 1) {
      sum += Math.abs(latencies[i] - latencies[i - 1]);
    }
    return sum / (latencies.length - 1);
  };

  // Ping 측정
  const sendPing = (
    index: number,
    totalRequests: number,
    upstreamData: Uint8Array,
    downstreamDataSize: number
  ) => {
    if (index < totalRequests) {
      const start = Date.now();
      socket.emit('measure_latency', start, upstreamData, downstreamDataSize);
      setTimeout(() => {
        sendPing(index + 1, totalRequests, upstreamData, downstreamDataSize);
      }, 100);
    }
  };

  const handleClick = (
    upstreamDataSize = 1024, // Default upstream data size: 1 KB
    downstreamDataSize = 1024 // Default downstream data size: 1 KB
  ): Promise<MeasurementResult> => {
    return new Promise(resolve => {
      const totalRequests = 10;
      // 버퍼를 초기화 하는 것이 좋을듯?
      const upstreamDataBuffer = new ArrayBuffer(upstreamDataSize);
      const upstreamData = new Uint8Array(upstreamDataBuffer);

      let downstreamDataSizeReceived = 0;
      const startTime = Date.now();
      sendPing(0, totalRequests, upstreamData, downstreamDataSize);

      socket.on(
        'latency_result',
        (latency: Latency, downstreamData: ArrayBuffer) => {
          pingResults.push(latency);

          // Record the downstream data size.
          downstreamDataSizeReceived += downstreamData.byteLength;

          if (pingResults.length >= 10) {
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000; // Calculate duration in seconds.
            const avgPing =
              pingResults.reduce((a, b) => a + b) / pingResults.length;
            const jitter = calculateJitter(pingResults);

            const upstreamSpeed = (upstreamDataSize * 10) / (1024 * duration); // KB/s
            const downstreamSpeed =
              downstreamDataSizeReceived / (1024 * duration); // KB/s

            pingResults = [];
            resolve({
              avgPing: Number(avgPing.toFixed(2)),
              jitter: Number(jitter.toFixed(2)),
              upstreamSpeed: Number(upstreamSpeed.toFixed(2)),
              downstreamSpeed: Number(downstreamSpeed.toFixed(2)),
            });
            downstreamDataSizeReceived = 0; // Reset the downstream data size for the next set of measurements.

            socket.disconnect();
          }
        }
      );
    });
  };

  return { handleClick };
};

export default SocketClient;
