import React from 'react';
import { Link } from 'gatsby';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Link to="/contact">Contact</Link>
    <a href="https://client.avodynamics.com/public/client/portal/5f90a43c896cad116427ca89">Login</a>
  </Wrapper>
);

export default NavbarLinks;
