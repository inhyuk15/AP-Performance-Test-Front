import { useEffect, useState } from 'react';
import Speedtest from './Speedtest';
// import eventManager from './Speedtest_worker';

export interface SpeedTestData {
  testState: number;
  dlStatus: number;
  ulStatus: number;
  pingStatus: number;
  clientIp: string;
  jitterStatus: number;
  dlProgress: number;
  ulProgress: number;
  pingProgress: number;
  testId: string;
}

const host = (import.meta as any).env.VITE_SERVER;
// const host =
const SPEEDTEST_SERVERS = [
  {
    // this is node server example
    name: 'Local dev server', // user friendly name for the server
    server: host, // URL to the server. // at the beginning will be replaced with http:// or https:// automatically
    dlURL: 'garbage', // path to download test on this server (garbage.php or replacement)
    ulURL: 'empty', // path to upload test on this server (empty.php or replacement)
    pingURL: 'empty', // path to ping/jitter test on this server (empty.php or replacement)
    getIpURL: 'getIP', // path to getIP on this server (getIP.php or replacement)
  },
];

const SpeedtestManager = () =>
  // paramOnSelectServer: (arg: void) => void,
  // paramOnend: (arg: void) => void
  {
    // const { onSelectServer, onEnd } = {
    //   onSelectServer: paramOnSelectServer,
    //   onEnd: paramOnend,
    // };
    const [speedtest, setSpeedtest] = useState<Speedtest | null>(null);
    const [dlStatus, setDlStatus] = useState<number>(0);
    const [ulStatus, setUlStatus] = useState<number>(0);
    const [pingStatus, setPingStatus] = useState<number>(0);
    const [jitterStatus, setJitterStatus] = useState<number>(0);

    useEffect(() => {
      const onupdate = (data: SpeedTestData) => {
        const downloading = data.testState === 1 && data.dlStatus === 0;
        setDlStatus(downloading ? 0 : data.dlStatus);
        const uploading = data.testState === 3 && data.ulStatus === 0;
        setUlStatus(uploading ? 0 : data.ulStatus);
        setPingStatus(data.pingStatus);
        setJitterStatus(data.jitterStatus);
      };

      const onend = (aborted: boolean) => {
        if (aborted) {
          console.log('This is aborted');
          // onEnd();
        }
      };
      const s = new Speedtest(onupdate, onend);
      setSpeedtest(s);

      s.addTestPoints(SPEEDTEST_SERVERS);
      s.selectServer(server => {
        console.log(`server name : ${server.name}`);
        // onSelectServer();
      });

      console.log(`ip: ${s.getSelectedServer().server}`);
    }, []);

    const handleClick = () => {
      console.log('Clicked');
      if (speedtest) {
        if (speedtest.getState() === 3) {
          speedtest.abort();
        } else {
          speedtest.start();
        }
      }
    };

    return { handleClick, dlStatus, ulStatus, pingStatus, jitterStatus };
  };

export default SpeedtestManager;
