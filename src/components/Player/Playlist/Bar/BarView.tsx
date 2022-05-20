import PlaylistIcon from '@assets/icons/playlist_ico.svg';
import { Album } from '@data/music';
import { SubTitle } from '@shared/Typography';
import * as React from 'react';
import Song from '../Song';
import { Button, Container, Inner } from './BarStyle';

interface Props {
  album: Album;
  onClick(): void;
}

const Bar: React.FC<Props> = ({ album, onClick }) => {
  return (
    <Container>
      <Button onClick={onClick}>
        <PlaylistIcon />
      </Button>
      <Inner>
        <SubTitle>NEXT</SubTitle>
        <Song song={album.songs[0]} />
      </Inner>
    </Container>
  );
};

export default Bar;
