import React from 'react';
import { Link } from 'gatsby';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, HomeLink, StyledLogo } from './styles';

const Navbar = () => (
  <Wrapper>
    <HomeLink as={Link} to="/">
      <StyledLogo />
    </HomeLink>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
