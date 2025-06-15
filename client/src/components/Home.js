import React from "react";
import "../styles/Home.css";
import Carousel from "./Carousel.js";
import AceiteImg from "../images/AceiteCannabis.jpg";
import Slyde2Img from "../images/Slide2.webp";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import Rosin from "../images/Rosin.png";
import Tijeras from "../images/Tijeras.png";
import Vaporizador from "../images/Productos/Vaporizador.png";

const slider_AceiteExtracciones = [
  {
    image: AceiteImg,
    title: "Aceite de CBD 10%",
    link: "/productos/1",
  },

  {
    image: Rosin,
    title: "Extracción de Rosin",
    link: "/productos/2",
  },

  // …más slides
];
const slider_SemillasyAccesorios = [
  {
    image: Tijeras,
    title: "tijeras de podar",
    link: "/productos/6",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
    link: "/productos/2",
  },
  {
    image: Rosin,
    title: "Extracción de Rosin",
    link: "/productos/3",
  },

  // …más slides
];
const slider_VaporizadoresyParafernalia = [
  {
    image: Vaporizador,
    title: "Vaporizador X-Cloud",
    link: "/productos/3",
  },
  {
    image: Slyde2Img,
    title: "Semillas OG Kush",
    link: "/productos/1",
  },
  {
    image: Rosin,
    title: "Extracción de Rosin",
    link: "/productos/1",
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
        <Link to="/articulos-educativos" className="btn-explore">
          Articulos educativos
        </Link>
      </header>
      <h2 className="h2_featured_products">Artículos destacados</h2>
      <div className="featured_products">
        <div className="benefit2">
          <h2>Aceites y Extracciones</h2>
          <Carousel items={slider_AceiteExtracciones} />
        </div>
        <div className="benefit2">
          <h2>Semillas y Accesorios de Cultivo</h2>
          <Carousel items={slider_SemillasyAccesorios} />
        </div>
        <div className="benefit2">
          <h2>Vaporizadores y Parafernalia</h2>
          <Carousel items={slider_VaporizadoresyParafernalia} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
