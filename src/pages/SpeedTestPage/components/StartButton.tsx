import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { Box, Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import axios from 'axios';
import {
  startToggleState,
  floorState,
  roomState,
  locationClassState,
  cookieState,
  speedTestDataState,
} from '../../../module/Atom';
import SpeedtestManager, {
  SpeedTestData,
} from '../../../librespeed/SpeedtestManager';

const host = (import.meta as any).env.VITE_SERVER;
const httpUrl = `http://${host}/api/save_speedtest`;

export interface SpeedTestWithUserInfoData extends SpeedTestData {
  floorNumber: string;
  roomNumber: string;
  locationClass: string;
  userCookie: string;
}

const StartButton = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [startToggle, setStartToggle] = useRecoilState(startToggleState);

  // START 버튼 기능 전제조건
  const floorNumber = useRecoilValue(floorState);
  const roomNumber = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);
  const userCookie = useRecoilValue(cookieState);

  const sendDataToServer = async (data: SpeedTestData) => {
    try {
      const dataToSend: SpeedTestWithUserInfoData = {
        ...data,
        floorNumber,
        roomNumber,
        locationClass,
        userCookie,
      };

      const response = await axios.post(httpUrl, dataToSend, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });

      console.log('Data sent to server:', response.data);
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };
  const [endCalled, setEndCalled] = useState(false);

  const speedTestData = useRecoilValue(speedTestDataState);
  const speedtestManager = SpeedtestManager(
    () => {
      console.log('select server');
    },
    () => {
      console.log('on end');
      // sendDataToServer(speedTestData);
      setStartToggle(true);
      setEndCalled(true);
    }
  );
  useEffect(() => {
    if (endCalled) {
      sendDataToServer(speedTestData);
      console.log(speedTestData);
      setEndCalled(false);
    }
  }, [endCalled, speedTestData]);

  // START onClick Func
  const onClickStartButton = async () => {
    if (floorNumber === '' || roomNumber === '' || locationClass === '') {
      setPopupOpen(true);
    } else {
      // startToggle에 따른 코드 추가
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
              color: startToggle ? '#1976d2' : '#FF0000',
            },
            height: '50px',
            backgroundColor: startToggle ? '' : '#FF0000', // Set background color to red when startToggle is false
            color: startToggle ? '' : '#FFF', // Set text color to white when startToggle is false
          }}
        >
          {startToggle ? 'START' : 'Abort'}
        </Button>

        <Dialog open={popupOpen} onClose={popupClose}>
          <DialogTitle>위치 설정을 먼저 해주세요.</DialogTitle>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button onClick={popupClose}>확인</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default StartButton;
