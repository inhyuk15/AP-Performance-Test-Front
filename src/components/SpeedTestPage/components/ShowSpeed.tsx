import { Grid } from '@mui/material';
import { useRecoilValue } from 'recoil';
import ReactSpeedometer from 'react-d3-speedometer';
import { speedTestDataState } from '../../../module/Atom';

const mbpsToAmount = (s: number): number => {
  const ret = 1 - 1 / 1.3 ** Math.sqrt(s);
  return ret;
};

const oscillate = (): number => {
  const ret = 1 + 0.02 * Math.sin(Date.now() / 100);
  return ret;
};

const ShowSpeed = () => {
  const speedTestData = useRecoilValue(speedTestDataState);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} style={{ textAlign: 'right' }}>
          <strong>Avg Ping(ms):</strong>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
          {speedTestData.pingStatus}
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'right' }}>
          <strong>Jitter(ms):</strong>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
          {speedTestData.jitterStatus}
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'right' }}>
          <strong>Upstream(kb/s):</strong>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
          {speedTestData.ulStatus}
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'right' }}>
          <strong>Downstream(kb/s):</strong>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
          {speedTestData.dlStatus}
        </Grid>
      </Grid>

      {/* 속도 계기판 */}
      <ReactSpeedometer
        minValue={0}
        maxValue={1}
        value={mbpsToAmount(
          speedTestData.dlStatus *
            (speedTestData.testState === 1 ? oscillate() : 1)
        )}
        segments={20}
        needleColor="black"
        startColor="red"
        endColor="green"
        maxSegmentLabels={5}
      />

      <ReactSpeedometer
        minValue={0}
        maxValue={1}
        value={mbpsToAmount(
          speedTestData.ulStatus *
            (speedTestData.testState === 1 ? oscillate() : 1)
        )}
        segments={20}
        needleColor="black"
        startColor="red"
        endColor="green"
        maxSegmentLabels={5}
      />
    </div>
  );
};

export default ShowSpeed;
