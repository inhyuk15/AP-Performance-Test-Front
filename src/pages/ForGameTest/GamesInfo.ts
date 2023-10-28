const OverWatchInfo = {
  name: 'overwatch',
  url: './OverWatch.jpg',
  measurment: {
    upstream: { minimum: '100ms', recommended: '150ms' },
    downstream: { minimum: '100ms', recommended: '150ms' },
    ping: { minimum: '100ms', recommended: '150ms' },
  },
};

const LOLInfo = {
  name: 'LeageOfLegend',
  url: './LOL.jpeg',
  measurment: {
    upstream: { minimum: '100ms', recommended: '150ms' },
    downstream: { minimum: '100ms', recommended: '150ms' },
    ping: { minimum: '100ms', recommended: '150ms' },
  },
};

const KartInfo = {
  name: 'KartRider',
  url: './Kart.jpeg',
  measurment: {
    upstream: { minimum: '100ms', recommended: '150ms' },
    downstream: { minimum: '100ms', recommended: '150ms' },
    ping: { minimum: '100ms', recommended: '150ms' },
  },
};
const BGInfo = {
  name: 'BattleGround',
  url: './BattleGround.jpg',
  measurment: {
    upstream: { minimum: '100ms', recommended: '150ms' },
    downstream: { minimum: '100ms', recommended: '150ms' },
    ping: { minimum: '100ms', recommended: '150ms' },
  },
};
const MapleInfo = {
  name: 'MapleStory',
  url: './Maple.jpg',
  measurment: {
    upstream: { minimum: '100ms', recommended: '150ms' },
    downstream: { minimum: '100ms', recommended: '150ms' },
    ping: { minimum: '100ms', recommended: '150ms' },
  },
};

const ValorantInfo = {
  name: 'Valorant',
  url: './Valorant.jpg',
  measurment: {
    upstream: { minimum: '100ms', recommended: '150ms' },
    downstream: { minimum: '100ms', recommended: '150ms' },
    ping: { minimum: '100ms', recommended: '150ms' },
  },
};

export interface GameInfoType {
  name: string;
  url: string;
  measurment: {
    ping: {
      minimum: string;
      recommended: string;
    };
    upstream: {
      minimum: string;
      recommended: string;
    };
    downstream: {
      minimum: string;
      recommended: string;
    };
  };
}

export { OverWatchInfo, LOLInfo, KartInfo, BGInfo, MapleInfo, ValorantInfo };
