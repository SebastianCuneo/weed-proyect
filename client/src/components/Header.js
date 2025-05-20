import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">GreenMarket</div>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/guias">Guías</a>
          </li>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
