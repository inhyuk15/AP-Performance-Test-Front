import { Box, Container, Grid } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { speedTestDataState } from '../../../../module/Atom';
import ResultCard from './ResultCard';

const ShowSpeed = () => {
  const speedTestData = useRecoilValue(speedTestDataState);

  const dlParam = {
    status: speedTestData.dlStatus,
    state: speedTestData.testState,
  };
  const ulParam = {
    status: speedTestData.ulStatus,
    state: speedTestData.testState,
  };

  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box style={{ maxWidth: '700px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <ResultCard
              header="Ping(ms)"
              footer={`${speedTestData.pingStatus}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResultCard
              header="Jitter(ms)"
              footer={`${speedTestData.jitterStatus}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResultCard
              header="Downstream(ms)"
              body={dlParam}
              footer={`${speedTestData.dlStatus}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResultCard
              header="Upstream(ms)"
              body={ulParam}
              footer={`${speedTestData.ulStatus}`}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ShowSpeed;
