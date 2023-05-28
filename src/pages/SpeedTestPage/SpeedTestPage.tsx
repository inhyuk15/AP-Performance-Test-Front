import { useRecoilValue } from 'recoil';
import { CssBaseline, Container } from '@mui/material';

import Infomation from './components/Infomation';
import LocateFloorRoom from './components/LocateFloorRoom';
import LocateFrame from './components/LocateFrame';
import StartButton from './components/StartButton';
import ShowSpeed from './components/ShowSpeed/ShowSpeed';
import Debug from './components/Debug';

import { startToggleState } from '../../module/Atom';

const SpeedTestPage = () => {
  const startToggle = useRecoilValue(startToggleState);

  return (
    <div>
      <CssBaseline />
      <Infomation />
      {startToggle ? (
        <Container>
          <LocateFloorRoom />
          <LocateFrame />
        </Container>
      ) : (
        <ShowSpeed />
      )}
      <StartButton />
      <Debug />
    </div>
  );
};

export default SpeedTestPage;
