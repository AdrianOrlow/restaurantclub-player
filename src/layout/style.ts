import styled from 'styled-components';

export const ContentWrapper = styled.div`
  max-height: 1024px;
  max-width: 576px;
  width: 100%;
  height: 100%;
  margin: auto;
  background: ${({ theme }) => theme.colors.light};
`;
