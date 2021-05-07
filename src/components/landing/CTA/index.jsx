import React from 'react';
import { Link } from 'gatsby';
import { Container, Button } from 'components/common';
import { Wrapper, CTAWrapper, CTA } from './styles';

/* TODO: Use Gatsby Link for Buttons */
export const CTASection = () => (
  <Wrapper>
    <CTAWrapper as={Container}>
      <CTA>
        <div className="CTAsection">
          <h2>Interested in working with us?</h2>
          <p>
            The services we offer can change any organization, large or small - no matter the industry. We've worked
            with everyone from industrial manufacturing sites, to small buisnesses and political campaigns. Our process
            is laser focused on efficiency and total client satisfaction.
          </p>
        </div>

        <Button as={Link} to="/contact" className="primary">
          <span>Get a free consultation</span>
        </Button>
      </CTA>
    </CTAWrapper>
  </Wrapper>
);
