const OverWatchInfo = {
  name: 'overwatch',
  url: './OverWatch.jpg',
  measurment: {
    upstream: { minimum: '1mbps', recommended: '2mbps' },
    downstream: { minimum: '2mbps', recommended: '10mbps' },
    ping: { minimum: '60ms', recommended: '30ms' },
  },
};

const LOLInfo = {
  name: 'LeageOfLegend',
  url: './LOL.jpeg',
  measurment: {
    upstream: { minimum: '1mbps', recommended: '2mbps' },
    downstream: { minimum: '6mbps', recommended: '10mbps' },
    ping: { minimum: '60ms', recommended: '30ms' },
  },
};

const KartInfo = {
  name: 'KartRider',
  url: './Kart.jpeg',
  measurment: {
    upstream: { minimum: '1mbps', recommended: '2mbps' },
    downstream: { minimum: '1mbps', recommended: '5mbps' },
    ping: { minimum: '100ms', recommended: '50ms' },
  },
};
const BGInfo = {
  name: 'BattleGround',
  url: './BattleGround.jpg',
  measurment: {
    upstream: { minimum: '1mbps', recommended: '2mbps' },
    downstream: { minimum: '1mbps', recommended: '5mbps' },
    ping: { minimum: '100ms', recommended: '50ms' },
  },
};
const MapleInfo = {
  name: 'MapleStory',
  url: './Maple.jpg',
  measurment: {
    upstream: { minimum: '1mbps', recommended: '2mbps' },
    downstream: { minimum: '1mbps', recommended: '2mbps' },
    ping: { minimum: '300ms', recommended: '100ms' },
  },
};

const ValorantInfo = {
  name: 'Valorant',
  url: './Valorant.jpg',
  measurment: {
    upstream: { minimum: '1mbps', recommended: '1mbps' },
    downstream: { minimum: '1mbps', recommended: '3mbps' },
    ping: { minimum: '60ms', recommended: '30ms' },
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
