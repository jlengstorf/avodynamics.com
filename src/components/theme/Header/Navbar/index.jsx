import React from 'react';
import { Link } from 'gatsby';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, HomeLink, StyledLogo, HeaderCTA } from './styles';

const Navbar = () => (
  <Wrapper>
    <HomeLink as={Link} to="/">
      <StyledLogo />
    </HomeLink>
    <NavbarLinks desktop />
    <HeaderCTA as={Link} to="/contact">
      Get a free consultation
    </HeaderCTA>
  </Wrapper>
);

export default Navbar;
