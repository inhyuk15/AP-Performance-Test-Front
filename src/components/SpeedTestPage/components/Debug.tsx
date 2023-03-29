import { Grid, Divider, Box } from '@mui/material';

import { styled } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';
import {
  floorState,
  roomState,
  locationClassState,
} from '../../../module/Atom';

const Debug = () => {
  const floor = useRecoilValue(floorState);
  const room = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);

  return (
    <div>
      floor: {floor} <br />
      room: {room} <br />
      locationClass: {locationClass}
    </div>
  );
};

export default Debug;
