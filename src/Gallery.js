import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

const Gallery = ({ images, interval = 3000, width = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Autoplay
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }

    return () => clearInterval(timerRef.current);
  }, [images.length, interval, isHovered]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="photo-gallery"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: width + "px" }}
    >
      <span className="arrow prev" onClick={goToPrevious} />
      <div
        className="gallery-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img loading="lazy" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <span className="arrow" onClick={goToNext} />
      <div className="gallery-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
