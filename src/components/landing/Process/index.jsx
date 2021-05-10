import React from 'react';
import { Container } from 'components/common';
import {
  Wrapper,
  ProcessWrapper,
  ProcessTitleWrapper,
  ProcessHeadingWrapper,
  ProcessHeading,
  StyledIcon1,
  StyledIcon2,
  StyledIcon3,
  StyledIcon4,
  StyledCallout,
} from './styles';

export const Process = () => (
  <Wrapper>
    <ProcessWrapper as={Container}>
      <ProcessTitleWrapper>
        <h2>Process Driven Workflow</h2>
        <strong>Result Oriented Development</strong>
      </ProcessTitleWrapper>
      <div className="processWrapper">
        <StyledCallout />
        <ProcessHeadingWrapper>
          <ProcessHeading>
            <div className="heading">
              <StyledIcon1 />
              <div className="headingText">
                <h3>1. Onboarding</h3>
                <strong>Meeting your business</strong>
              </div>
            </div>
            <div className="body">
              <p>
                We begin our projects by getting to know your business. We develop a deep understanding of how you
                measure sucess for the project, and how to leverage the strengths of your business to acheive your
                goals.
              </p>
            </div>
          </ProcessHeading>
          <ProcessHeading>
            <div className="heading">
              <StyledIcon2 />
              <div className="headingText">
                <h3>2. Planning</h3>
                <strong>Analyzing problems & goals</strong>
              </div>
            </div>
            <div className="body">
              <p>
                After we understand your need, we form a comprehensive solution strategy to chart your path to success.
                Our goal here is to solve the problem you came to us with, while adding unexpected value.
              </p>
            </div>
          </ProcessHeading>
          <ProcessHeading>
            <div className="heading">
              <StyledIcon3 />
              <div className="headingText">
                <h3>3. Production</h3>
                <strong>Streamlined solutions</strong>
              </div>
            </div>
            <div className="body">
              <p>
                We have a commitment to efficiency at the core of our culture. As we work with you, you'll be able to
                stay up to date on the project through our client portal. We excede our client's expectations through
                the ease and speed of communications, review processes, and transparency that we offer.
              </p>
            </div>
          </ProcessHeading>
          <ProcessHeading>
            <div className="heading">
              <StyledIcon4 />
              <div className="headingText">
                <h3>4. Outcomes & Analysis</h3>
                <strong>Measuring your sucess</strong>
              </div>
            </div>
            <div className="body">
              <p>
                Our work dosn't stop at the final deliverable. We can stay connected with you to measure the results
                that your project has had, help communicate those outcomes to your stakeholders, and provide insights on
                next steps to continual growth and long term sustainability.
              </p>
            </div>
          </ProcessHeading>
        </ProcessHeadingWrapper>
      </div>
    </ProcessWrapper>
  </Wrapper>
);
