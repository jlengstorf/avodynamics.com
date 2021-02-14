import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';
import { transparentize, desaturate } from 'polished';
import styleVars from 'styles/styleVars.js';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  /* background-image: url(${overlayIllustration}); */
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const TestimonialWrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const TestimonialTitleWrapper = styled.div`
  width: 50%;
  padding-bottom: 8rem;
  h2 {
    color: ${transparentize(0.3, styleVars.colors.burg[1])};
    font-size: 2.4rem;
  }
`;

export const Testimonial = styled.div`
  display: flex;
  img {
    border-radius: 50% 50% 50% 50%;
    padding: 0.25rem;
    height: 12.5rem;
    background: linear-gradient(
      to bottom,
      ${styleVars.colors.burg[1]},
      ${styleVars.colors.burg[2]} 80%,
      ${styleVars.colors.burg[3]}
    );
    z-index: 3;
  }
  div {
    min-width: 60%;
    width: 65%;
    background: linear-gradient(
      to bottom,
      ${styleVars.colors.burg[1]},
      ${styleVars.colors.burg[2]} 80%,
      ${styleVars.colors.burg[3]}
    );
    color: white;
    margin-left: -6.125rem;
    padding: 1rem;
    padding-left: 7.125rem;
    z-index: 2;
    border-radius: 0 1rem 1rem 0;
  }
`;
