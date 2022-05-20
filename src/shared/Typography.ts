import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 36px;
  line-height: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 18px;
  line-height: 36px;
  font-weight: 400;
  text-transform: uppercase;
`;
