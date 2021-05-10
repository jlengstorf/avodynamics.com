import React from 'react';
import { Link } from 'gatsby';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details, Sizzle, ButtonGroup } from './styles';

/* TODO: Use Gatsby Link for Buttons */
export const AboutIntro = () => (
  <Wrapper>
    <IntroWrapper as={Container}>
      <Details>
        <h1>Who is AVO Dynamics?</h1>
        <h2>More than your average consulting & media firm.</h2>
        <ButtonGroup>
          <Button as={Link} to="#" className="secondary">
            See our work
          </Button>
          <Button as={Link} to="/contact" className="primary">
            <span>Work with us</span>
          </Button>
        </ButtonGroup>
      </Details>
      <Sizzle>
        <div className="quote">
          <div className="quoteBG">
            Our focus is on providing business solutions that <em>improve our client’s operations.</em> From getting
            more customers through the door to improving the way you capture information and data, we can save you time
            and money while becoming more effective in your business.
          </div>
        </div>
      </Sizzle>
    </IntroWrapper>
  </Wrapper>
);
