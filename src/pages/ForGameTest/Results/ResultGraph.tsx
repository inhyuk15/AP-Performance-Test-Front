// GaugeBar.tsx

import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

interface GaugeBarProps {
  value: number; // 0 ~ 100의 값
}

const StyledGauge = styled(Box)({
  width: '100%',
  height: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  border: '2px solid black',
  borderRadius: '10px',
});
const LeftSection = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
  flex: 1,
  height: '100%',
  backgroundColor: bgcolor,
  border: '1px solid black',
  borderTopLeftRadius: '7px',
  borderBottomLeftRadius: '7px',
}));

const MiddleSection = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
  flex: 1,
  height: '100%',
  backgroundColor: bgcolor,
  border: '1px solid black',
}));

const RightSection = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
  flex: 1,
  height: '100%',
  backgroundColor: bgcolor,
  border: '1px solid black',
  borderTopRightRadius: '7px',
  borderBottomRightRadius: '7px',
}));

const Triangle = styled('div')({
  width: 0,
  height: 0,
  borderTop: '30px solid red',
  borderLeft: '10px solid transparent',
  borderRight: '10px solid transparent',
  position: 'absolute',
  top: '-35px',
  transform: 'translateX(-50%)',
});

const GaugeText = styled('span')({
  position: 'absolute',
  fontSize: '22px',
  bottom: '-40px',
  transform: 'translateY(-50%)',
});

const ResultGraph = ({ value }: GaugeBarProps) => {
  return (
    <StyledGauge>
      <GaugeText style={{ left: 0 }}>Bad</GaugeText>
      <LeftSection bgcolor="#FF4136" />
      <MiddleSection bgcolor="#FF851B" />
      <MiddleSection bgcolor="#FFDC00" />
      <MiddleSection bgcolor="#01FF70" />
      <RightSection bgcolor="#2ECC40" />
      <GaugeText style={{ right: 0 }}>Good</GaugeText>
      <Triangle style={{ left: `${value}%` }} />
    </StyledGauge>
  );
};

export default ResultGraph;
