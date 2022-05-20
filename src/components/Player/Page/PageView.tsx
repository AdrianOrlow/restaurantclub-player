import BackIco from '@assets/icons/back_ico.svg';
import MoreIco from '@assets/icons/more_ico.svg';
import { Album } from '@data/music';
import { SubTitle, Title } from '@shared/Typography';
import * as R from 'ramda';
import * as React from 'react';
import { useState } from 'react';
import Albums from '../Albums';
import More from '../More';
import Navigation from '../Navigation';
import Playlist from '../Playlist';
import Progress from '../Progress';
import { usePlayer } from '../utils/hooks/usePlayer';
import {
  AlbumInfo,
  BackgroundImage,
  BackgroundImageWrapper,
  Container,
  Header,
  HeaderButton,
  HeaderSubTitle,
  HeaderTitle,
  Wrapper,
} from './PageStyle';

interface Props {
  albums: Album[];
}

const Page: React.FC<Props> = ({ albums }) => {
  const player = usePlayer();
  const [showMore, setShowMore] = useState<boolean>(false);
  const [currentAlbumId, setCurrentAlbumId] = useState<string>(albums[1].id);
  const currentAlbum = albums.find(({ id }) => id === currentAlbumId);

  const handleChangeAlbum = (changeIndex: number) => {
    const currentAlbumIndex = albums.findIndex(
      ({ id }) => id === currentAlbumId
    );

    const newIndex = R.cond<any, number>([
      [R.flip(R.gte)(albums.length), R.always(0)],
      [R.flip(R.lt)(0), R.always(albums.length - 1)],
      [R.T, (index) => index],
    ])(currentAlbumIndex + changeIndex);

    setCurrentAlbumId(albums[newIndex].id);
  };

  return (
    <Wrapper>
      <BackgroundImageWrapper>
        <BackgroundImage
          src={require('@assets/images/bg_image.png')}
          alt="Background image"
        />
      </BackgroundImageWrapper>
      <Container>
        <Header>
          <HeaderButton>
            <BackIco />
          </HeaderButton>
          <HeaderTitle>
            <HeaderSubTitle>ALBUM</HeaderSubTitle>
            <HeaderTitle>{currentAlbum.title}</HeaderTitle>
          </HeaderTitle>
          <HeaderButton
            active={showMore}
            onClick={() => setShowMore((v) => !v)}
          >
            <MoreIco />
          </HeaderButton>
        </Header>
        <Albums
          albums={albums}
          currentAlbumId={currentAlbumId}
          spinCurrent={player.playing}
        />
        <AlbumInfo>
          <Title>{currentAlbum.title}</Title>
          <SubTitle>{currentAlbum.author}</SubTitle>
        </AlbumInfo>
        <Navigation onChangeAlbum={handleChangeAlbum} player={player} />
        <Progress />
      </Container>
      <More active={showMore} album={currentAlbum} />
      <Playlist album={currentAlbum} player={player} />
    </Wrapper>
  );
};

export default Page;
