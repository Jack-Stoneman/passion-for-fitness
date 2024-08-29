import "./About.css";
import aboutPhoto from "./assets/gallery-1.jpg";
import { useState } from "react";

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="about" className="section">
      <div className="section-header">ABOUT ME</div>
      <div className="about-content">
        <img src={aboutPhoto} className="about-photo" />
        <div className="about-text">
          <div className={"about-abbreviated" + (expanded ? " hidden" : "")}>
            This is a placeholder sentence for the shortened about section.
            <br />
            This is another placeholder sentence, the real content will come
            soon!
          </div>
          <div className={"about-paragraph" + (expanded ? "" : " hidden")}>
            I’ve been a sports enthusiast all my life and have dedicated many
            years to strength training, high-altitude trekking and living a fit
            and healthy lifestyle. I spent 3 years in the military, which
            instilled much discipline in my early life which I now cultivate
            through personal training and nutrition coaching. I hold a
            post-graduate degree from Oxford University and a Bachelor of
            Science from University of Kansas.
            <br />
            <br />
            My philosophy on keeping fit and eating right – this should become
            your lifestyle. If it isn’t, then make it your lifestyle. Find what
            you enjoy with fitness, find the balance and stick with that plan.
            Sustainability is so crucial for achieving long-term resilience.
          </div>
          <button
            className="expand"
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            Learn more about me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
