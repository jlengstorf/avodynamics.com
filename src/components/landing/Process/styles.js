import styled from 'styled-components';
import { transparentize, desaturate } from 'polished';
import styleVars from 'styles/styleVars.js';
import Icon1 from 'assets/vector/Communication-Icon.svg';
import Icon2 from 'assets/vector/PC-Icon.svg';
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
  padding-bottom: 8rem;
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
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProcessHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  h3 {
    color: ${desaturate(0.9, transparentize(0.13, styleVars.colors.burg[5]))};
    font-size: 0.9rem;
    margin-bottom: 0rem;
  }
  strong {
    color: ${desaturate(0, transparentize(0.13, styleVars.colors.burg[3]))};
    font-size: 1rem;
    margin-bottom: 0rem;
  }
  p {
    color: ${desaturate(0, transparentize(0.13, styleVars.colors.burg[0]))};
    font-size: 0.9rem;
  }
`;

export const StyledIcon1 = styled(Icon1)`
  height: 10rem;
  padding-right: 0.75rem;
`;

export const StyledIcon2 = styled(Icon2)`
  height: 10rem;
  padding-right: 0.75rem;
`;

export const StyledCallout = styled(ProcessCallout)`
  width: 50%;
`;
