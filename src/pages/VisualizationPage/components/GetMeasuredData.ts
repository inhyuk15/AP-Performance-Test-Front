import axios from 'axios';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { MeasurementDataState } from '../../../module/Atom';

interface User {
  floorNumber: number;
  roomNumber: number;
  locationClass: number;
  userCookie: string;
}

export interface SpeedTestDataFromServer {
  dlStatus: number;
  ulStatus: number;
  pingStatus: number;
  jitterStatus: number;
  clientIp: string;
}

export interface MeasurementData {
  user: User;
  speedTest: SpeedTestDataFromServer;
  createdAt: string;
}

const host = (import.meta as any).env.VITE_SERVER;
const httpUrl = `http://${host}/api/speedtest`;

const fetchData = async () => {
  try {
    const response = await axios.get(httpUrl);
    const jsonData: MeasurementData[] = response.data;
    return jsonData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const GetMeasurementData = () => {
  const setMeasurementDataState = useSetRecoilState(MeasurementDataState);
  useEffect(() => {
    const fetchMeasurementData = async () => {
      const jsonData = await fetchData();
      console.log(jsonData);
      setMeasurementDataState(jsonData);
    };
    fetchMeasurementData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default GetMeasurementData;
