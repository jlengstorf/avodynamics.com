import React from 'react';
import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/speckled-color-overlay.svg';
import overlayIllustration2 from 'assets/illustrations/Rainbow-Vortex.svg';
import { transparentize } from 'polished';
import styleVars from 'styles/styleVars.js';
import { Layout, SEO } from 'components/common';
import { Intro, FeaturedVideo, Services, Testimonials, Process, CTASection } from 'components/landing';

const SpeckledWrapper = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      ${transparentize(0.25, styleVars.colors.teal[1])},
      ${transparentize(0.05, styleVars.colors.teal[1])} 50%,
      ${transparentize(0, styleVars.colors.teal[0])}
    ),
    url(${overlayIllustration});
  background-size: 50%;
  background-repeat: repeat;
  position: relative;
  border-bottom: 2px solid ${transparentize(0.13, styleVars.colors.teal[4])};
`;

const WarmWrapper = styled.div`
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, ${transparentize(0.5, styleVars.colors.burg[6])}),
    url(${overlayIllustration2});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const pIndex = () => (
  <Layout>
    <SEO />
    <Intro />
    <SpeckledWrapper>
      <FeaturedVideo />
      <Services />
    </SpeckledWrapper>
    <WarmWrapper>
      <Process />
    </WarmWrapper>
    <Testimonials />
    <CTASection />
  </Layout>
);

export default pIndex;
