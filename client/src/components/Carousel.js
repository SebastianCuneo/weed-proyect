// src/components/Carousel.js
import React, { useState, useEffect, useRef } from "react";
import "../styles/Carousel.css";

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = items.length;
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Avanza cada 3 segundos
    timeoutRef.current = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % length),
      3000
    );
    return () => clearInterval(timeoutRef.current);
  }, [length]);

  const goToIndex = (index) => {
    clearInterval(timeoutRef.current);
    setCurrentIndex(index);
    // Reinicia intervalo
    timeoutRef.current = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % length),
      3000
    );
  };

  if (!items || length === 0) return null;

  return (
    <div className="carousel">
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((slide, idx) => (
          <div className="carousel__slide" key={idx}>
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel__image"
            />
            {slide.title && (
              <div className="carousel__caption">{slide.title}</div>
            )}
          </div>
        ))}
      </div>
      <div className="carousel__dots">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`carousel__dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => goToIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
