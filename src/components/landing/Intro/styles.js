import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';
import { transparentize } from 'polished';
import styleVars from 'styles/styleVars.js';
import filmRollIcon from 'assets/icons/film-roll.svg';
import ticketStubIcon from 'assets/icons/ticket-stub.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  /* background-image: url(${overlayIllustration}); */
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  width: 50%;
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
    color: ${styleVars.colors.secondary[2]};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h2 {
    margin-bottom: 2.5rem;
    font-size: 2rem;
    font-weight: normal;
    color: ${styleVars.colors.main[3]};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Sizzle = styled.aside`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .quote {
    /* border-left: 1rem solid;
    border-right: 1rem solid;
    border-image-source: url(${filmRollIcon});
    border-image-width: 1rem;
    border-image-slice: 50%;
    border-image-repeat: repeat; */
    max-width: 400px;
    font-family: serif;
    font-size: 1.25rem;
    line-height: 1.2;
    color: ${styleVars.colors.main[4]};
    padding: 40px 40px 40px 50px;
    display: inline-block;
    position: relative;
    box-shadow:
      0 3px 8px ${transparentize(0.66, styleVars.colors.main[2])},
      0px 3px 12px ${transparentize(0.86, styleVars.colors.main[0])};
    background: ${styleVars.colors.main[1]};
    border: .5rem solid;
    border-image-slice: 1;
    border-image-source: 
    linear-gradient(110deg, ${transparentize(0.4, styleVars.colors.main[2])} 25%, 
    ${transparentize(0, styleVars.colors.main[2])}, ${transparentize(0.3, styleVars.colors.main[2])});
  }
  .quote:before {
    width: 30px;
    height: 20px;
    position: absolute;
    left: 10px;
    top: 10px;
    content: '';
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAWCAYAAACSYoFNAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wkIDBIR/EbngQAAAq5JREFUWMPtmD9oFFEQxn93XmGhCVFBQiQiCSYo2AiSxKAgsfAPH4IiFlYp1MYmiMGAhQgRRCSlCrEQIaYQwjQptBJMVLQSYxRBTNSQoBGNgoXhLHwH5/Le3u7hFcJ+cNyyM/vNzLcz7+1ujgqQtBU4DOwA6sxsFwkgCTMrHfcA+4DtwGszO0FKSLoBbAaeAeNmdj8aJwHHA+Ab8AS4a2Yv4vwLoaIkHQOuAE1l5rdJi3Ec54DBiOkr1WE9sNv9+iQBDJjZpRQcG4BNwAHggqQPwBkzu+MTOe8haJA0DYxEhEnULe6/Q1LRI8y/xqCkoqSO8vgp0ASMuHobosZ8pLh2YBFoqyZT1y29wGSMW64GIk1K6k06Xh60AYuu/r/FkYSkemAqhuAH8KhC5+wEhmNcPgIPqyzgubs+hGEXPw5PXR0hTEmqL3Vgrqyw6UDHLANXzexshXFa7RY7H74AvWY2lmYBDayFh4CbvjFwqAOW4mJIugz0ASs85ldm1l7eOUdiRqkF6K80TsBQwLxgZmuAsTLfqkbWYczxLQRchxLE6Hd1eUfM6fGncyS9A5o9jqeA6xXuAsBa4FOgqFqsMaXYxYBpHfA5Qd4ngWse84yZbcxJ2gL49vtlMyskTPIoMBoKUkNxQjd1v5mNJ+T4FRivljzQE7jucYo8TwfO36rxVh7iH0jBEarzYB7oDBhfxj3LRNAd4BitsTgh/u6EeQfrBDpzkiYCAr0BZiLn5szseCRo3C51z9OyE2Z2vooRugh0eXbSvaFdy8yWIhy3gcaIXzPQ6nt2KnicS2j1XOR7fVgVU5Mv8e9Vdsk2YE8K/1XAUuRcl3t9SILGPBmCyMTJxMnEycTJxMnEycT5r1EAZoFiQv/ZwPeeOeBnQo75KnOdJ/k37JUuryT5h/D+N8Px49h3fiJsAAAAAElFTkSuQmCC')
      no-repeat;
    opacity: 0.8;
    mix-blend-mode: color-dodge;
  }
  .quote:after {
    width: 30px;
    height: 20px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    content: '';
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAWCAYAAACSYoFNAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wkIDBIR/EbngQAAAq5JREFUWMPtmD9oFFEQxn93XmGhCVFBQiQiCSYo2AiSxKAgsfAPH4IiFlYp1MYmiMGAhQgRRCSlCrEQIaYQwjQptBJMVLQSYxRBTNSQoBGNgoXhLHwH5/Le3u7hFcJ+cNyyM/vNzLcz7+1ujgqQtBU4DOwA6sxsFwkgCTMrHfcA+4DtwGszO0FKSLoBbAaeAeNmdj8aJwHHA+Ab8AS4a2Yv4vwLoaIkHQOuAE1l5rdJi3Ec54DBiOkr1WE9sNv9+iQBDJjZpRQcG4BNwAHggqQPwBkzu+MTOe8haJA0DYxEhEnULe6/Q1LRI8y/xqCkoqSO8vgp0ASMuHobosZ8pLh2YBFoqyZT1y29wGSMW64GIk1K6k06Xh60AYuu/r/FkYSkemAqhuAH8KhC5+wEhmNcPgIPqyzgubs+hGEXPw5PXR0hTEmqL3Vgrqyw6UDHLANXzexshXFa7RY7H74AvWY2lmYBDayFh4CbvjFwqAOW4mJIugz0ASs85ldm1l7eOUdiRqkF6K80TsBQwLxgZmuAsTLfqkbWYczxLQRchxLE6Hd1eUfM6fGncyS9A5o9jqeA6xXuAsBa4FOgqFqsMaXYxYBpHfA5Qd4ngWse84yZbcxJ2gL49vtlMyskTPIoMBoKUkNxQjd1v5mNJ+T4FRivljzQE7jucYo8TwfO36rxVh7iH0jBEarzYB7oDBhfxj3LRNAd4BitsTgh/u6EeQfrBDpzkiYCAr0BZiLn5szseCRo3C51z9OyE2Z2vooRugh0eXbSvaFdy8yWIhy3gcaIXzPQ6nt2KnicS2j1XOR7fVgVU5Mv8e9Vdsk2YE8K/1XAUuRcl3t9SILGPBmCyMTJxMnEycTJxMnEycT5r1EAZoFiQv/ZwPeeOeBnQo75KnOdJ/k37JUuryT5h/D+N8Px49h3fiJsAAAAAElFTkSuQmCC') -40px
      0px no-repeat;
    opacity: 0.8;
    mix-blend-mode: color-dodge;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  border: none;
  -webkit-touch-callout: none;
  user-select: none;
  font-weight: 500;
  position: relative;
  box-sizing: border-box;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.7rem 1.8rem;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  &.primary {
    color: rgba(255, 255, 255, 0.87);
    background: linear-gradient(
      90deg,
      ${styleVars.colors.main[1]} 0%,
      ${styleVars.colors.secondary[2]} 70%,
      ${styleVars.colors.secondary[3]} 100%
    );
  }
  &.secondary {
    color: ${styleVars.colors.secondary[2]};
    background: #fff;
    background-clip: padding-box;
    border: solid 4px transparent;
    font-style: normal;
    transition: color ${styleVars.transitions.slow} ease-in-out;
    transition: background ${styleVars.transitions.fast} ease-in-out;
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
      ${styleVars.colors.secondary[2]},
      ${styleVars.colors.secondary[3]},
      ${styleVars.colors.secondary[2]}
    );
  }
  &.secondary:hover {
    color: rgba(255, 255, 255, 0.87);
    background: linear-gradient(
      to right,
      ${styleVars.colors.secondary[2]},
      ${styleVars.colors.secondary[3]},
      ${styleVars.colors.secondary[2]}
    );
  }
`;
