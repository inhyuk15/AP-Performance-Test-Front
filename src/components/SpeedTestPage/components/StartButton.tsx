import { useState } from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { Box, Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import SocketClient, { MeasurementResult } from './SocketClient';
import {
  startToggleState,
  floorState,
  roomState,
  locationClassState,
  cookieState,
  NetWorkIndexState,
} from '../../../module/Atom';

const host = import.meta.env.VITE_SERVER_IP;
const httpUrl = `http://${host}:3000/api/save_speedtest`;
const socketUrl = `ws://${host}:3000`;
const { handleClick } = SocketClient(socketUrl);

const StartButton = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [startToggle, setStartToggle] = useRecoilState(startToggleState);
  const setNetWorkIndex = useSetRecoilState(NetWorkIndexState);
  const userCookie = useRecoilValue(cookieState);

  // START 버튼 기능 전제조건
  const floorNumber = useRecoilValue(floorState);
  const roomNumber = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);

  const sendDataToServer = async (measurementResult: MeasurementResult) => {
    try {
      const dataToSend = {
        ...measurementResult,
        floorNumber,
        roomNumber,
        locationClass,
        userCookie,
      };
      const response = await fetch(httpUrl, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      console.log('- - - 측 정 정 보 - - -');
      console.log(measurementResult);

      setNetWorkIndex({
        avgPing: measurementResult.avgPing,
        jitter: measurementResult.jitter,
        upstreamSpeed: measurementResult.upstreamSpeed,
        downstreamSpeed: measurementResult.downstreamSpeed,
      });

      const result = await response.json();
      console.log('Data sent to server:', result);
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  // START onClick Func
  const onClickStartButton = async () => {
    if (floorNumber === '' || roomNumber === '' || locationClass === '') {
      setPopupOpen(true);
    } else {
      setStartToggle(false);

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
    </div>
  );
};

export default StartButton;
