import React from "react";
import "../styles/Home.css";
import Carousel from "./Carousel.js";
import AceiteImg from "../images/AceiteCannabis.jpg";
import Slyde2Img from "../images/Slide2.webp";
import CardSlide from "./CardSlide.js";
import { Link } from "react-router-dom";

const sliders = [
  {
    image: AceiteImg,
    title: "Aceite de CBD 10%",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
  },

  // …más slides
];
export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a GreenMarket</h1>

        <Link to="/guides" className="btn-explore">
          Guías
        </Link>
        <Link to="/productos" className="btn-explore">
          Productos
        </Link>
        <Link to="/productos" className="btn-explore">
          Articulos educativos
        </Link>
      </header>
      <div>
        <CardSlide items={sliders} />
      </div>
      <h2 className="h2_featured_products">Artículos destacados</h2>
      <div className="featured_products">
        <div className="benefit2">
          <h2>Aceites y Extracciones</h2>
          <Carousel items={sliders} />
        </div>
        <div className="benefit2">
          <h2>Semillas y Accesorios de Cultivo</h2>
          <Carousel items={sliders} />
        </div>
        <div className="benefit2">
          <h2>Vaporizadores y Parafernalia</h2>
          <Carousel items={sliders} />
        </div>
      </div>
      <div className="home-footer">
        <h2>¿Tienes preguntas?</h2>
        <p>Contáctanos para más información.</p>
        <a href="/contacto" className="btn-contact">
          Contáctanos
        </a>
      </div>
    </div>
  );
}
