import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import {
  Nav,
  MobileIcon,
  NavLogo,
  NavIcon,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
} from './HeaderStyles';
const Header = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <NavIcon />
        </NavLogo>
        <MobileIcon onClick={clickHandler}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={clickHandler} click={click}>
          <NavItem>
            <NavLinks to='/'>HOME</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/about'>ABOUT</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/work'>WORK</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/PROCESS'>PROCESS</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/services'>SERVICES</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/testimonials'>TESTIMONIALS</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/contact'>CONTACT</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
