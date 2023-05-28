import { atom } from 'recoil';
import { SpeedTestData } from '../librespeed/SpeedtestManager';

/* Atom */
export const floorState = atom({
  key: 'floorState',
  default: '',
});

export const roomState = atom({
  key: 'roomState',
  default: '',
});

export const locationClassState = atom({
  key: 'locationClassState',
  default: '',
});

export const startToggleState = atom({
  key: 'startToggleState',
  default: true,
});

export const cookieState = atom({
  key: 'cookieState',
  default: '',
});

export const popUpFloorState = atom({
  key: 'popUpFloorState',
  default: '',
});

export const popUpRoomState = atom({
  key: 'popUpRoomState',
  default: '',
});

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

export const MeasuredDateArrayState = atom<MeasuredDate[]>({
  key: 'MeasuredDateArrayState',
  default: [],
});

// interface NetworkIndex {
//   avgPing: number;
//   jitter: number;
//   downstreamSpeed: number;
//   upstreamSpeed: number;
// }

export const speedTestDataState = atom<SpeedTestData>({
  key: 'speedTestDataState',
  default: {
    testState: 0,
    dlStatus: 0,
    ulStatus: 0,
    pingStatus: 0,
    clientIp: '',
    jitterStatus: 0,
    dlProgress: 0,
    ulProgress: 0,
    pingProgress: 0,
    testId: '',
  },
});

// 시각화 관련
export const PositionSpeedMapState = atom<Map<string, SpeedTestData[]>>({
  key: 'PositionSpeedMapState',
  default: new Map<string, SpeedTestData[]>(),
});
