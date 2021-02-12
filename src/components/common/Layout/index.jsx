import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultRebootTheme } from 'styled-reboot';
import { Footer, Header } from 'components/theme';

import { GlobalStyle } from './styles';

export const Layout = ({ children }) => (
  <ThemeProvider theme={defaultRebootTheme}>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </ThemeProvider>
);
