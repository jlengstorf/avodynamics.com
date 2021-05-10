import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';
import { transparentize, desaturate } from 'polished';
import styleVars from 'styles/styleVars.js';

export const Wrapper = styled.div`
  padding-bottom: 0rem;
  border-top: 2px solid;
  border-image-source: linear-gradient(
    to right,
    ${styleVars.colors.teal[4]},
    ${styleVars.colors.teal[5]},
    ${styleVars.colors.burg[5]},
    ${styleVars.colors.burg[4]}
  );
  border-image-slice: 1;
`;

export const CTAWrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  min-height: 0;
  @media (max-width: 600px) {
    padding-top: 1rem;
    padding-bottom: 0rem;
  }
`;

export const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  @media (max-width: 840px) {
    flex-direction: column;
  }

  .CTAsection {
    display: flex;
    flex-direction: column;
    width: 70%;
    @media (max-width: 840px) {
      width: 80%;
      margin-bottom: 1rem;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  h2 {
    width: fit-content;
    color: ${styleVars.colors.teal[3]};
    font-size: 2.4rem;
    @media (max-width: 1200px) {
      font-size: 3vw;
    }
    @media (max-width: 840px) {
      font-size: 3.5vw;
    }
    @media (max-width: 700px) {
      font-size: 4vw;
    }
    @media (max-width: 600px) {
      font-size: 5vw;
    }
    @media (max-width: 360px) {
      font-size: 6vw;
    }
  }
  p {
    padding-left: 2rem;
    max-width: 70%;
    border-left: 2px solid ${styleVars.colors.burg[3]};
    margin-left: 0.25rem;
    @media (max-width: 980px) {
      max-width: 90%;
    }
  }
`;
