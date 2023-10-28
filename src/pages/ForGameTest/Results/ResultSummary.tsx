import React from 'react';
import { Typography, Box } from '@mui/material';

const ResultSummary = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: '#FFFDD0', color: '#4c4186', padding: '1rem' }}
    >
      <Typography style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        원활한 성능!!
      </Typography>
      <Typography style={{ fontSize: '1.2rem' }}>
        게임을 즐기기에 문제를 느끼지 않습니다.
      </Typography>
      <Typography style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
        피시방에서 즐기는 것과 차이가 없습니다.
      </Typography>
      <Typography style={{ fontSize: '1.2rem' }}>ping: 원활</Typography>
      <Typography style={{ fontSize: '1.2rem' }}>업로드 속도: 원활</Typography>
      <Typography style={{ fontSize: '1.2rem' }}>
        다운로드 속도: 원활
      </Typography>
    </Box>
  );
};

export default ResultSummary;
