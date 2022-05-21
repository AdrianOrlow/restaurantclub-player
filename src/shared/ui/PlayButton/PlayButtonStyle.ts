import styled from 'styled-components';

export const Container = styled.button<{
  active: boolean;
  size: 'big' | 'small';
}>`
  background: none;
  border: 0;
  padding: 0;
  background-image: url(${require('@assets/icons/Play_inactive.png')});
  background-position: center;
  background-repeat: no-repeat;
  width: ${({ size }) => (size === 'big' ? '148' : 148 / 2)}px;
  height: ${({ size }) => (size === 'big' ? '165' : 165 / 2)}px;
  ${({ size }) => size === 'small' && `background-size: contain;`};
  position: relative;
  cursor: pointer;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10rem;
    top: -5rem;
    left: -5rem;

    background-image: url(${require('@assets/icons/Play_active.png')});
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: 0.2s ease-in-out;
    pointer-events: none;

    ${({ size }) =>
      size === 'small' &&
      `
      transform: scale(0.5);
      left: -7.5rem;
      top: -7.5rem;
    `}
  }
`;
