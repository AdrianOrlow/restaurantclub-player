import { Album } from '@data/music';
import * as React from 'react';
import { useState } from 'react';
import { Player } from '../utils/hooks/usePlayer';
import Bar from './Bar';
import List from './List';

interface Props {
  album: Album;
  player: Player;
}

const Playlist: React.FC<Props> = ({ album, player }) => {
  const [showList, setShowList] = useState<boolean>(false);

  return (
    <>
      <Bar onClick={() => setShowList((v) => !v)} album={album} />
      <List
        show={showList}
        album={album}
        onClose={() => setShowList(false)}
        player={player}
      />
    </>
  );
};

export default Playlist;
