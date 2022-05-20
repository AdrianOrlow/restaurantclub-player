import { Song } from '@data/music';
import * as React from 'react';
import { Container, Length, Title } from './SongStyle';

interface Props {
  song: Song;
}

const Song: React.FC<Props> = ({ song }) => {
  const { title, lengthSeconds } = song;
  const minutes = Math.floor(lengthSeconds / 60);
  const seconds = lengthSeconds - minutes * 60;

  return (
    <Container>
      <Title>{title}</Title>
      <span>...............................................</span>
      <Length>
        {minutes}:{seconds}
      </Length>
    </Container>
  );
};

export default Song;
