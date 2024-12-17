import "./Banner.css";
import React from "react";

function Banner() {
  const bannerText = `🚨Spots still available for our summer 1:1 Body Transformation Program
  at SnapFitness 24/7 in Hornby, Christchurch. Enjoy personalised
  workouts (Cardio + Weights + Boxfit + HIIT) for fat loss, muscle gain,
  core strength and mobility. Enquire now!🚨`;
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="scrolling">
          {bannerText}
        </div>
        <div className="scrolling">
          {bannerText}
        </div>
    </div>
    </div>
  );
}

export default Banner;
