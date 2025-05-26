import React from "react";
import "../styles/GrowingGuide.css";
import AceiteImg from "../images/AceiteCannabis.jpg";
import Slyde2Img from "../images/Slide2.webp";
import { Link } from "react-router-dom";

export default function GrowingGuide() {
  const cards = [
    {
      imgSrc: AceiteImg,
      title: "Germinacion de Semillas",
      Link: "/germination",
    },
    {
      imgSrc: Slyde2Img,
      title: "Prepara el suelo",
      link: "/preparar-suelo",
    },
    {
      imgSrc: AceiteImg,
      title: "Planta las semillas",
      link: "/plantar-semillas",
    },
    {
      imgSrc: Slyde2Img,
      title: "Riega adecuadamente",
      link: "/riego",
    },
  ];
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
      <div className="cards-container">
        {cards.map((card, idx) => (
          <Link to={card.link} key={idx} className="card text-bg-dark">
            <img src={card.imgSrc} className="card-img" alt={card.title} />
            <div className="card-img-overlay">
              <h5 className="card-title">{card.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
