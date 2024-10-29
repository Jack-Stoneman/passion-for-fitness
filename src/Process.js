import "./Process.css";
import { useState } from "react";
import { useTransition } from "react";
import PlanOne from "./PlanOne";
import PlanTwo from "./PlanTwo";
import slide1Photo from "./assets/gym-photos/DSC01059.jpg";
import slide2Photo from "./assets/gym-photos/DSC00848.jpg";
import slide3Photo from "./assets/gym-photos/DSC01117.jpg";
import slide4Photo from "./assets/gym-photos/DSC00678.jpg";
import slide5Photo from "./assets/gym-photos/DSC00950.jpg";

function Process() {
  const [slide, setSlide] = useState(0);
  const [isPending, startTransition] = useTransition();
  const slideCount = 5;

  const nextSlide = () => {
    startTransition(() => setSlide((slide + 1) % slideCount));
  };

  function prevSlide() {
    let newSlide;
    if (slide) {
      newSlide = (slide - 1) % slideCount;
    } else {
      newSlide = slideCount - 1;
    }
    startTransition(() => setSlide(newSlide));
  }

  return (
    <div id="process" className="section blue">
      <div className="process-title section-header">
        Creating a Great Experience For You
      </div>
      <div className="carousel">
        <span className="arrow" onClick={nextSlide} />
        <span className="arrow prev" onClick={prevSlide} />
        <div className="slides">
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">
              Comprehensive Consultation Process:
            </div>
            <div className="slide-content">
              <img src={slide1Photo}></img>
              <span>
                I'm a good listener and will spend time with you to understand
                your goals, medical history, injuries, lifestyle and fitness
                background. This ensures that your program is tailored precisely
                to your needs and aspirations.
              </span>
            </div>
          </div>
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">Finding Your Sweet Spot:</div>
            <div className="slide-content">
              <img src={slide2Photo}></img>
              <span>
                Your training experience is unique to you, and I’ll help you
                find the perfect balance between aesthetics (how you want to
                look), escapism (creating a space to focus and unwind),
                education (learning the &#39;why&#39; behind each movement), and
                entertainment (keeping things fun and engaging).
              </span>
            </div>
          </div>
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">Progress Reviews:</div>
            <div className="slide-content">
              <img src={slide3Photo}></img>

              <span>
                I’ll have regular check-ins to track your progress, identify
                what’s helping or hindering your journey, and adjust your plan.
                This ensures we stay focused, motivated, and aligned with your
                evolving fitness goals.
              </span>
            </div>
          </div>
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">Nutritional Intervention:</div>
            <div className="slide-content">
              <img src={slide4Photo}></img>
              <span>
                Together, we’ll assess your eating habits, review your food log,
                and choose simple, effective nutritional strategies that fit
                your lifestyle and are sustainable for the long term.
              </span>
            </div>
          </div>
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">
              Encouragement, Support, and Motivation:
            </div>
            <div className="slide-content">
              <img src={slide5Photo}></img>
              <span>
                I’m here to motivate you every step of the way, providing
                positive reinforcement and accountability through regular chats
                and reminders, helping you stay on track and unlock the best
                version of yourself.
              </span>
            </div>
          </div>
        </div>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}

export default Process;
