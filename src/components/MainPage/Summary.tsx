import { Box, Typography, Button } from '@mui/material';

const Summary = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 5 }}>
      <Typography variant="h5" sx={{ color: '#FFD700', mb: 2 }}>
        인터넷 속도 측정과 속도 지도를 제공합니다.
      </Typography>
      <Typography variant="h5" sx={{ color: '#FFD700', mb: 2 }}>
        측정하기 - 현재 인터넷 속도 측정
        <br />
        속도지도 - 건물별 속도 확인 하기
      </Typography>
    </Box>
  );
};

export default Summary;
