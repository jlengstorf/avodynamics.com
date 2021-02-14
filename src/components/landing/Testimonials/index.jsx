import React from 'react';
import { Container } from 'components/common';
import natImg from 'assets/images/nat.jpg';
import { Wrapper, TestimonialWrapper, TestimonialTitleWrapper, Testimonial } from './styles';

/* TODO: Use Gatsby Link for Buttons */
export const Testimonials = () => (
  <Wrapper>
    <TestimonialWrapper as={Container}>
      <TestimonialTitleWrapper>
        <h2>What do our clients say?</h2>
      </TestimonialTitleWrapper>
      <Testimonial>
        <img src={natImg} alt="Nat, owner of Divine Designs" />
        <div>
          <p>
            Hiring AVO Dynamics to film a social media commercial for my hair solon was one of the best decision I have
            made for advertising my business. The social media video performed 5 times better than my previous
            advertising campaigns.They even redesigned my business logo at no charge. They go the extra mile to make
            sure you are happy with their service
          </p>
          <small>Natauasha | Owner, Divine Designs</small>
        </div>
      </Testimonial>
    </TestimonialWrapper>
  </Wrapper>
);
