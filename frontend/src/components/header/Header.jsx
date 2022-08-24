import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink exact to="/register/collaborator" className="navlink">Cadastrar Cliente</NavLink>
        <NavLink exact to="/register/client" className="navlink">Cadastrar collaborador</NavLink>
      </nav>
    </header>
  )
}

export default Header;