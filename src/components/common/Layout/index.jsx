import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultRebootTheme } from 'styled-reboot';
import { Footer } from 'components/theme';
import { GlobalStyle } from './styles';

export const Layout = ({ children }) => (
  <ThemeProvider theme={defaultRebootTheme}>
    <GlobalStyle />
    {children}
    <Footer />
  </ThemeProvider>
);
