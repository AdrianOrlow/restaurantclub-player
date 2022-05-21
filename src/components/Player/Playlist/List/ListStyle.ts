import { SubTitle, Title } from '@shared/Typography';
import { spacingY } from '@utils/stylesUtils';
import styled, { css } from 'styled-components';

export const Header = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background-image: url(${require('@assets/images/bg_image.png')});
`;

export const HeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 32px;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled(Title)`
  font-size: 24px;
  line-height: 1;
`;

export const HeaderSubTitle = styled(SubTitle)``;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.light};
  overflow: auto;
`;

export const ListWrapper = styled.ol`
  font-size: 24px;
  line-height: 64px;
`;

export const ListElement = styled.li`
  padding-left: 1rem;

  ::marker {
    font-size: 18px;
  }
`;

export const HideButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg {
    transform: rotate(270deg);
    height: 32px;
  }
`;

export const Actions = styled.div`
  padding: 2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.1)
  );
  ${spacingY(1)};
  transition: all 1s ease-in-out;
`;

export const Wrapper = styled.div<{ show: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 1s ease-in-out;
  z-index: 100;

  ${({ show }) => !show && `pointer-events: none;`};

  ${({ show }) =>
    css`
      &,
      ${Actions} {
        bottom: ${show ? '0' : '-100%'};
        opacity: ${show ? '1' : '0'};
      }
    `};
`;
