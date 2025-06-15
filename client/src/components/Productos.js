import React, { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";
import "../styles/Productos.css";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import AceiteImg from "../images/AceiteCannabis.jpg";
import Slyde2Img from "../images/Slide2.webp";
import { Link } from "react-router-dom";
import Rosin from "../images/Rosin.png";
import Tijeras from "../images/Tijeras.png";
import Vaporizador from "../images/Productos/Vaporizador.png";
import KitIndoor from "../images/Productos/KitIndoor.png";
import Maceta20L from "../images/Productos/Maceta20L.png";

// Ejemplo de datos; en producción vendrían de una API
export const initialItems = [
  {
    id: 1,
    nombre: "Aceite de CBD 10%",
    descripcion: "Aceite de CBD de alta calidad, ideal para uso diario.",
    precio: "$2.490",
    imagen: AceiteImg,
    link: "/productos/1",
  },
  {
    id: 2,
    nombre: "Semillas OG Kush",
    descripcion:
      "Semillas de cannabis OG Kush, reconocidas por su potencia y sabor.",
    precio: "$990",
    imagen: Slyde2Img,
    link: "/productos/2",
  },
  {
    id: 3,
    nombre: "Vaporizador X-Cloud",
    descripcion:
      "Vaporizador portátil X-Cloud, ideal para disfrutar de tus hierbas favoritas.",
    precio: "$7.990",
    imagen: Vaporizador,
    link: "/productos/3",
  },
  {
    id: 4,
    nombre: "Kit Cultivo Indoor",
    descripcion: "Kit completo para cultivo indoor, incluye luces y macetas",
    precio: "$15.500",
    imagen: KitIndoor,
    link: "/productos/4",
  },
  {
    id: 5,
    nombre: "Maceta Autorriego",
    descripcion:
      "Maceta de 20L con sistema de autorriego, ideal para plantas grandes.",
    precio: "$1.250",
    imagen: Maceta20L,
    link: "/productos/5",
  },
  {
    id: 6,
    nombre: "Tijeras de Podar",
    descripcion:
      "Tijeras de podar de alta precisión, perfectas para el cuidado de tus plantas.",
    precio: "$399",
    imagen: Tijeras,
    link: "/productos/6",
  },
];

export default function Productos() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const filtered = initialItems.filter((item) =>
      item.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setItems(filtered);
  }, [query]);

  return (
    <>
      <section className="productos-section">
        <h2>Marketplace</h2>
        <SearchFilter query={query} onChange={setQuery} />
        <div className="productos-grid">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
          {items.length === 0 && <p>No se encontraron productos.</p>}
        </div>
      </section>
      <Footer />
    </>
  );
}
