import Page from '@components/Player/Page';
import music from '@data/music';
import * as React from 'react';

const PlayerPage: React.FC = () => {
  return <Page albums={music} />;
};

export default PlayerPage;
