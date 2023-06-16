import { Container } from '@mui/material';

import cnuCse from '../../../../asset/img/cnu_cse.jpeg';
import userGuideSpeedMap from '../../../../asset/img/UserGuid_SpeedMap.jpg';

const UserGuide = () => {
  return (
    <Container>
      <div style={{ marginTop: '12rem' }}>
        <img style={{ width: '100%', display: 'block' }} src={cnuCse} alt="" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <img
          style={{ width: '100%', height: '40%' }}
          src={userGuideSpeedMap}
          alt=""
        />
      </div>
    </Container>
  );
};

export default UserGuide;
