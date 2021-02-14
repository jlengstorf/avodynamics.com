import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';
import { transparentize, desaturate } from 'polished';
import styleVars from 'styles/styleVars.js';
import Icon1 from 'assets/vector/Communication-Icon.svg';
import Icon2 from 'assets/vector/PC-Icon.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  /* background-image: url(${overlayIllustration}); */
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const ServicesWrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ServiceTitleWrapper = styled.div`
  width: 50%;
  padding-bottom: 8rem;
  h2 {
    color: ${transparentize(0.13, styleVars.colors.burg[6])};
    font-size: 2.4rem;
  }
  strong {
    color: ${transparentize(0.13, styleVars.colors.teal[4])};
    font-size: 2rem;
  }
`;

export const ServiceHeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ServiceHeading = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  .imgz {
    height: 100%;
  }
  h3 {
    color: ${desaturate(0.4, transparentize(0.13, styleVars.colors.burg[6]))};
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  p {
    color: ${desaturate(0.8, transparentize(0.13, styleVars.colors.burg[5]))};
    font-size: 0.7rem;
  }
`;

export const StyledIcon1 = styled(Icon1)`
  height: 5rem;
  padding-right: 0.75rem;
`;

export const StyledIcon2 = styled(Icon2)`
  height: 5rem;
  padding-right: 0.75rem;
`;

export const ServiceList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ul {
    width: 25%;
    padding-left: 1rem;
    margin-left: 1rem;
    border-left-width: 2px;
    border-right-width: 0px;
    border-style: solid;
    border-image: linear-gradient(
        to bottom,
        transparent,
        ${transparentize(0.8, styleVars.colors.teal[4])} 15%,
        transparent
      )
      1 100%;
  }
  li {
    color: ${desaturate(0.8, transparentize(0.13, styleVars.colors.burg[5]))};
    list-style: none;
  }
`;
