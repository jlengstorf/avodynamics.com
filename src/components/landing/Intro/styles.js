import styled from 'styled-components';
import { transparentize } from 'polished';
import styleVars from 'styles/styleVars.js';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
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
    color: ${styleVars.colors.burg[3]};

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h2 {
    margin-bottom: 2.5rem;
    font-size: 2rem;
    font-weight: normal;
    color: ${styleVars.colors.teal[3]};

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
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  .quote {
    max-width: 400px;
    width: 80%;
    font-family: serif;
    font-size: 1.25rem;
    line-height: 1.2;
    color: ${transparentize(0.13, styleVars.colors.teal[5])};
    padding: 40px 40px 40px 50px;
    display: inline-block;
    position: relative;
    /* box-shadow: 0 3px 8px ${transparentize(0.66, styleVars.colors.teal[2])},
      0px 3px 12px ${transparentize(
      0.86,
      styleVars.colors.teal[1]
    )}; */
    background: ${styleVars.colors.teal[2]};
    border: 0.5rem solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      115deg,
      ${transparentize(0.6, styleVars.colors.teal[3])} 20%,
      ${transparentize(0, styleVars.colors.teal[3])},
      ${transparentize(0.8, styleVars.colors.teal[3])}
    );
    @media (max-width: 440px) {
      width: 100%;
      padding: 30px 20px 35px 20px;
    }
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
  .quoteBG {
    margin: -40px -40px -40px -50px;
    padding: 40px 40px 40px 50px;
  }
  .quoteBG:after {
    content: '';
    width: calc(100% + 1rem);
    height: calc(100% + 1rem);
    position: absolute;
    background: linear-gradient(
      ${styleVars.colors.teal[3]} 20%,
      ${styleVars.colors.teal[4]},
      ${styleVars.colors.teal[3]}
    );
    top: -0.25rem;
    left: -0.5rem;
    filter: blur(0.6rem);
    opacity: 1;
    z-index: -1;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 440px) {
    flex-direction: column;
    a {
      text-align: center;
      width: 100%;
    }
  }
`;
