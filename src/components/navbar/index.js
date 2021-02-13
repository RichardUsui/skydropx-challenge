import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/clapperboard.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/popular'>
            Popular
          </NavLink>
          <NavLink to='/mejor-valorados'>
            Mejor valorados
          </NavLink>
          <NavLink to='/emiten-hoy'>
            Se emiten hoy
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
