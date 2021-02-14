import React from 'react';
import { Container } from 'components/common';
import ReactPlayer from 'react-player';
import { Wrapper, FeaturedVideoWrapper } from './styles';

export const FeaturedVideo = () => (
  <Wrapper>
    <FeaturedVideoWrapper as={Container}>
      <div className="video-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=LkfWQMyVntw"
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 0, rel: 0 },
            },
          }}
        />
      </div>
    </FeaturedVideoWrapper>
  </Wrapper>
);
