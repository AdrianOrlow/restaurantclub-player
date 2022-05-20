import React from 'react';
import GlobalStyle from './globalStyles';
import Head from './Head';
import { ContentWrapper } from './style';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head />
    <GlobalStyle />
    <ContentWrapper>{children}</ContentWrapper>
  </>
);

export default Layout;
