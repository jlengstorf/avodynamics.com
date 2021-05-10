import styled from 'styled-components';
import Logo from 'assets/vector/logo.svg';
import styleVars from 'styles/styleVars.js';
import { transparentize } from 'polished';

export const Wrapper = styled.nav`
  width: 100%;
  padding: 1rem 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeLink = styled.a``;

export const StyledLogo = styled(Logo)`
  height: 3rem;
`;

export const HeaderCTA = styled.a`
  background: linear-gradient(
    75deg,
    ${styleVars.colors.teal[2]},
    ${styleVars.colors.teal[3]},
    ${styleVars.colors.burg[4]},
    ${styleVars.colors.burg[3]}
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  display: block;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    background: linear-gradient(
      75deg,
      ${styleVars.colors.teal[3]},
      ${styleVars.colors.teal[4]},
      ${styleVars.colors.burg[5]},
      ${styleVars.colors.burg[4]}
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  @media (max-width: 960px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
`;

//
// overflow-x: hidden;
//
// transition: color ${styleVars.transitions.fast} ease-out;
//
// font-weight: 500;
// &:hover {
//   color: ${transparentize(0.13, styleVars.colors.burg[3])};
// }
// &.active {
//   color: ${transparentize(0.13, styleVars.colors.burg[3])};
// }

// @media (max-width: 960px) {
//   color: ${transparentize(0.13, styleVars.colors.teal[4])};
//   padding-bottom: 2px;
//   position: relative;
//   /* border-bottom: 1px solid ${transparentize(0.8, styleVars.colors.teal[4])} */
//   &::after {
//     content: "";
//     position: absolute;
//     bottom: 2px;
//     left: 0;
//     height: 1px;
//     width: 110%;
//     margin-left: -1.25rem;
//     background: linear-gradient(90deg, transparent 0%, ${transparentize(0.8, styleVars.colors.teal[4])} 50%);
//   }
// }
