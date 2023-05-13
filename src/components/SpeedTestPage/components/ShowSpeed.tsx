import { Grid } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { NetWorkIndexState } from '../../../module/Atom';

const ShowSpeed = () => {
  const netWorkIndex = useRecoilValue(NetWorkIndexState);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} style={{ textAlign: 'right' }}>
          <strong>Avg Ping(ms):</strong>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
          {netWorkIndex.avgPing}
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'right' }}>
          <strong>Jitter(ms):</strong>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
          {netWorkIndex.jitter}
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'right' }}>
          <strong>Upstream(kb/s):</strong>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
          {netWorkIndex.upstreamSpeed}
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'right' }}>
          <strong>Downstream(kb/s):</strong>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
          {netWorkIndex.downstreamSpeed}
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowSpeed;
