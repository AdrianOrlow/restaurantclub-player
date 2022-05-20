import { Album } from '@data/music';
import { SubTitle, Title } from '@shared/Typography';
import * as React from 'react';
import { AlbumImage, Button, Container, Divider, Wrapper } from './MoreStyle';

interface Props {
  album: Album;
  active: boolean;
}

const More: React.FC<Props> = ({ album, active }) => {
  return (
    <Wrapper active={active}>
      <Container>
        <AlbumImage src={album.imageUrl} alt={album.title} />
        <div>
          <Title>{album.title}</Title>
          <SubTitle>{album.author}</SubTitle>
        </div>
        <Divider>...</Divider>
        <Button>Add to playlist</Button>
        <Button>Show album</Button>
        <Button>Share with friends</Button>
      </Container>
    </Wrapper>
  );
};

export default More;
