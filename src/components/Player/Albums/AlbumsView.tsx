import { Album } from '@data/music';
import * as React from 'react';
import { AlbumImage, Wrapper } from './AlbumsStyle';

interface Props {
  albums: Album[];
  currentAlbumId: string;
  spinCurrent: boolean;
}

const Albums: React.FC<Props> = ({ albums, currentAlbumId, spinCurrent }) => {
  const currentAlbumIndex = albums.findIndex((a) => a.id === currentAlbumId);

  return (
    <Wrapper>
      {albums.map(({ imageUrl, title, id }) => (
        <AlbumImage
          key={id}
          src={imageUrl}
          alt={title}
          current={id === currentAlbumId}
          index={albums.findIndex((a) => a.id === id)}
          currentAlbumIndex={currentAlbumIndex}
          spin={id === currentAlbumId && spinCurrent}
        />
      ))}
    </Wrapper>
  );
};

export default Albums;
