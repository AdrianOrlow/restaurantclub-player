import NextIcon from '@assets/icons/next_ico.svg';
import PreviousIcon from '@assets/icons/previous_ico.svg';
import RepeatIcon from '@assets/icons/repeat_ico.svg';
import ShuffleIcon from '@assets/icons/shuffle_ico.svg';
import PlayButton from '@shared/ui/PlayButton';
import * as React from 'react';
import { Player } from '../utils/hooks/usePlayer';
import { Container, NavigationButton } from './NavigationStyle';

interface Props {
  player: Player;
  onChangeAlbum(changeIndex: number): void;
}

const Navigation: React.FC<Props> = ({ onChangeAlbum, player }) => {
  const { playing, togglePlay } = player;

  return (
    <Container>
      <NavigationButton>
        <ShuffleIcon />
      </NavigationButton>
      <NavigationButton onClick={() => onChangeAlbum(-1)}>
        <PreviousIcon />
      </NavigationButton>
      <PlayButton onClick={togglePlay} active={playing} />
      <NavigationButton onClick={() => onChangeAlbum(1)}>
        <NextIcon />
      </NavigationButton>
      <NavigationButton>
        <RepeatIcon />
      </NavigationButton>
    </Container>
  );
};

export default Navigation;
