import React from "react";
import "../styles/GrowingGuide.css";
export default function GrowingGuide() {
  return (
    <div className="growing-guide-container">
      <h1>Guía de Cultivo</h1>
      <p>
        Bienvenido a nuestra guía de cultivo. Aquí encontrarás información
        valiosa sobre cómo cultivar tus propias plantas.
      </p>
      <h2>Pasos para Cultivar</h2>
      <ol>
        <li>Selecciona tus semillas.</li>
        <li>Prepara el suelo.</li>
        <li>Planta las semillas.</li>
        <li>Riega adecuadamente.</li>
        <li>Controla la luz y temperatura.</li>
        <li>Cosecha cuando estén listas.</li>
      </ol>
    </div>
  );
}
