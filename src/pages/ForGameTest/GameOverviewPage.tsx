import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import GamePanel from './GamePanel';
import {
  OverWatchInfo,
  LOLInfo,
  KartInfo,
  BGInfo,
  MapleInfo,
  ValorantInfo,
  GameInfoType,
} from './GamesInfo';

const StyledButton = styled(Button)`
  margin-top: 15px;
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 20px;
  &:hover {
    background-color: #303f9f;
  }
`;
const games = [
  { name: 'OverWatch', info: OverWatchInfo },
  { name: 'LeagueOfLegend', info: LOLInfo },
  { name: 'KartRider', info: KartInfo },
  { name: 'BattleGround', info: BGInfo },
  { name: 'MapleStory', info: MapleInfo },
  { name: 'Valorant', info: ValorantInfo },
];

const GameButton = ({ name, info, setSelectedGameInfo }: any) => {
  return (
    <StyledButton
      onClick={() => {
        setSelectedGameInfo(info);
      }}
    >
      {name}
    </StyledButton>
  );
};

const GameOverviewPage = () => {
  const [selectedGameInfo, setSelectedGameInfo] =
    useState<GameInfoType>(OverWatchInfo);

  return (
    <div>
      {games.map(game => (
        <GameButton
          key={game.name}
          name={game.name}
          info={game.info}
          setSelectedGameInfo={setSelectedGameInfo}
        />
      ))}
      <GamePanel gameInfo={selectedGameInfo} />
    </div>
  );
};

export default GameOverviewPage;
