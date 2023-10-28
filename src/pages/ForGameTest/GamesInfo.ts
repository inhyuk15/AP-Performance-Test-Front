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
  ping: {
    upstream: '100ms',
    downstream: '150ms',
    ping: '30ms',
  },
};

export { OverWatchInfo, LOLInfo };
