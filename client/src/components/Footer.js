import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>¿Tienes preguntas?</h2>
      <p>Contáctanos para más información.</p>
      <a href="/contacto" className="btn-contact">
        Contáctanos
      </a>
    </footer>
  );
}
