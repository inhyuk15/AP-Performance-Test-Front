import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ShowSpeed from '../../Speedtest/components/B_Show_Speed/B_ShowSpeed';
import ResultGraph from './ResultGraph';
import ResultSummary from './ResultSummary';

const ResultPageContainer = styled(Container)({
  height: '100vh',
  width: '100%',
});

const SpeedContainer = styled(Grid)({
  width: '60%',
});

const ResultContainer = styled(Grid)({
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const SummaryContainer = styled(Grid)({
  flex: 0.5,
});

const Spacer = styled(Grid)({
  flex: 0.15,
});

const GraphContainer = styled(Grid)({
  flex: 0.25,
});

const ResultPage = () => {
  return (
    <ResultPageContainer>
      <Grid container spacing={3}>
        <SpeedContainer item>
          <ShowSpeed />
        </SpeedContainer>
        <ResultContainer item container direction="column" spacing={2}>
          <SummaryContainer item>
            <ResultSummary />
          </SummaryContainer>
          <Spacer item />
          <GraphContainer item>
            <ResultGraph value={50} />
          </GraphContainer>
        </ResultContainer>
      </Grid>
    </ResultPageContainer>
  );
};

export default ResultPage;
