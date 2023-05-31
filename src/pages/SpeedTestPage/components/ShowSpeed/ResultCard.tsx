import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

// for only ulstream, dlstream
interface BodyType {
  status: number;
  state: number;
}

interface ResultCardProps {
  header: string;
  // eslint-disable-next-line react/require-default-props
  body?: BodyType; // body prop을 선택적으로 수정
  footer: string;
}

const mbpsToAmount = (s: number): number => {
  const ret = 1 - 1 / 1.3 ** Math.sqrt(s);
  return ret;
};

const oscillate = (): number => {
  const ret = 1 + 0.02 * Math.sin(Date.now() / 100);
  return ret;
};

const ResultCard: React.FC<ResultCardProps> = ({
  header,
  body = undefined, // body prop의 기본값을 undefined로 수정
  footer,
}) => (
  <Container
    sx={{
      width: '22rem',
      textAlign: 'center',
    }}
  >
    {/* header */}
    <Typography>
      <span
        style={{
          color: '#1976d2',
        }}
      >
        {header}
      </span>
    </Typography>

    {/* body */}
    {body && (
      <Box>
        <ReactSpeedometer
          height={150}
          minValue={0}
          maxValue={1}
          value={mbpsToAmount(
            body.status * (body.state === 1 ? oscillate() : 1)
          )}
          segments={20}
          needleColor="black"
          needleHeightRatio={0.8}
          startColor="red"
          endColor="LimeGreen"
          maxSegmentLabels={0}
        />
      </Box>
    )}

    {/* footer */}
    <Typography>
      <span
        style={{
          fontSize: '2em',
          color: 'salmon',
        }}
      >
        {footer}
      </span>
    </Typography>
  </Container>
);

export default ResultCard;
