import { spacingX } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.25rem 2rem;
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  ${spacingX(1)};
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  width: calc(100% - 4rem);
`;
