import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const BackgroundImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const BackgroundImageWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  &::after {
    content: '';
    background: linear-gradient(0deg, #1b1b1b 0%, rgba(27, 27, 27, 0.0001) 100%),
      rgba(27, 27, 27, 0.0001);
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  line-height: 36px;
`;

export const HeaderButton = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 100;

  svg {
    height: 29px;
    width: auto;
    color: ${({ theme, active }) => theme.colors[active ? 'light' : 'primary']};
  }
`;

export const HeaderSubTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
`;

export const HeaderTitle = styled.div`
  color: ${({ theme }) => theme.colors.light};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
`;

export const AlbumInfo = styled.div`
  text-align: center;
`;
