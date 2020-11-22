import styled from 'styled-components';
import React from 'react';
import { transparentize } from 'polished';
import styleVars from 'styles/styleVars.js';

const StyledSocialIcon = styled.div`
  display: flex;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
      width: 2rem;
      margin: 0.5rem;
      color: ${transparentize(0.46, styleVars.colors.main[2])};
      transition: color ${styleVars.transitions.fast} ease-out;
    }

    &:hover > svg {
      color: ${transparentize(0.13, styleVars.colors.secondary[2])};
    }
  }
`;

const SocialIcon = props => {
  const { link, children } = props;
  return (
    <StyledSocialIcon>
      <a href={link} target="_blank" rel="noreferrer" aria-label={`social link to ${props.link}`}>
        {children}
      </a>
    </StyledSocialIcon>
  );
};

export default SocialIcon;
