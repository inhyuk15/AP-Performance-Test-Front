import React from 'react';
import { Typography, Box } from '@mui/material';
import {
  badResults,
  downstreamResults,
  goodResults,
  notBadResults,
  pingResults,
  testOngoing,
  upstreamResults,
} from '../ResultsMsg';

interface ResultSummaryProps {
  overall: 'bad' | 'notBad' | 'good' | 'testOngoing';
  ping: 'bad' | 'notBad' | 'good' | 'testOngoing';
  upstream: 'bad' | 'notBad' | 'good' | 'testOngoing';
  downstream: 'bad' | 'notBad' | 'good' | 'testOngoing';
}

const ResultSummary = ({
  overall,
  ping,
  upstream,
  downstream,
}: ResultSummaryProps) => {
  let overallData = testOngoing;
  switch (overall) {
    case 'bad':
      overallData = badResults;
      break;
    case 'notBad':
      overallData = notBadResults;
      break;
    case 'good':
      overallData = goodResults;
      break;
    default:
      overallData = testOngoing;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: '#FFFDD0', color: '#4c4186', padding: '1rem' }}
    >
      <Typography style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {overallData.title}
      </Typography>
      <Typography style={{ fontSize: '1.2rem' }}>
        {overallData.description1}
      </Typography>
      <Typography style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
        {overallData.description2}
      </Typography>
      <Typography style={{ fontSize: '1.2rem' }}>
        ping: {pingResults[ping]}
      </Typography>
      <Typography style={{ fontSize: '1.2rem' }}>
        download: {downstreamResults[downstream]}
      </Typography>
      <Typography style={{ fontSize: '1.2rem' }}>
        upload: {upstreamResults[upstream]}
      </Typography>
    </Box>
  );
};

export default ResultSummary;
