import React from 'react';
import { Nav, NavLink, NavIcon, Bars,Logo } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>

        <NavLink to='/'><Logo src="zozIcon.png"/></NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
