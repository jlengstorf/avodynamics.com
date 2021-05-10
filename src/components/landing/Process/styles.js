import styled from 'styled-components';
import { transparentize, desaturate } from 'polished';
import styleVars from 'styles/styleVars.js';
import Icon1 from 'assets/vector/Communication-Icon.svg';
import Icon2 from 'assets/vector/Idea-Icon.svg';
import Icon3 from 'assets/vector/Development-Icon.svg';
import Icon4 from 'assets/vector/PC-Icon.svg';
import ProcessCallout from 'assets/vector/process-callout.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const ProcessWrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  align-items: left;
  justify-content: space-around;
  flex-direction: column;
  .processWrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    @media (max-width: 880px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const ProcessTitleWrapper = styled.div`
  padding-bottom: 4rem;
  padding-top: 6rem;
  @media (max-width: 880px) {
    padding-bottom: 1rem;
  }
  h2 {
    color: ${transparentize(0.13, styleVars.colors.burg[3])};
    font-size: 2.4rem;
  }
  strong {
    color: ${transparentize(0.13, styleVars.colors.teal[3])};
    font-size: 2rem;
  }
  @media (max-width: 1400px) {
    width: 75%;
    h2 {
      font-size: 3.2vw;
    }
    strong {
      font-size: 2.8vw;
    }
  }
  @media (max-width: 980px) {
    width: 80%;
    h2 {
      font-size: 4.6vw;
    }
    strong {
      font-size: 3.6vw;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
    h2 {
      font-size: 5.4vw;
    }
    strong {
      font-size: 4.2vw;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    h2 {
      font-size: 6vw;
    }
    strong {
      font-size: 4.6vw;
    }
  }
`;

export const ProcessHeadingWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 880px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
export const ProcessHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 2rem;
  @media (max-width: 880px) {
    width: 48%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  .heading {
    display: flex;
    align-items: center;
    width: 100%;
    .headingText {
      width: calc(100% - 4rem);
    }
  }
  h3 {
    color: ${desaturate(0.5, transparentize(0.13, styleVars.colors.burg[3]))};
    font-size: 1rem;
    margin-bottom: 0rem;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1rem;
  }
  strong {
    color: ${desaturate(0, transparentize(0.13, styleVars.colors.burg[3]))};
    font-size: 1.125rem;
    margin-bottom: 0rem;
    border-bottom: 1px solid ${desaturate(0, transparentize(0.88, styleVars.colors.burg[3]))};
    display: inline-block;
    width: 100%;
    margin-bottom: 0.25em;
  }
  p {
    color: ${desaturate(0.5, transparentize(0.13, styleVars.colors.burg[2]))};
    font-size: 1rem;
    font-weight: 400;
    padding-left: 4rem;
    @media (max-width: 600px) {
      padding-left: 0;
    }
  }
`;

export const StyledIcon1 = styled(Icon1)`
  width: 4rem;
  padding-right: 0.75rem;
`;

export const StyledIcon2 = styled(Icon2)`
  width: 4rem;
  padding-right: 0.75rem;
`;

export const StyledIcon3 = styled(Icon3)`
  width: 4rem;
  padding-right: 0.75rem;
`;

export const StyledIcon4 = styled(Icon4)`
  width: 4rem;
  padding-right: 0.75rem;
`;

export const StyledCallout = styled(ProcessCallout)`
  width: 45%;
  @media (max-width: 880px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
