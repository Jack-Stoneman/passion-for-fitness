import "./Banner.css";
import { useState } from "react";

function Banner() {
  const [pause, setPause] = useState(false);

  const pauseBanner = () => {
    setPause(true);
  };

  const playBanner = () => {
    setPause(false);
  };

  return (
    <div className="banner-wrapper">
      <div className="container">
        <div
          className={`scrolling ${pause ? "pause" : ""}`}
          onMouseEnter={pauseBanner}
          onMouseLeave={playBanner}
        >
          🚨Spots still available for our summer 1:1 Body Transformation
          Program at SnapFitness 24/7 in Hornby, Christchurch. Enjoy
          personalised workouts (Cardio + Weights + Boxfit + HIIT) for fat loss,
          muscle gain, core strength and mobility. <a href="#contact" className="enquiry-link">Enquire now!</a>🚨
        </div>
        <div
          className={`scrolling ${pause ? "pause" : ""}`}
          onMouseEnter={pauseBanner}
          onMouseLeave={playBanner}
        >
          🚨Spots still available for our summer 1:1 Body Transformation
          Program at SnapFitness 24/7 in Hornby, Christchurch. Enjoy
          personalised workouts (Cardio + Weights + Boxfit + HIIT) for fat loss,
          muscle gain, core strength and mobility. <a href="#contact" className="enquiry-link">Enquire now!</a>🚨
        </div>
      </div>
    </div>
  );
}

export default Banner;
