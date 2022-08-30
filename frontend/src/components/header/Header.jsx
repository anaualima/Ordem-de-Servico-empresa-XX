import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logomarca from '../../images/logomarca.png'

function Header() {
  return (
    <header className="header">
      <img src={logomarca} alt="logomarca-da-empresa" width="70" className="logo-header" />
      <nav>
        <NavLink exact to="/register/collaborator" className="navlink">Cadastrar Cliente</NavLink>
        <NavLink exact to="/register/client" className="navlink">Cadastrar collaborador</NavLink>
      </nav>
    </header>
  )
}

export default Header;