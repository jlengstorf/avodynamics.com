import React from 'react';
import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/speckled-color-overlay.svg';
import overlayIllustration2 from 'assets/illustrations/Rainbow-Vortex.svg';
import { transparentize } from 'polished';
import styleVars from 'styles/styleVars.js';
import { Layout, SEO } from 'components/common';
import { AboutIntro, CTASection } from 'components/about';

const SpeckledWrapper = styled.div`
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%),
    url(${overlayIllustration});
  background-size: 50%;
  background-repeat: repeat;
  position: relative;
  border-bottom: 2px solid ${transparentize(0.13, styleVars.colors.teal[4])};
`;

const WarmWrapper = styled.div`
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, ${transparentize(0.5, styleVars.colors.burg[6])}),
    url(${overlayIllustration2});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export default () => (
  <Layout>
    <SEO />
    <AboutIntro />
    <SpeckledWrapper>
      <h2>The Dynamic Duo</h2>
      <p>
        Story: AVO Dynamics started when the founders met and realized they shared a mutal ability to have an incredible
        impact on organizations. <br />
        <h2>The Dynamic Duo</h2>
        <strong>Put a face to your business, featuring the founders or the people on your team.</strong> <br />
        <h2>The Dynamic Difference</h2>
        <strong>Describe the customers or the cause that your business serves.</strong> <br />
        <strong>Explain your business model or how your products are made.</strong> <br />
        We crave results. Nothing feels better than closing a project knowing beyond a shadow of a doubt that we've
        acheived something that will change the course of a company or individual's life. It might sound dramatic, but
        we aim for dramatic results.
        <br />
        <br />
        <strong>
          Incorporate persuasive content (e.g., an explainer video, data visualizations, links to blog posts) that might
          otherwise clutter your homepage.
        </strong>
      </p>
      <h2>Vivamus fringilla justo quam</h2>
      <p>
        Vestibulum sed malesuada enim. Morbi interdum posuere augue vitae imperdiet. Curabitur placerat dignissim sapien
        id vestibulum. Sed arcu ligula, eleifend nec pellentesque quis, accumsan ut nibh. Vivamus tempor porta
        imperdiet. Ut eu mauris venenatis, posuere lectus nec, bibendum massa. Integer neque urna, consequat id magna
        eu, facilisis sagittis metus. Nunc nec eros risus. Nunc nibh urna, pulvinar sit amet purus ac, efficitur
        bibendum tellus. Fusce lobortis ullamcorper lorem, non suscipit felis iaculis at. Cras faucibus mattis vehicula.
        Curabitur ut eleifend metus. Sed vitae dapibus lacus. Nunc vel porta dui. Curabitur quis pretium orci, placerat
        commodo enim.
      </p>
      <p>
        Duis sed ex tempus nulla malesuada lobortis. Integer consequat egestas magna, at lobortis eros fringilla a.
        Aenean nisl lectus, rutrum sed auctor nec, varius id ligula. Maecenas at neque quis dui eleifend tempus id ut
        turpis. Mauris feugiat nisi luctus mauris fringilla, in viverra velit tempus. Curabitur bibendum semper nisi sit
        amet bibendum. Nulla vitae bibendum dolor. Maecenas faucibus feugiat elit, vel porta risus sodales ut. Sed
        consectetur urna in ipsum molestie, nec consectetur ante volutpat. Proin mollis, leo sed viverra auctor, arcu
        neque ullamcorper dolor, eget vehicula risus purus ac augue. Mauris eu nibh ipsum.
      </p>
    </SpeckledWrapper>
    <WarmWrapper>
      <h1>Dynamic Blehbity Blah</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi quam, pulvinar sed viverra at, pretium sit
        amet ipsum. Suspendisse ut lacus a felis commodo dignissim vitae nec eros. Integer congue erat tortor. Nulla id
        eleifend justo. Aenean id tempus felis. Curabitur at fermentum elit. In efficitur mauris vitae congue semper.
        Fusce gravida feugiat hendrerit.
      </p>
      <h2>Vivamus fringilla justo quam</h2>
      <p>
        Vestibulum sed malesuada enim. Morbi interdum posuere augue vitae imperdiet. Curabitur placerat dignissim sapien
        id vestibulum. Sed arcu ligula, eleifend nec pellentesque quis, accumsan ut nibh. Vivamus tempor porta
        imperdiet. Ut eu mauris venenatis, posuere lectus nec, bibendum massa. Integer neque urna, consequat id magna
        eu, facilisis sagittis metus. Nunc nec eros risus. Nunc nibh urna, pulvinar sit amet purus ac, efficitur
        bibendum tellus. Fusce lobortis ullamcorper lorem, non suscipit felis iaculis at. Cras faucibus mattis vehicula.
        Curabitur ut eleifend metus. Sed vitae dapibus lacus. Nunc vel porta dui. Curabitur quis pretium orci, placerat
        commodo enim.
      </p>
      <p>
        Duis sed ex tempus nulla malesuada lobortis. Integer consequat egestas magna, at lobortis eros fringilla a.
        Aenean nisl lectus, rutrum sed auctor nec, varius id ligula. Maecenas at neque quis dui eleifend tempus id ut
        turpis. Mauris feugiat nisi luctus mauris fringilla, in viverra velit tempus. Curabitur bibendum semper nisi sit
        amet bibendum. Nulla vitae bibendum dolor. Maecenas faucibus feugiat elit, vel porta risus sodales ut. Sed
        consectetur urna in ipsum molestie, nec consectetur ante volutpat. Proin mollis, leo sed viverra auctor, arcu
        neque ullamcorper dolor, eget vehicula risus purus ac augue. Mauris eu nibh ipsum.
      </p>
    </WarmWrapper>
    <CTASection />
  </Layout>
);
