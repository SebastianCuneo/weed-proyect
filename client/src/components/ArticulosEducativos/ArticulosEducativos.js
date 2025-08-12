 // src/components/ArticulosEducativos.js
import React from "react";
import "../../styles/ArticulosEducativos/ArticulosEducativos.css";
import Rosin from "../../images/Rosin.png";
import Tijeras from "../../images/Tijeras.png";
import AceiteImg from "../../images/AceiteCannabis.jpg";
import Slyde2Img from "../../images/Slide2.webp";
import Footer from "../Footer.js";

const articles = [
  {
    id: 1,
    title: "CBD para el Insomnio: Guía Completa",
    excerpt:
      "Descubre cómo los cannabinoides pueden ayudarte a conciliar el sueño de forma natural y segura.",
    image: AceiteImg,
    link: "/articulos/cbd-insomnio",
  },
  {
    id: 2,
    title: "Autocultivo en Interior: Primeros Pasos",
    excerpt:
      "Aprende los fundamentos para montar tu propio cultivo indoor de cannabis, incluso si partes de cero.",
    image: AceiteImg,
    link: "/articulos/autocultivo-interior",
  },
  {
    id: 3,
    title: "Guía de Nutrientes y Fertilizantes",
    excerpt:
      "Conoce las mejores fórmulas y dosis de nutrientes para maximizar la salud y producción de tus plantas.",
    image: AceiteImg,
    link: "/articulos/guia-nutrientes",
  },
  {
    id: 4,
    title: "Control de Plagas y Enfermedades",
    excerpt:
      "Identifica a tiempo hongos y plagas comunes en cultivos de cannabis y aprende a tratarlos.",
    image: AceiteImg,
    link: "/articulos/control-plagas",
  },
  {
    id: 5,
    title: "Aspectos Legales del Cannabis en Latinoamérica",
    excerpt:
      "Un repaso por la situación legal actual en los principales países de habla hispana.",
    image: AceiteImg,
    link: "/articulos/legalidad-latam",
  },
  {
    id: 6,
    title: "Secado y Curado: Conserva los Terpenos",
    excerpt:
      "Todo lo que debes saber para secar y curar tu cosecha sin perder aroma ni potencia.",
    image: AceiteImg,
    link: "/articulos/secado-curado",
  },
];

export default function ArticulosEducativos() {
  return (
    <>
      <section className="articulos-educativos">
        <h2 className="articulos-title">Artículos Educativos</h2>
        <div className="articulos-grid">
          {articles.map((article) => (
            <article key={article.id} className="card-articulo">
              <img
                className="card-imagen"
                src={article.image}
                alt={article.title}
              />
              <div className="card-contenido">
                <h3 className="card-titulo">{article.title}</h3>
                <p className="card-excerpt">{article.excerpt}</p>
                <a href={article.link} className="card-boton">
                  Leer más
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
