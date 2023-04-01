import { io, Socket } from 'socket.io-client';

let socket: Socket;

type Latency = number;
const SocketClient = (url: string) => {
  if (!socket) socket = io(url);
  let pingResults: Latency[] = [];

  const calculateJitter = (latencies: Latency[]) => {
    let sum = 0;
    for (let i = 1; i < latencies.length; i += 1) {
      sum += Math.abs(latencies[i] - latencies[i - 1]);
    }
    return sum / (latencies.length - 1);
  };

  const handleClick = () => {
    const totalRequests = 10;
    for (let i = 0; i < totalRequests; i += 1) {
      const start = Date.now();
      socket.emit('measure_latency', start);
    }
  };
  socket.on('latency_result', (latency: Latency) => {
    console.log(`Latency: ${latency}ms from client`);
    pingResults.push(latency);

    if (pingResults.length >= 10) {
      const avgPing = pingResults.reduce((a, b) => a + b) / pingResults.length;
      const jitter = calculateJitter(pingResults);
      console.log(
        `Average Ping: ${avgPing}ms, Jitter: ${jitter}ms from client`
      );
      pingResults = [];
    }
  });

  return { handleClick };
};

export default SocketClient;
