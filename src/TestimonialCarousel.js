import "./TestimonialCarousel.css";
import Testimonial from "./Testimonial";
import testimonials from "./assets/testimonials.json";
import React, { useState } from "react";
import _ from "lodash";

const maxWidth = (testimonials.length - 1) * 360;

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length / 2);

  let sliderTimeout;

  const updatePositions = (dir) => {
    let carousel = document.querySelector("#testimonials .carousel");
    Array.from(carousel.children).map((child, index) => {
      let style = getComputedStyle(child),
        matrix = new DOMMatrix(style.transform),
        translateX = matrix.m41,
        basePosition = parseInt(index) * 360,
        newTranslation;

      if (dir) {
        if (basePosition + translateX > 0) {
          newTranslation = translateX - 360;
        } else {
          newTranslation = maxWidth - index * 360;
        }
        child.style.transform = `translateX(${newTranslation}px)`;
      } else {
        if (basePosition + translateX < maxWidth) {
          newTranslation = translateX + 360;
        } else {
          newTranslation = -1 * basePosition;
        }
        child.style.transform = `translateX(${newTranslation}px)`;
      }
    });
  };

  // Function to go to the next testimonial
  const nextTestimonial = _.debounce(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    updatePositions(1);
  }, 300);

  // Function to go to the previous testimonial
  const prevTestimonial = _.debounce(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    updatePositions(0);
  }, 300);

  return (
    <div id="testimonials" className="section blue">
      <h1 className="section-header">TESTIMONIALS</h1>
      <div
        className="carousel-wrapper"
        style={{ maxWidth: `${maxWidth + 500}px` }}
      >
        <span className="arrow prev" onClick={prevTestimonial} />
        <div className="carousel">
          {testimonials.map((testimonial, index) => {
            const offset = index - currentIndex;
            return (
              <div
                key={index}
                className={`testimonial ${
                  offset === 0 ? "center" : offset > 0 ? "right" : "left"
                }`}
              >
                <div className="testimonial-header">
                  <div className="testimonial-name">{testimonial.name}</div>
                </div>
                <div className="testimonial-body">{testimonial.body}</div>
              </div>
            );
          })}
        </div>
        <span className="arrow" onClick={nextTestimonial} />
      </div>
    </div>
  );
}

export default TestimonialCarousel;
