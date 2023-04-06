import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Box, Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import SocketClient, { MeasurementResult } from './SocketClient';
import {
  startToggleState,
  floorState,
  roomState,
  locationClassState,
  cookieState,
} from '../../../module/Atom';

const host = '192.168.0.147';
const httpUrl = `http://${host}:3000/api/save_speedtest`;
const socketUrl = `ws://${host}:3000`;
const { handleClick } = SocketClient(socketUrl);

const StartButton = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const setStartToggle = useSetRecoilState(startToggleState);
  const makedCookie = useRecoilValue(cookieState);

  // START 버튼 기능 전제조건
  const floor = useRecoilValue(floorState);
  const room = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);

  const sendDataToServer = async (measurementResult: MeasurementResult) => {
    try {
      // 측정 데이터를 서버에 보냄 || 독립개체
      const response = await fetch(httpUrl, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Cookie: '쿠키이름=쿠키값',
        },
        body: JSON.stringify(measurementResult),
      });
      const result = await response.json();
      console.log('Data sent to server:', result);
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  // START onClick Func
  const onClickStartButton = async () => {
    if (floor === '' || room === '' || locationClass === '') {
      setPopupOpen(true);
    } else {
      setStartToggle(prev => !prev);

      try {
        // handleClick() -> 속도 측정 함수
        const resultFromMeasurement = await handleClick();
        await sendDataToServer(resultFromMeasurement);

        console.log(
          `Average Ping: ${resultFromMeasurement.avgPing}ms, Jitter: ${resultFromMeasurement.jitter}ms`
        );
        console.log(
          `upstream: ${resultFromMeasurement.upstreamSpeed}, downstream: ${resultFromMeasurement.downstreamSpeed}`
        );
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
          height: '15vh',
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
    </div>
  );
};

export default StartButton;
