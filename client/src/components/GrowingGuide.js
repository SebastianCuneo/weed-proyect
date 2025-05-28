import React from "react";
import "../styles/GrowingGuide.css";
import AceiteImg from "../images/AceiteCannabis.jpg";
import Slyde2Img from "../images/Slide2.webp";
import Germinacion from "../images/Germinacion.png";
import { Link } from "react-router-dom";
import Sustratos from "../images/Sustratos.png";
import Vegetativo from "../images/Vegetativo.png";
import Riego from "../images/Riego.png";
import Floracion from "../images/Floracion.png";
import PH from "../images/PH.png";
import Footer from "./Footer";
import Temperatura from "../images/Temperatura.png";
import Plagas from "../images/Plagas.png";
import Cosecha from "../images/Cosecha.png";
import SecadoCurado from "../images/SecadoCurado.png";
import ExteriorInteririor from "../images/ExteriorInterior.png";
import EspacioyRendimiento from "../images/EspacioyRendimiento.png";
import Equipamiento from "../images/Equipamiento.png";
import LegalyEtico from "../images/LegalyEtico.png";

export default function GrowingGuide() {
  const cards = [
    {
      imgSrc: Germinacion,
      title: "Germinacion de Semillas",
      Link: "/germination",
    },
    {
      imgSrc: Sustratos,
      title: "Preparacion del suelo",
      link: "/preparar-suelo",
    },
    {
      imgSrc: Vegetativo,
      title: "Fase Vegetativa",
      link: "/plantar-semillas",
    },

    {
      imgSrc: Floracion,
      title: "Fase Florativa",
      link: "/Floracion",
    },
    {
      imgSrc: Riego,
      title: "Riega adecuadamente",
      link: "/riego",
    },
    {
      imgSrc: PH,
      title: "pH y Calidad del Agua",
      link: "/Floracion",
    },
    {
      imgSrc: Temperatura,
      title: "Temperatura y Humedad",
      link: "/Temperatura",
    },
    {
      imgSrc: Plagas,
      title: "Enfermedades y Plagas",
      link: "/Temperatura",
    },
    {
      imgSrc: Cosecha,
      title: "Cosecha",
      link: "/Cosecha",
    },
    {
      imgSrc: SecadoCurado,
      title: "Secado y Curado",
      link: "/SecadoCurado",
    },
    {
      imgSrc: ExteriorInteririor,
      title: "Exterior vs Interirior",
      link: "/ExteriorInteririor",
    },
    {
      imgSrc: EspacioyRendimiento,
      title: "Espacio y Rendimiento",
      link: "/EspacioyRendimiento",
    },
    {
      imgSrc: Equipamiento,
      title: "Equipamiento",
      link: "/Equipamiento",
    },
    {
      imgSrc: LegalyEtico,
      title: "Legal y Etico",
      link: "/LegalyEtico",
    },
  ];
  return (
    <div className="growing-guide-container">
      <h1>Guía de Cultivo</h1>
      <p>
        Bienvenido a nuestra guía de cultivo. Aquí encontrarás información
        valiosa sobre cómo cultivar tus propias plantas.
      </p>

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
      <Footer />
    </div>
  );
}
