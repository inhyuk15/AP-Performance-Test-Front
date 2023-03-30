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

export const StartToggleState = atom({
  key: 'StartToggleState',
  default: true,
});
