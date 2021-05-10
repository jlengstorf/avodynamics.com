import React from 'react';
import { Container } from 'components/common';
import {
  Wrapper,
  ServiceSectionWrapper,
  ServicesWrapper,
  ServiceTitleWrapper,
  ServiceWrapper,
  ServiceHeadingWrapper,
  ServiceHeading,
  ServiceList,
  StyledIcon1,
  StyledIcon2,
  StyledIcon3,
  StyledIcon4,
} from './styles';

/* TODO: Use Gatsby Link for Buttons */
export const Services = () => (
  <Wrapper>
    <ServiceSectionWrapper as={Container}>
      <ServiceTitleWrapper>
        <h2>What can we do for you?</h2>
        <strong>
          Our suite of services range from media production to digital transformation - but all have a proven impact on
          your company's bottom line.
        </strong>
      </ServiceTitleWrapper>
      <ServicesWrapper>
        <ServiceWrapper>
          <ServiceHeading>
            <StyledIcon1 />
            <div>
              <h3>Brand Development</h3>
              <p>Strategic minded branding services that connect with customers for years to come.</p>
            </div>
          </ServiceHeading>
          <ServiceList>
            <ul>
              <li>Communication Strategy</li>
              <li>Digital Advertizing</li>
              <li>Social Media Managment</li>
              <li>Website Development</li>
            </ul>
          </ServiceList>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceHeading>
            <StyledIcon2 />
            <div>
              <h3>Media Production</h3>
              <p>Comprehensive media solutions with a focus on transformational buisness results.</p>
            </div>
          </ServiceHeading>
          <ServiceList>
            <ul>
              <li>Video Production</li>
              <li>Virtual Event Broadcasting</li>
              <li>Podcast Production</li>
              <li>Logo & Branding Design</li>
            </ul>
          </ServiceList>
        </ServiceWrapper>
        {/* <ServiceWrapper>
        <ServiceHeading>
          <StyledIcon3 />
          <div>
            <h3>Things</h3>
            <p>Unique selling propositions & aesthetics that insight action</p>
          </div>
        </ServiceHeading>
        <ServiceList>
            <ul>
          <li>Subitem #1</li>
          <li>Subitem #2</li>
          <li>Subitem #3</li>
          <li>Subitem #4</li>
        </ul>
          </ServiceList>
        </ServiceWrapper> */}
        <ServiceWrapper>
          <ServiceHeading>
            <StyledIcon4 />
            <div>
              <h3>Business Consulting</h3>
              <p>Drive business performance & efficiency to create cost-effective growth.</p>
            </div>
          </ServiceHeading>
          <ServiceList>
            <ul>
              <li>Digital Process Improvment</li>
              <li>Training & Development</li>
              <li>Human Resources Optimization</li>
              <li>Analytics & Reporting</li>
            </ul>
          </ServiceList>
        </ServiceWrapper>
      </ServicesWrapper>
    </ServiceSectionWrapper>
  </Wrapper>
);

{
  /* <ServiceHeadingWrapper>
        <ServiceHeading>
          <StyledIcon1 />
          <div>
            <h3>Brand Development</h3>
            <p>Strategic minded branding services that connect with customers for years to come.</p>
          </div>
        </ServiceHeading>
        <ServiceHeading>
          <StyledIcon2 />
          <div>
            <h3>Media Production</h3>
            <p>Comprehensive media solutions with a focus on transformational buisness results.</p>
          </div>
        </ServiceHeading>
        <ServiceHeading>
          <StyledIcon3 />
          <div>
            <h3>Things</h3>
            <p>Unique selling propositions & aesthetics that insight action</p>
          </div>
        </ServiceHeading>
<ServiceHeading>
  <StyledIcon4 />
  <div>
    <h3>Business Consulting</h3>
    <p>Drive business performance & efficiency to create cost-effective growth.</p>
  </div>
</ServiceHeading>
      </ServiceHeadingWrapper >
  <ServiceList>
    <ul>
      <li>Communication Strategy</li>
      <li>Digital Advertizing</li>
      <li>Social Media Managment</li>
      <li>Website Development</li>
    </ul>
    <ul>
      <li>Video Production</li>
      <li>Virtual Event Broadcasting</li>
      <li>Podcast Production</li>
      <li>Logo & Branding Design</li>
    </ul>
    <ul>
          <li>Subitem #1</li>
          <li>Subitem #2</li>
          <li>Subitem #3</li>
          <li>Subitem #4</li>
        </ul>
    <ul>
      <li>Digital Process Improvment</li>
      <li>Training & Development</li>
      <li>Human Resources Optimization</li>
      <li>Analytics & Reporting</li>
    </ul>
  </ServiceList> */
}
