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
          🚨Join our 12-week OR 16 week 1:1 Body Transformation program @ Snap
          Fitness 24/7 in Hornby, Christchurch; Non-members get full access gym
          membership with no joining fee for the entire PT period; Enjoy
          personalised programs (Weights + Cardio + Boxfit + HIIT) for fat loss,
          muscle gain, core strength & mobility. Starting from $75 per session.
          <a href="#contact" className="enquiry-link">
            Enquire now!
          </a>
          🚨
        </div>
        <div
          className={`scrolling ${pause ? "pause" : ""}`}
          onMouseEnter={pauseBanner}
          onMouseLeave={playBanner}
        >
          🚨Join our 12-week OR 16 week 1:1 Body Transformation program @ Snap
          Fitness 24/7 in Hornby, Christchurch; Non-members get full access gym
          membership with no joining fee for the entire PT period; Enjoy
          personalised programs (Weights + Cardio + Boxfit + HIIT) for fat loss,
          muscle gain, core strength & mobility. Starting from $75 per session.
          <a href="#contact" className="enquiry-link">
            Enquire now!
          </a>
          🚨
        </div>
      </div>
    </div>
  );
}

export default Banner;
