import styled from 'styled-components';
import { transparentize, desaturate } from 'polished';
import styleVars from 'styles/styleVars.js';
import Icon1 from 'assets/vector/Communication-Icon-Teal.svg';
import Icon2 from 'assets/vector/Idea-Icon-Teal.svg';
import Icon3 from 'assets/vector/Development-Icon-Teal.svg';
import Icon4 from 'assets/vector/PC-Icon-Teal.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export const ServiceSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ServiceTitleWrapper = styled.div`
  width: 50%;
  padding-bottom: 6rem;
  h2 {
    color: ${transparentize(0.2, styleVars.colors.burg[6])};
    font-size: 2.4rem;
  }
  strong {
    color: ${transparentize(0.2, styleVars.colors.teal[4])};
    font-size: 1.4rem;
  }
`;

export const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  min-width: 375px;
  margin-bottom: 2rem;
`;

export const ServiceHeadingWrapper = styled.div`
  display: flex;
`;
export const ServiceHeading = styled.div`
  display: flex;
  align-items: center;
  h3 {
    color: ${desaturate(0.4, transparentize(0.24, styleVars.colors.burg[5]))};
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  p {
    color: ${desaturate(0.8, transparentize(0.13, styleVars.colors.burg[6]))};
    font-size: 0.7rem;
    margin-bottom: 0;
  }
`;

export const StyledIcon1 = styled(Icon1)`
  width: 6rem;
  min-width: 72px;
  padding-right: 0.75rem;
`;

export const StyledIcon2 = styled(Icon2)`
  width: 6rem;
  min-width: 72px;
  padding-right: 0.75rem;
`;

export const StyledIcon3 = styled(Icon3)`
  width: 6rem;
  min-width: 72px;
  padding-right: 0.75rem;
`;

export const StyledIcon4 = styled(Icon4)`
  width: 6rem;
  min-width: 72px;
  padding-right: 0.75rem;
`;

export const ServiceList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ul {
    padding-left: 1rem;
    margin-left: 1.5rem;
    padding-top: 1rem;
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
    padding-top: 0.25rem;
  }
`;
