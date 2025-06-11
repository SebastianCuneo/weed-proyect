import React from 'react';
import '../styles/ProductCard.css';

export default function ProductCard({ item }) {
  return (
    <a href={item.link} className="product-card">
      <img src={item.imagen} alt={item.nombre} className="product-card__img" />
      <div className="product-card__body">
        <h3 className="product-card__title">{item.nombre}</h3>
        <p className="product-card__price">{item.precio}</p>
        <button className="product-card__btn">Comprar</button>
      </div>
    </a>
  );
}
