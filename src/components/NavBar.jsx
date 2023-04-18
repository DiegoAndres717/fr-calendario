import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <header>
      <Link className="logo" to={'/home'}>
        <img alt="Logo FR" src={Logo} className="logo-fr" />
      </Link>
      <div className="input-search">
        <input
          type="text"
          placeholder="¿Que quieres estudiar hoy?"
          className="navbar-search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <nav className={`menu ${showMenu ? "menu-toggle" : ""}`}>
        <ul className="menu">
          {routes.map((route, index) =>(
            <li key={index} className="navbar-item">
              <Link to={route.to}  className="navbar-link">{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-toggle" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

const routes = [];
routes.push({
  to: "/home",
  name: 'Inicio',
});
routes.push({
  to: "/foro",
  name: 'Foro',
});
routes.push({
  to: "/contact",
  name: 'Contáctanos',
});
routes.push({
  to: "/home",
  name: 'Cerrar sesión',
});

export default NavBar;
