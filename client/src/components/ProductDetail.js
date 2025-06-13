import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProductDetail.css';

export default function ProductDetail({ items }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const found = items.find(i => i.id === parseInt(id));
    if (found) {
      setItem(found);
      setMainImage(found.images ? found.images[0] : found.imagen);
    }
  }, [id, items]);

  if (!item) return <p className="not-found">Producto no encontrado.</p>;

  return (
    <section className="detail-section">
      <Link to="/productos" className="back-link">← Volver al Marketplace</Link>
      <div className="detail-container">
        <div className="images-gallery">
          <div className="thumbnails">
            {(item.images || [item.imagen]).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${item.nombre} ${idx}`}
                className={src === mainImage ? 'thumb active' : 'thumb'}
                onClick={() => setMainImage(src)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={mainImage} alt={item.nombre} />
          </div>
        </div>
        <div className="detail-info">
          <h1 className="detail-title">{item.nombre}</h1>
          <div className="rating">
            {item.rating && <span>{item.rating} ★</span>} {item.reviews && `(${item.reviews} reseñas)`}
          </div>
          <div className="price-section">
            <span className="price">{item.precio}</span>
            {item.installments && (
              <span className="installments">en {item.installments} cuotas</span>
            )}
          </div>
          {item.variants && (
            <div className="variants">
              <p>Variante: <strong>{item.variant}</strong></p>
              <div className="variant-options">
                {item.variants.map(v => (
                  <button
                    key={v}
                    className={v === item.variant ? 'variant-btn active' : 'variant-btn'}
                  >{v}</button>
                ))}
              </div>
            </div>
          )}
          <div className="actions">
            <button className="btn-buy">Comprar ahora</button>
            <button className="btn-cart">Agregar al carrito</button>
          </div>
          <div className="seller-shipping">
            {item.shipping && <p><strong>Envío:</strong> {item.shipping}</p>}
            {item.stock && <p><strong>Stock:</strong> {item.stock}</p>}
            {item.seller && <p><strong>Vendido por:</strong> {item.seller}</p>}
          </div>
          {item.features && (
            <div className="product-features">
              <h3>Lo que tienes que saber de este producto</h3>
              <ul>
                {item.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 