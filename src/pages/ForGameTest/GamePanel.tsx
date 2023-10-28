import React, { useState } from 'react';
import { Grid } from '@mui/material';
import GameBanner from './GameBanner';
import RecommendPerfBox from './RecommendPerfBox';
import SubmitButton from './SubmitButton';
import SpeedtestManager from '../../librespeed/SpeedtestManager';
import { GameInfoType } from './GamesInfo';

interface GamePanelProps {
  gameInfo: GameInfoType;
}

const GamePanel = ({ gameInfo }: GamePanelProps) => {
  const {
    name,
    url,
    measurment: { ping, upstream, downstream },
  } = gameInfo;

  const [measureEndCalled, setMeasureEndCalled] = useState(false);
  const speedtestManager = SpeedtestManager(
    () => {
      console.log('select server');
    },
    () => {
      console.log('on end');
      setMeasureEndCalled(true);
    }
  );
  const onClickStartButton = async () => {
    speedtestManager.handleClick();
  };

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
      <SubmitButton
        text="측정하기"
        url="/result_page"
        onClick={onClickStartButton}
      />
    </div>
  );
};

export default GamePanel;
