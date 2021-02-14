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
            <StyledIcon1 />
            <div>
              <h3>1. Onboarding</h3>
              <strong>Meeting your buisness</strong>
              <p>
                Here we meet your buisness and stuff to find out what you need so we can get it done, yo. Unique selling
                propositions & aesthetics that insight action
              </p>
            </div>
          </ProcessHeading>
          <ProcessHeading>
            <StyledIcon2 />
            <div>
              <h3>2. Planning</h3>
              <strong>Analyzing problems & goals</strong>
              <p>
                After we understand your needs and goals, we form a plan to get you where you need to go. Unique selling
                propositions & aesthetics that insight action
              </p>
            </div>
          </ProcessHeading>
          <ProcessHeading>
            <StyledIcon1 />
            <div>
              <h3>3. Execution</h3>
              <strong>Developing sollutions</strong>
              <p>
                Here we meet your buisness and stuff to find out what you need so we can get it done, yo. Unique selling
                propositions & aesthetics that insight action
              </p>
            </div>
          </ProcessHeading>
          <ProcessHeading>
            <StyledIcon2 />
            <div>
              <h3>4. Closing? Analysis?</h3>
              <strong>Measuring your sucess</strong>
              <p>
                After we understand your needs and goals, we form a plan to get you where you need to go. Unique selling
                propositions & aesthetics that insight action
              </p>
            </div>
          </ProcessHeading>
        </ProcessHeadingWrapper>
      </div>
    </ProcessWrapper>
  </Wrapper>
);
