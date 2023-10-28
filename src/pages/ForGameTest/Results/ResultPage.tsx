import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useRecoilValue } from 'recoil';
import ShowSpeed from '../../Speedtest/components/B_Show_Speed/B_ShowSpeed';
import ResultGraph from './ResultGraph';
import ResultSummary from './ResultSummary';
import { Evaluation, resultSummaryState } from '../../../recoil/Atom';
import GameBanner from '../GameBanner';

const ResultPageContainer = styled(Container)({
  height: '100vh',
  width: '100%',
});

const SpeedContainer = styled(Grid)({
  width: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
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

const getScore = (evaluation: Evaluation): number => {
  switch (evaluation) {
    case 'good':
      return 100;
    case 'notBad':
      return 70;
    case 'bad':
      return 30;
    default:
      return 0;
  }
};

const calculateTotalScore = (evaluations: Evaluation[]): number => {
  const totalPoints = evaluations.reduce(
    (acc, curr) => acc + getScore(curr),
    0
  );
  const averageScore = totalPoints / evaluations.length;
  return averageScore;
};

const ResultPage = () => {
  const resultSummary = useRecoilValue(resultSummaryState);

  let overallPerformance: Evaluation = 'testOngoing';
  if (
    resultSummary.downstreamEvaluation === 'bad' ||
    resultSummary.pingEvaluation === 'bad' ||
    resultSummary.upstreamEvaluation === 'bad'
  )
    overallPerformance = 'bad';
  else if (
    resultSummary.downstreamEvaluation === 'good' ||
    resultSummary.pingEvaluation === 'good' ||
    resultSummary.upstreamEvaluation === 'good'
  )
    overallPerformance = 'good';
  else overallPerformance = 'notBad';

  const totalScore = calculateTotalScore([
    resultSummary.pingEvaluation,
    resultSummary.downstreamEvaluation,
    resultSummary.upstreamEvaluation,
    overallPerformance,
  ]);

  return (
    <ResultPageContainer>
      <Grid container spacing={3}>
        <SpeedContainer item>
          <Typography
            style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            현재 인터넷 환경은
          </Typography>
          <ShowSpeed />
        </SpeedContainer>
        <ResultContainer item container direction="column" spacing={2}>
          <SummaryContainer item>
            <ResultSummary
              overall={overallPerformance}
              ping={resultSummary.pingEvaluation}
              downstream={resultSummary.downstreamEvaluation}
              upstream={resultSummary.upstreamEvaluation}
            />
          </SummaryContainer>
          <Spacer item>
            <GameBanner name="overwath good" url="./overwatchGood.jpeg" />
          </Spacer>
          <GraphContainer item>
            <ResultGraph value={totalScore} />
          </GraphContainer>
        </ResultContainer>
      </Grid>
    </ResultPageContainer>
  );
};

export default ResultPage;
