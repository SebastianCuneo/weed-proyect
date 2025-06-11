import React, { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";
import "../styles/Productos.css";
import Footer from "./Footer";
import ProductCard from './ProductCard';
import AceiteImg from "../images/AceiteCannabis.jpg";
import Slyde2Img from "../images/Slide2.webp";
import { Link } from "react-router-dom";
import Rosin from "../images/Rosin.png";
import Tijeras from "../images/Tijeras.png";
import Vaporizador from "../images/Productos/Vaporizador.png";
import KitIndoor from "../images/Productos/KitIndoor.png";
import Maceta20L from "../images/Productos/Maceta20L.png";

// Ejemplo de datos; en producción vendrían de una API
const initialItems = [
  {
    id: 1,
    nombre: "Aceite de CBD 10%",
    precio: "$2.490",
    imagen: AceiteImg,
    link: "/productos/1",
  },
  {
    id: 2,
    nombre: "Semillas OG Kush",
    precio: "$990",
    imagen: Slyde2Img,
    link: "/productos/2",
  },
  {
    id: 3,
    nombre: "Vaporizador X-Cloud",
    precio: "$7.990",
    imagen: Vaporizador,
    link: "/productos/3",
  },
  {
    id: 4,
    nombre: "Kit Cultivo Indoor",
    precio: "$15.500",
    imagen: KitIndoor,
    link: "/productos/4",
  },
  {
    id: 5,
    nombre: "Maceta Autorriego",
    precio: "$1.250",
    imagen: Maceta20L,
    link: "/productos/5",
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
