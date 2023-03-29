import { CssBaseline } from '@mui/material';

import Infomation from './components/Infomation';
import LocateFloorRoom from './components/LocateFloorRoom';
import Debug from './components/Debug';

const SpeedTestPage = () => {
  return (
    <div>
      <CssBaseline />
      <Infomation />
      <LocateFloorRoom />
      {/* <Debug /> */}
    </div>
  );
};

export default SpeedTestPage;
