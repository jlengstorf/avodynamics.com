import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, IntroWrapper, Details, Sizzle, ButtonGroup, Button } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>AVO Dynamics</h1>
        <h2>Audio/Video & Organizational Solutions</h2>
        <ButtonGroup>
          <Button /* as={AnchorLink} */ href="" className="secondary">
            See our work
          </Button>
          <Button /* as={AnchorLink} */ className="primary" href="">
            <span>Work with us</span>
          </Button>
        </ButtonGroup>
      </Details>
      <Sizzle>
        <div className="quote">
          A quick description about who we are, what we do, and what our work means to us.... Or some such butter
          sandwichy non-sense that makes big companies want to hand over fat stacks.
        </div>
      </Sizzle>
    </IntroWrapper>
  </Wrapper>
);
