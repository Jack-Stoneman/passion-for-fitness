import "./TestimonialCarousel.css";
import Testimonial from "./Testimonial";
import testimonials from "./assets/testimonials.json";
import React, { useState } from 'react';

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length/2);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return <div id="testimonials" className="section blue">
    <div className="section-header">
      TESTIMONIALS
    </div>
    <div className="carousel-wrapper">
      <span className="arrow prev" onClick={prevTestimonial} />
      <div className="carousel" >
        {testimonials.map((testimonial, index) => {
          const offset = index - currentIndex;
          return (
            <div
              key={index}
              className={`testimonial ${offset === 0 ? 'center' : offset > 0 ? 'right' : 'left'}`}
              style={{
                transform: `scale(${offset === 0 ? 1.0 : 0.8})`, // Center testimonial is bigger
                filter: offset === 0 ? 'none' : 'blur(4px)', // Apply blur to non-center testimonials
              }}>
              <div className="testimonial-header">
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="job-title">{testimonial.job}</div>
              </div>
              <div className="testimonial-body">{testimonial.body}</div>
            </div>
          );
        })}
      </div>
      <span className="arrow" onClick={nextTestimonial} />
    </div>
  </div>;
}

export default TestimonialCarousel;
