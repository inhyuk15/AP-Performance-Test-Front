import { useState } from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { Box, Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import {
  startToggleState,
  floorState,
  roomState,
  locationClassState,
  cookieState,
  speedTestDataState,
} from '../../../module/Atom';
import SpeedtestManager from '../../../librespeed/SpeedtestManager';

const StartButton = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [startToggle, setStartToggle] = useRecoilState(startToggleState);

  // const setNetWorkIndex = useSetRecoilState(NetWorkIndexState);
  // const net = useRecoilValue(NetWorkIndexState);

  // const [netWorkIndex, setNetWorkIndex] = useRecoilState(NetWorkIndexState);

  // START 버튼 기능 전제조건
  const floorNumber = useRecoilValue(floorState);
  const roomNumber = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);
  const [speedTestData, setSpeedtestData] = useRecoilState(speedTestDataState);
  const speedtestManager = SpeedtestManager(
    () => {
      console.log('select server');
    },
    () => {
      console.log('on end');
      // const networkIndex: NetworkIndex = {
      //   avgPing: pingStatus,
      //   jitter: jitterStatus,
      //   downstreamSpeed: dlStatus,
      //   upstreamSpeed: ulStatus,
      // };
      // console.log(networkIndex);
      // setNetWorkIndex(networkIndex);
      console.log('endd');
    }
  );

  const [handleClick, setHandleClick] = useState(speedtestManager.handleClick);

  // );

  // START onClick Func
  const onClickStartButton = async () => {
    if (floorNumber === '' || roomNumber === '' || locationClass === '') {
      setPopupOpen(true);
    } else {
      setStartToggle(false);

      try {
        speedtestManager.handleClick();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const popupClose = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
        }}
      >
        <Button
          onClick={onClickStartButton}
          variant="contained"
          sx={{
            fontSize: '2rem',
            '@media (max-width:600px)': {
              fontSize: '2rem',
            },
            borderRadius: '15px',
            width: '300px',
            '&:hover': {
              backgroundColor: '#FFF',
              color: '#1976d2',
            },
            height: '50px',
          }}
        >
          START
        </Button>
        <Dialog open={popupOpen} onClose={popupClose}>
          <DialogTitle>위치 설정을 먼저 해주세요.</DialogTitle>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button onClick={popupClose}>확인</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <br />
      <div>
        <span>Download: {speedTestData.dlStatus} Mbps</span>
      </div>
      <div>
        <span>Upload: {speedTestData.ulStatus} Mbps</span>
      </div>
      <div>
        <span>Ping: {speedTestData.pingStatus} ms</span>
      </div>
      <div>
        <span>Jitter: {speedTestData.jitterStatus} ms</span>
      </div>

      <br />
    </div>
  );
};

export default StartButton;
