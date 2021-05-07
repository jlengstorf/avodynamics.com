import footerIllustration from 'assets/illustrations/footer.svg';
import Logo from 'assets/vector/logo-full.svg';
import styled from 'styled-components';
import { mq } from 'styles/media';
import { transparentize } from 'polished';
import styleVars from 'styles/styleVars.js';

export const Wrapper = styled.footer`
  padding: 12rem 0 0.5rem 0;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;
  width: 95%;
  padding: 30px 0;
  max-width: 1000px;
`;

export const StyledLogo = styled(Logo)`
  width: 20vw;
  margin-bottom: 1rem;
`;

export const StyledSocialIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  width: 15vw;
  justify-content: space-between;
`;

export const StyledContactContainer = styled.address`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 33%;
  svg {
    width: 2rem;
    color: ${styleVars.colors.burg[3]};
    margin-right: 1rem;
    mask-image: linear-gradient(rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.66) 100%);
  }
  a,
  span {
    background: -webkit-linear-gradient(0deg, ${styleVars.colors.burg[3]} 0%, ${styleVars.colors.teal[3]} 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    padding-bottom: 2px;
    text-decoration: none;
    font-weight: 500;
  }
`;

export const StyledCopyright = styled.div`
  font-weight: 300;
  padding: 0.5rem;
  color: ${transparentize(0.13, styleVars.colors.teal[3])};
  width: 100%;
  text-align: right;
  border-top: 2px solid ${transparentize(0.88, styleVars.colors.burg[3])};
`;
