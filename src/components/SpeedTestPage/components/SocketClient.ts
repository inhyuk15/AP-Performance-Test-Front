import { io, Socket } from 'socket.io-client';

type Latency = number;
interface MeasurementResult {
  avgPing: Latency;
  jitter: Latency;
}

let socket: Socket;

const SocketClient = (url: string) => {
  if (!socket) socket = io(url);
  let pingResults: Latency[] = [];

  const calculateJitter = (latencies: Latency[]): Latency => {
    let sum = 0;
    for (let i = 1; i < latencies.length; i += 1) {
      sum += Math.abs(latencies[i] - latencies[i - 1]);
    }
    return sum / (latencies.length - 1);
  };

  const sendPing = (index: number, totalRequests: number) => {
    if (index < totalRequests) {
      const start = Date.now();
      socket.emit('measure_latency', start);
      setTimeout(() => {
        sendPing(index + 1, totalRequests);
      }, 100);
    }
  };

  const handleClick = (): Promise<MeasurementResult> => {
    return new Promise(resolve => {
      const totalRequests = 10;
      sendPing(0, totalRequests);

      socket.on('latency_result', (latency: Latency) => {
        console.log(`Latency: ${latency}ms from client`);
        pingResults.push(latency);

        if (pingResults.length >= 10) {
          const avgPing =
            pingResults.reduce((a, b) => a + b) / pingResults.length;
          const jitter = calculateJitter(pingResults);
          console.log(
            `Average Ping: ${avgPing}ms, Jitter: ${jitter}ms from client`
          );
          pingResults = [];
          resolve({ avgPing, jitter });
        }
      });
    });
  };

  return { handleClick };
};

export default SocketClient;
