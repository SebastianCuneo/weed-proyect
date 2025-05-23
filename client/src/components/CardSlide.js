import "../styles/CardSlide.css";
import React, { useRef, useState, useEffect } from "react";
/**
 * CardSlide component renders a horizontal carousel of cards.
 *
 * Props:
 * - items: Array of { image: string, title: string, description: string, onClick?: function }
 */
export default function CardSlide({
  items,
  autoPlay = true,
  autoPlayInterval = 3000,
}) {
  const carouselRef = useRef(null);
  const itemWidth = 280; // px, must match CSS width
  const gap = 16; // px, must match CSS gap
  const slideDistance = itemWidth + gap;

  const handlePrev = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    const maxScrollLeft = scrollWidth - clientWidth;
    if (scrollLeft <= 0) {
      carousel.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: -slideDistance, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    const maxScrollLeft = scrollWidth - clientWidth;
    if (scrollLeft >= maxScrollLeft) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: slideDistance, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!autoPlay) return;
    const intervalId = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [autoPlay, autoPlayInterval, items]);

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel" ref={carouselRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className="card-slide"
            onClick={() => item.onClick && item.onClick(item)}
          >
            <div className="card-slide-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="card-slide-image"
              />
            </div>
            <div className="card-slide-content">
              <h3 className="card-slide-title">{item.title}</h3>
              <p className="card-slide-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}
