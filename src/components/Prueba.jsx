import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import "../styles/Prueba.css";

const Prueba = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value)
  };

  return (
    <header>
      <div class="logo">
        <img alt="Logo FR" src={Logo} className="logo-fr" />
      </div>
      <nav className={`menu ${showMenu ? "menu-toggle" : ""}`}>
        <ul>
          <li className="navbar-item">
            <Link to={"/home"} className="navbar-link">
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={'/'} className="navbar-link">
              Foro
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/"} className="navbar-link">
              Contáctanos
            </Link>
          </li>
        </ul>
      </nav>
      <div className="input-search">
          <input type="text" placeholder="¿Que quieres estudiar hoy?" className="navbar-search" value={searchTerm} onChange={handleSearch}/> 
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        </div>
      <div class="menu-toggle" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Prueba;
