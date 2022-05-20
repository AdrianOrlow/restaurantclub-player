import { spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div<{ active: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  right: ${({ active }) => (active ? '0' : '-100%')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: all 1s ease-in-out;
  background: ${({ theme }) => transparentize(0.04, theme.colors.black)};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  height: 100%;
  text-align: center;
  ${spacingY(2)}
`;

export const AlbumImage = styled.img`
  display: block;
  height: 192px;
  width: 192px;
`;

export const Divider = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 1rem;
  font-size: 24px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.light};
  font-size: 24px;
  cursor: pointer;
`;
