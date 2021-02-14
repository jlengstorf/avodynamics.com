import styled from 'styled-components';
import { transparentize, desaturate } from 'polished';
import styleVars from 'styles/styleVars.js';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const FeaturedVideoWrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .video-wrapper {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    background: linear-gradient(
      90deg,
      ${styleVars.colors.burg[2]},
      ${styleVars.colors.burg[3]} 15%,
      ${styleVars.colors.burg[4]},
      ${styleVars.colors.burg[3]} 85%,
      ${styleVars.colors.burg[2]}
    );
    border-radius: 1rem;
    border: 1px solid ${styleVars.colors.burg[3]};
    z-index: 2;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: inherit;
      top: 0;
      left: 0;
      filter: blur(0.6rem);
      opacity: 1;
    }
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem;
    border-radius: 1rem;
    overflow: hidden;

    #player {
      .ytp-title-channel {
        display: none !important;
      }
    }
  }
`;
