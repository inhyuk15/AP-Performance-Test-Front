import React, { useState } from 'react';
import { Grid } from '@mui/material';
import {
  useRecoilCallback,
  useRecoilSnapshot,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import GameBanner from './GameBanner';
import RecommendPerfBox from './RecommendPerfBox';
import SubmitButton from './SubmitButton';
import SpeedtestManager from '../../librespeed/SpeedtestManager';
import { GameInfoType } from './GamesInfo';
import {
  resultSummaryState,
  speedTestDataFromServerState,
} from '../../recoil/Atom';

interface GamePanelProps {
  gameInfo: GameInfoType;
}

const extractNumber = (str: string) => {
  return parseInt(str.replace(/[^0-9]/g, ''), 10);
};

const evaluatePerformance = (userValue: number, gameValue: string) => {
  const percentage = (userValue / extractNumber(gameValue)) * 100;

  if (percentage >= 80) {
    return 'Good';
  }
  if (percentage >= 40 && percentage < 80) {
    return 'NotBad';
  }
  console.log(percentage);
  return 'Bad';
};

const GamePanel = ({ gameInfo }: GamePanelProps) => {
  const {
    name,
    url,
    measurment: { ping, upstream, downstream },
  } = gameInfo;
  // const speedTestData = useRecoilValue(speedTestDataFromServerState);
  const [speedTestData, setSpeedTestData] = useRecoilState(
    speedTestDataFromServerState
  );

  const compareRequirements = (curSpeedTestData: any) => {
    const gamePing = gameInfo.measurment.ping.recommended;
    const gameUpstream = gameInfo.measurment.upstream.recommended;
    const gameDownstream = gameInfo.measurment.downstream.recommended;
    console.log(gamePing + gameUpstream + gameDownstream);
    const userPing = curSpeedTestData.pingStatus;
    const userUpstream = curSpeedTestData.ulStatus;
    const userDownstream = curSpeedTestData.dlStatus;
    console.log(userPing + userUpstream + userDownstream);

    const pingEvaluation = evaluatePerformance(userPing, gamePing);
    const upstreamEvaluation = evaluatePerformance(userUpstream, gameUpstream);
    const downstreamEvaluation = evaluatePerformance(
      userDownstream,
      gameDownstream
    );

    return {
      pingEvaluation,
      upstreamEvaluation,
      downstreamEvaluation,
    };
  };
  const handleOnStart = useRecoilCallback(({ set }) => () => {
    set(resultSummaryState, {
      pingEvaluation: 'test ongoing',
      upstreamEvaluation: 'test ongoing',
      downstreamEvaluation: 'test ongoing',
    });
  });

  const handleOnEnd = useRecoilCallback(({ snapshot, set }) => () => {
    const currentSpeedTestData = snapshot.getLoadable(
      speedTestDataFromServerState
    ).contents;
    const { pingEvaluation, upstreamEvaluation, downstreamEvaluation } =
      compareRequirements(currentSpeedTestData);

    set(resultSummaryState, {
      pingEvaluation,
      upstreamEvaluation,
      downstreamEvaluation,
    });
  });
  const speedtestManager = SpeedtestManager(handleOnStart, handleOnEnd);

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
