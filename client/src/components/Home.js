import React from "react";
import "../styles/Home.css";
import Carousel from "./Carousel.js";
import AceiteImg from "../images/AceiteCannabis.jpg";
import Slyde2Img from "../images/Slide2.webp";

const sliders = [
  {
    image: AceiteImg,
    title: "Aceite de CBD 10%",
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

        <a href="/guias" className="btn-explore">
          Guías de cultivo
        </a>
        <a href="/guias" className="btn-explore">
          Productos
        </a>
        <a href="/guias" className="btn-explore">
          Articulos educativos
        </a>
      </header>
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
    </div>
  );
}
