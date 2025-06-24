import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/guides">Guías</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
