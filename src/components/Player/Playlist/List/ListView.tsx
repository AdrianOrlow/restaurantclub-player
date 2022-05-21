import BackIcon from '@assets/icons/back_ico.svg';
import { Player } from '@components/Player/utils/hooks/usePlayer';
import { Album } from '@data/music';
import Button from '@shared/ui/Button';
import PlayButton from '@shared/ui/PlayButton';
import * as React from 'react';
import Song from '../Song';
import {
  Actions,
  Header,
  HeaderButton,
  HeaderInner,
  HeaderSubTitle,
  HeaderTitle,
  HideButton,
  Inner,
  ListElement,
  ListWrapper,
  Wrapper,
} from './ListStyle';

interface Props {
  album: Album;
  show: boolean;
  player: Player;
  onClose(): void;
}

const List: React.FC<Props> = ({ show, album, onClose, player }) => {
  return (
    <Wrapper show={show}>
      <Header>
        <HeaderButton onClick={onClose}>
          <BackIcon />
        </HeaderButton>
        <HeaderInner>
          <HeaderTitle>{album.title}</HeaderTitle>
          <HeaderSubTitle>{album.author}</HeaderSubTitle>
        </HeaderInner>
        <PlayButton
          active={player.playing}
          onClick={player.togglePlay}
          size="small"
        />
      </Header>
      <Inner>
        <ListWrapper>
          {album.songs.map((song) => (
            <ListElement key={song.title}>
              <Song song={song} />
            </ListElement>
          ))}
        </ListWrapper>
        <Actions>
          <Button color="green">shuffle play</Button>
          <HideButton onClick={onClose}>
            <BackIcon />
          </HideButton>
        </Actions>
      </Inner>
    </Wrapper>
  );
};

export default List;
