import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import {
  PositionSpeedMapState,
  MeasurementDataState,
} from '../../../module/Atom';

import GetMeasuredData, {
  MeasurementData,
  SpeedTestDataFromServer,
} from './GetMeasuredData';

// interface WholeJson {
//   _id: string;
//   avgPing: number;
//   jitter: number;
//   downstreamSpeed: number;
//   upstreamSpeed: number;
//   floorNumber: number;
//   roomNumber: number;
//   locationClass: number;
//   userCookie: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// interface NetworkIndex {
//   avgPing: number;
//   jitter: number;
//   downstreamSpeed: number;
//   upstreamSpeed: number;
// }

const SpecifyKey = (obj: MeasurementData): string => {
  const { user } = obj;
  const { floorNumber, roomNumber, locationClass } = user;
  return `floorNumber:${floorNumber},roomNumber:${roomNumber},locationClass:${locationClass}`;
};

const PushDataToMap = () => {
  GetMeasuredData();
  const setPositionSpeedMap = useSetRecoilState(PositionSpeedMapState);

  const measurementData = useRecoilValue(MeasurementDataState);

  useEffect(() => {
    const updatePositionSpeedMap = () => {
      const newDataMap = new Map<string, SpeedTestDataFromServer[]>();
      measurementData.forEach(item => {
        // console.log('MM', item.speedtest.pingStatus);
        console.log(item);
        if (item === undefined || item === null) {
          console.log('aa');
        }

        const key: string = SpecifyKey(item);
        const value: SpeedTestDataFromServer = {
          pingStatus: item.speedTest.pingStatus,
          jitterStatus: item.speedTest.jitterStatus,
          dlStatus: item.speedTest.dlStatus,
          ulStatus: item.speedTest.ulStatus,
          clientIp: item.speedTest.clientIp,
        };

        const existingValues = newDataMap.get(key) || [];
        existingValues.push(value);
        newDataMap.set(key, existingValues);
      });

      setPositionSpeedMap(newDataMap);
    };

    updatePositionSpeedMap();
  }, [setPositionSpeedMap, measurementData]);
};

export default PushDataToMap;
