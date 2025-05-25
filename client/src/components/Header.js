import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">GreenMarket</div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Inicio</Link>
          </li>
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
