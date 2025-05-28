import React, { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";
import "../styles/Productos.css";

// Ejemplo de datos; en producción vendrían de una API
const initialItems = [
  {
    id: 1,
    nombre: "Aceite de CBD 10%",
    precio: "$2.490",
    imagen: "/images/aceite-cbd.jpg",
    link: "/productos/1",
  },
  {
    id: 2,
    nombre: "Semillas OG Kush",
    precio: "$990",
    imagen: "/images/og-kush.jpg",
    link: "/productos/2",
  },
  {
    id: 3,
    nombre: "Vaporizador X-Cloud",
    precio: "$7.990",
    imagen: "/images/vaporizador.jpg",
    link: "/productos/3",
  },
  {
    id: 4,
    nombre: "Kit Cultivo Indoor",
    precio: "$15.500",
    imagen: "/images/kit-cultivo.jpg",
    link: "/productos/4",
  },
  {
    id: 5,
    nombre: "Maceta Autorriego",
    precio: "$1.250",
    imagen: "/images/maceta.jpg",
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
    <section className="productos-section">
      <h2>Marketplace</h2>
      <SearchFilter query={query} onChange={setQuery} />
      <div className="productos-grid">
        {items.map((item) => (
          <a key={item.id} href={item.link} className="producto-card">
            <img src={item.imagen} alt={item.nombre} className="producto-img" />
            <div className="producto-info">
              <h3>{item.nombre}</h3>
              <p className="producto-price">{item.precio}</p>
              <button className="producto-btn">Comprar</button>
            </div>
          </a>
        ))}
        {items.length === 0 && <p>No se encontraron productos.</p>}
      </div>
    </section>
  );
}
