import { atom } from 'recoil';

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

interface NetworkIndex {
  avgPing: number;
  jitter: number;
  downstreamSpeed: number;
  upstreamSpeed: number;
}

export const NetWorkIndexState = atom({
  key: 'NetWorkIndexState',
  default: {
    avgPing: 0,
    jitter: 0,
    upstreamSpeed: 0,
    downstreamSpeed: 0,
  },
});

export const PositionSpeedMapState = atom<Map<string, NetworkIndex[]>>({
  key: 'PositionSpeedMapState',
  default: new Map<string, NetworkIndex[]>(),
});
