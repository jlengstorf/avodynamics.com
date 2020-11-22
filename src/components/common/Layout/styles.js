import { createGlobalStyle } from 'styled-components';
import { reboot } from 'styled-reboot';

export const GlobalStyle = createGlobalStyle`
  ${reboot}
  html { font-size: 18px }
`;
