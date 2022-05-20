import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 40% 0;
  margin: 0 -2rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: translateX(-50%)rotate(0deg);
  }

  to {
    transform: translateX(-50%)rotate(360deg);
  }
`;

export const AlbumImage = styled.img<{
  current: boolean;
  index: number;
  currentAlbumIndex: number;
  spin: boolean;
}>`
  position: absolute;
  width: 128px;
  height: 128px;
  object-fit: contain;
  transition: all 2s ease-in-out;

  ${({ current }) => current && `height: 320px; width: 320px;`};
  ${({ index, currentAlbumIndex }) =>
    `left: ${index * 50 + 50 - currentAlbumIndex * 50}%`};

  ${({ index, currentAlbumIndex }) =>
    `transform: translateX(-50%)rotate(${
      (index - currentAlbumIndex) * 120
    }deg);`}
`;
