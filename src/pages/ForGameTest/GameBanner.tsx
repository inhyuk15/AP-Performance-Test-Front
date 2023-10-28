import React from 'react';

interface GameImg {
  name: string;
  url: string;
}

const GameBanner = ({ name, url }: GameImg) => {
  return (
    <div>
      <img style={{ width: '100%', height: '40%' }} src={url} alt={name} />
    </div>
  );
};

export default GameBanner;
