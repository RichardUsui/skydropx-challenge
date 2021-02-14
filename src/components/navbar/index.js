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
          <NavLink to='/popular/page/1'>
            Populares
          </NavLink>
          <NavLink to='/mejor-valorados/page/1'>
            Mejor valorados
          </NavLink>
          <NavLink to='/tendencia/page/1'>
            En tendencia
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
