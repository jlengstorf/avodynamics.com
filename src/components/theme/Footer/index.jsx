import React from 'react';
import SocialIcon from 'components/common/SocialIcons';
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle';
import { Office } from '@styled-icons/icomoon/Office';
// import { Call } from '@styled-icons/ionicons-solid/Call';
import { Mail } from '@styled-icons/heroicons-solid/Mail';
import {
  Wrapper,
  StyledSocialContainer,
  StyledLogo,
  StyledSocialIconContainer,
  StyledContactContainer,
  StyledContact,
  StyledCopyright,
} from './styles';

export const Footer = () => (
  <Wrapper>
    <StyledSocialContainer>
      <StyledLogo />
      <StyledSocialIconContainer>
        <SocialIcon link="/">
          <Youtube />
        </SocialIcon>
        <SocialIcon link="/">
          <FacebookCircle />
        </SocialIcon>
      </StyledSocialIconContainer>
      <StyledContactContainer>
        <StyledContact>
          <Office />
          <span>Mobile, AL</span>
        </StyledContact>
        {/* <StyledContact>
          <Call />
          <a href="tel:+11234567890">(123) 456-7890</a>
        </StyledContact> */}
        <StyledContact>
          <Mail />
          <a href="mailto:solutions@avodynamics.com">solutions@avodynamics.com</a>
        </StyledContact>
      </StyledContactContainer>
    </StyledSocialContainer>
    <StyledCopyright>© {new Date().getFullYear()} AVO Dynamics Inc. All Rights Reserved</StyledCopyright>
  </Wrapper>
);
