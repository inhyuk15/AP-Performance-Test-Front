import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import {
  PositionSpeedMapState,
  MeasuredDateArrayState,
} from '../../../module/Atom';
import GetMeasuredData from './GetMeasuredData';

interface WholeJson {
  _id: string;
  avgPing: number;
  jitter: number;
  downstreamSpeed: number;
  upstreamSpeed: number;
  floorNumber: number;
  roomNumber: number;
  locationClass: number;
  userCookie: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface NetworkIndex {
  avgPing: number;
  jitter: number;
  downstreamSpeed: number;
  upstreamSpeed: number;
}

const SpecifyKey = (obj: WholeJson): string => {
  const { floorNumber, roomNumber, locationClass } = obj;
  return `floorNumber:${floorNumber},roomNumber:${roomNumber},locationClass:${locationClass}`;
};

const PushDataToMap = () => {
  GetMeasuredData();
  const setPositionSpeedMap = useSetRecoilState(PositionSpeedMapState);

  const jsonData = useRecoilValue(MeasuredDateArrayState);

  useEffect(() => {
    const updatePositionSpeedMap = () => {
      const newDataMap = new Map<string, NetworkIndex[]>();

      jsonData.forEach(item => {
        const key: string = SpecifyKey(item);
        const value: NetworkIndex = {
          avgPing: item.avgPing,
          jitter: item.jitter,
          downstreamSpeed: item.downstreamSpeed,
          upstreamSpeed: item.upstreamSpeed,
        };

        const existingValues = newDataMap.get(key) || [];
        existingValues.push(value);
        newDataMap.set(key, existingValues);
      });

      setPositionSpeedMap(newDataMap);
    };

    updatePositionSpeedMap();
  }, [setPositionSpeedMap, jsonData]);
};

export default PushDataToMap;
