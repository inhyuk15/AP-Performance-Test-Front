import axios from 'axios';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { MeasuredDateArrayState } from '../../../module/Atom';

interface MeasuredDate {
  _id: string;
  avgPing: number;
  jitter: number;
  upstreamSpeed: number;
  downstreamSpeed: number;
  floorNumber: number;
  roomNumber: number;
  locationClass: number;
  userCookie: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const fetchData = async () => {
  try {
    const response = await axios.get('http://192.168.0.37:3000/api/speedtest');
    const jsonData: MeasuredDate[] = response.data;
    return jsonData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const GetMeasuredData = () => {
  const setMeasuredDateArray = useSetRecoilState(MeasuredDateArrayState);

  useEffect(() => {
    const fetchMeasuredData = async () => {
      const jsonData = await fetchData();
      setMeasuredDateArray(jsonData);
    };
    fetchMeasuredData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default GetMeasuredData;
