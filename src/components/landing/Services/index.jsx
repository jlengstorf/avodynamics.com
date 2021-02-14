import React from 'react';
import { Container } from 'components/common';
import {
  Wrapper,
  ServicesWrapper,
  ServiceTitleWrapper,
  ServiceHeadingWrapper,
  ServiceHeading,
  ServiceList,
  StyledIcon1,
  StyledIcon2,
} from './styles';

/* TODO: Use Gatsby Link for Buttons */
export const Services = () => (
  <Wrapper>
    <ServicesWrapper as={Container}>
      <ServiceTitleWrapper>
        <h2>We offer the best</h2>
        <strong>Because we know the best path and yada yada</strong>
      </ServiceTitleWrapper>
      <ServiceHeadingWrapper>
        <ServiceHeading>
          <StyledIcon1 />
          <div>
            <h3>Brand Development</h3>
            <p>Unique selling propositions & aesthetics that insight action</p>
          </div>
        </ServiceHeading>
        <ServiceHeading>
          <StyledIcon2 />
          <div>
            <h3>Media Production</h3>
            <p>Unique selling propositions & aesthetics that insight action</p>
          </div>
        </ServiceHeading>
        <ServiceHeading>
          <div className="imgz">ICON</div>
          <div>
            <h3>Things</h3>
            <p>Unique selling propositions & aesthetics that insight action</p>
          </div>
        </ServiceHeading>
        <ServiceHeading>
          <div className="imgz">ICON</div>
          <div>
            <h3>Worke</h3>
            <p>Unique selling propositions & aesthetics that insight action</p>
          </div>
        </ServiceHeading>
      </ServiceHeadingWrapper>
      <ServiceList>
        <ul>
          <li>Communication Strategy</li>
          <li>Branding Design</li>
          <li>Virtual Event Broadcasting</li>
          <li>Podcast Production</li>
        </ul>
        <ul>
          <li>Video Production</li>
          <li>Social Media Advertizing</li>
          <li>Logo Design</li>
          <li>Things</li>
        </ul>
        <ul>
          <li>Subitem #1</li>
          <li>Subitem #2</li>
          <li>Subitem #3</li>
          <li>Subitem #4</li>
        </ul>
        <ul>
          <li>Subitem #1</li>
          <li>Subitem #2</li>
          <li>Subitem #3</li>
          <li>Subitem #4</li>
        </ul>
      </ServiceList>
    </ServicesWrapper>
  </Wrapper>
);
