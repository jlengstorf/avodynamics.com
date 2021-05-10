import React from 'react';
import { Link } from 'gatsby';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Link to="/contact">Contact</Link>
    <a href="">Login</a>
  </Wrapper>
);

export default NavbarLinks;
