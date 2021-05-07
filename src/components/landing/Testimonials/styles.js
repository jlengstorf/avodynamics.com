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
  justify-content: space-between;
  flex-direction: column;
`;

export const TestimonialTitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 6rem;
  h2 {
    color: ${transparentize(0.13, styleVars.colors.burg[3])};
    font-size: 2.4rem;
  }
`;

export const Testimonial = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 2rem;
  padding: 0 40px;
  position: relative;
  overflow: hidden;
  align-self: ${(props) => (props.primary ? 'flex-start' : 'flex-end')};
  flex-direction: ${(props) => (props.primary ? 'row' : 'row-reverse')};
  background: linear-gradient(
    ${(props) => (props.primary ? 'to right' : 'to left')},
    ${(props) => (props.primary ? styleVars.colors.burg[3] : styleVars.colors.teal[3])},
    ${(props) => (props.primary ? styleVars.colors.burg[1] : styleVars.colors.teal[1])}
  );
  color: ${(props) =>
    props.primary ? transparentize(0.13, styleVars.colors.burg[6]) : transparentize(0.13, styleVars.colors.teal[6])};
  z-index: 1;
  box-shadow: 0 3px 16px
      ${(props) =>
        props.primary
          ? transparentize(0.13, styleVars.colors.burg[2])
          : transparentize(0.13, styleVars.colors.teal[2])},
    0 3px 8px
      ${(props) =>
        props.primary
          ? transparentize(0.08, styleVars.colors.burg[4])
          : transparentize(0.08, styleVars.colors.teal[4])};
  border-radius: 1rem;

  &:after {
    content: '';
    width: 150px;
    height: 107%;
    background: ${(props) =>
      props.primary ? transparentize(0, styleVars.colors.burg[1]) : transparentize(0, styleVars.colors.teal[1])};
    position: absolute;
    top: -10px;
    ${(props) => (props.primary ? 'left: -75px;' : 'right: 75px;')};
    transform: ${(props) => (props.primary ? 'matrix(0.9, 0, 0.4, 1, 135, 0)' : 'matrix(0.9, 0, -0.4, 1, 20, 0)')};
    z-index: -1;
  }
  .testimonialImage {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin: 10px 25px 0 0;
    position: relative;
    border: 3px solid
      ${(props) =>
        props.primary ? transparentize(0, styleVars.colors.burg[1]) : transparentize(0, styleVars.colors.teal[1])};
    img {
      width: 100%;
      height: auto;
    }
  }
  .testimonialText {
    width: 70%;
    padding: 30px 0;
    .testimonialTitle {
      font-size: 1.25rem;
      font-weight: 900;
      margin: 0 0 20px;
      text-transform: capitalize;
      opacity: 0.9;
      mix-blend-mode: overlay;
      text-align: ${(props) => (props.primary ? 'right' : 'left')};
    }
    .description {
      font-size: 18px;
      line-height: 26px;
    }
  }
`;
