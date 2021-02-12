import React from 'react';
import { Container } from 'components/common';
import IframeResizer from 'iframe-resizer-react';
import { StyledIframe } from './styles';

export const ContactWrapper = () => (
  <Container>
    <IframeResizer
      src="https://hello.dubsado.com:443/public/form/view/5fea053a9332b784a6c17ede"
      heightCalculationMethod="lowestElement"
      style={{ minWidth: '100%', width: '1px' }}
      frameborder="0"
    />
  </Container>
);

{
  /* <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"></script>
  <iframe src="https://hello.dubsado.com:443/public/form/view/5fea053a9332b784a6c17ede" frameborder="0" style="width:1px; min-width:100%;"></iframe>
  <script type="text/javascript">setTimeout(function(){iFrameResize({checkOrigin: false, heightCalculationMethod: "taggedElement"});}, 30)</script> */
}
