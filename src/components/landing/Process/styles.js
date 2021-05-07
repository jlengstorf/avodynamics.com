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
  }
`;

export const ProcessTitleWrapper = styled.div`
  padding-bottom: 4rem;
  padding-top: 6rem;
  h2 {
    color: ${transparentize(0.13, styleVars.colors.burg[3])};
    font-size: 2.4rem;
  }
  strong {
    color: ${transparentize(0.13, styleVars.colors.teal[3])};
    font-size: 2rem;
  }
`;

export const ProcessHeadingWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProcessHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 2rem;
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
  }
`;

export const StyledIcon1 = styled(Icon1)`
  width: 9rem;
  padding-right: 0.75rem;
`;

export const StyledIcon2 = styled(Icon2)`
  width: 9rem;
  padding-right: 0.75rem;
`;

export const StyledIcon3 = styled(Icon3)`
  width: 9rem;
  padding-right: 0.75rem;
`;

export const StyledIcon4 = styled(Icon4)`
  width: 9rem;
  padding-right: 0.75rem;
`;

export const StyledCallout = styled(ProcessCallout)`
  width: 45%;
`;
