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
      <Testimonial primary>
        <div className="testimonialImage">
          <img src={natImg} alt="Nat, owner of Divine Designs" />
        </div>
        <div className="testimonialText">
          <p className="description">
            Hiring AVO Dynamics to film a commercial for my hair solon was one of the best decision I have made for
            advertising my business. I posted the video on my social media page and it performed 5 times better than
            previous advertising campaigns. I imediately hired them to run a full advertizing campaign based around the
            commerical. They even redesigned my business logo at no charge. They really go the extra mile to make sure
            you're happy with their service.
          </p>
          <p className="testimonialTitle">Natauasha | Owner, Divine Designs</p>
        </div>
      </Testimonial>
      <Testimonial>
        <div className="testimonialImage">
          <img src={natImg} alt="Nat, owner of Divine Designs" />
        </div>
        <div className="testimonialText">
          <p className="description">
            It was two weeks out from the elections I was worried about how it was going to go. I was advices to reach
            out to AVO Dynamics to film a commercial as a last minute boost. They really dug into my campaign, platform,
            and the issues my constituants cared about to craft a product beyond my expectations. I won that election.
          </p>
          <p className="testimonialTitle">Gary Doggette | County Comissioner, Choctaw County</p>
        </div>
      </Testimonial>
    </TestimonialWrapper>
  </Wrapper>
);
