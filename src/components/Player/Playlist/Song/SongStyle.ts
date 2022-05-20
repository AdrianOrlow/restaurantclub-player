import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  font-size: 24px;

  span {
    flex: 1;
    overflow: hidden;
    padding: 0 1rem;
    letter-spacing: 0.5rem;
    opacity: 0.5;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

export const Length = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  margin-left: 1rem;
`;
