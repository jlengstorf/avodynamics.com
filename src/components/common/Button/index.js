import styled from 'styled-components';
import styleVars from 'styles/styleVars.js';

export const Button = styled.a`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.65rem 1.6rem;
  border: none;
  appearance: none;
  -webkit-touch-callout: none;
  user-select: none;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  font-weight: 500;
  font-size: 0.9rem;
  height: fit-content;
  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }
  &:hover {
    text-decoration: none;
  }

  &.primary {
    color: rgba(255, 255, 255, 0.87);
    background: linear-gradient(
      90deg,
      ${styleVars.colors.teal[2]} 0%,
      ${styleVars.colors.burg[3]} 70%,
      ${styleVars.colors.burg[4]} 100%
    );
    position: relative;
    z-index: 1;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: inherit;
      top: 0.25rem;
      left: 0rem;
      filter: blur(0.3rem);
      opacity: 0.3;
      z-index: -1;
      transition: opacity 0.5s ease, filter 0.5s ease;
    }
    &:hover:after {
      content: '';
      filter: blur(0.4rem);
      opacity: 0.8;
    }
  }
  &.secondary {
    color: ${styleVars.colors.burg[3]};
    background: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255));
    background-clip: padding-box;
    border: solid 4px transparent;
    font-style: normal;
    transition: color ${styleVars.transitions.fast} ease, background ${styleVars.transitions.slow} ease;
  }
  &.secondary:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -4px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(
      to right,
      ${styleVars.colors.burg[3]},
      ${styleVars.colors.burg[4]},
      ${styleVars.colors.burg[3]}
    );
  }
  &.secondary:hover {
    color: rgba(255, 255, 255, 0.87);
    background: linear-gradient(
      to right,
      ${styleVars.colors.burg[3]},
      ${styleVars.colors.burg[4]},
      ${styleVars.colors.burg[3]}
    );
  }
`;
