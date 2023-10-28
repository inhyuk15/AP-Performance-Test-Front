import React from 'react';
import { Grid } from '@mui/material';
import GameBanner from './GameBanner';
import RecommendPerfBox from './RecommendPerfBox';
import SubmitButton from './SubmitButton';
import { OverWatchInfo } from './GamesInfo';

const GamePanel = () => {
  const {
    name,
    url,
    measurment: { ping, upstream, downstream },
  } = OverWatchInfo;

  return (
    <div className="banner">
      <GameBanner name={name} url={url} />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <RecommendPerfBox
            type="ping"
            minimum={ping.minimum}
            recommended={ping.recommended}
          />
        </Grid>
        <Grid item xs={4}>
          <RecommendPerfBox
            type="upstream"
            minimum={upstream.minimum}
            recommended={upstream.recommended}
          />
        </Grid>
        <Grid item xs={4}>
          <RecommendPerfBox
            type="downstream"
            minimum={downstream.minimum}
            recommended={downstream.recommended}
          />
        </Grid>
      </Grid>
      <SubmitButton text="측정하기" />
    </div>
  );
};

export default GamePanel;
