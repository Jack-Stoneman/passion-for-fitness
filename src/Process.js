import "./Process.css";
import { useState } from "react";
import { useTransition } from "react";

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
    <div id="process">
      <div className="process-title section-header">STEP BY STEP PROCESS</div>
      <div className="carousel">
        <span className="arrow" onClick={nextSlide} />
        <span className="arrow prev" onClick={prevSlide} />
        <div className="slides">
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">Step 1 - Consultation</div>
            <div className="slide-content">
              In this initial step, we will discuss what you are hoping to
              achieve with personal training...
            </div>
          </div>
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">Step 2 - Plan</div>
            <div className="slide-content">
              Next we have to figure out the general plan with your workout
              routine. Some of the things we might discuss are workout frequency
              and intensity...
            </div>
          </div>
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">Step 3 - Exercise Selection</div>
            <div className="slide-content">
              In this step, we will work on the actual exercises you will be
              performing during your workout, including the number of sets and
              the number of reps in each set.
            </div>
          </div>
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">Step 4 - Induction</div>
            <div className="slide-content">
              The induction process will involve me explaining how the personal
              training sessions will work, including safety brieifings etc...
            </div>
          </div>
          <div
            className="slide"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <div className="slide-header">Step 5 - Workout Plan Handout</div>
            <div className="slide-content">
              You will come away from this step with a personalised workout plan
              that I will write for you. Below is an example of how it might
              look.
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
