import "./About.css";
import aboutPhoto from "./assets/gym-photos/DSC01257.jpg";
import { useState } from "react";
import { useTransition } from "react";
import Gallery from "./Gallery";

const initialText = `Hi! I’m Ramesh and am a qualified personal trainer and fitness
                     leader based in Christchurch, New Zealand. I currently provide
                     in-person training and remote coaching to individuals across
                     different countries and time zones. Fitness has truly been my
                     passion for more than 20 years and the biggest satisfaction for
                     me is in helping others embark on a sustainable fitness journey
                     to lose weight, gain muscle, improve their health, feel better
                     or any other fitness goals.`,
  furtherText = [
    `I’ve been a sports enthusiast all my life and have dedicated
                many years to strength training, high-altitude trekking,
                mountaineering and living a fit and healthy lifestyle. I spent 3
                years in the military, which instilled good discipline and
                mental strength in my early life. These traits have enabled me
                to foster a mindset of perseverance and self-discipline in my
                clients.`,
    `My fitness qualifications include Level 4 and Level 5 NZ
                Certificates in Exercise and additional training certifications
                in Strength & Mobility, Power & Plyometrics,
                Kettlebells, and Trainer-Assisted Stretching. Outside of
                personal training, I hold post-graduate degrees from Oxford
                University, University of Sheffield, Bachelor of Science from
                University of Kansas and have enjoyed a successful corporate
                career in senior leadership roles.`,
    `My philosophy on keeping fit and eating right – this should
                become your lifestyle. If it isn’t, then make it your lifestyle.
                Find what you enjoy with fitness, find the balance and stick
                with that plan. I believe in exercise habits that last and
                sustainability is so crucial for achieving long-term resilience.`,
  ],
  qualifications = `test`;

function About() {
  const [slide, setSlide] = useState(0);
  const [isPending, startTransition] = useTransition();
  const slideCount = 3;
  const [showMore, setShowMore] = useState(false);

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

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="about" className="section">
      <div className="section-header">ABOUT ME</div>
      <div className="about-content">
        <Gallery
          images={[aboutPhoto, aboutPhoto, aboutPhoto]}
          interval={3000}
          width={500}
        />
        <div className="about-text">
          <div className="subtitle">Who am I?</div>
          <span>{initialText}</span>
          {showMore && (
            <span>
              {furtherText.map((text) => {
                return (
                  <span>
                    {text}
                    <br />
                    <br />
                  </span>
                );
              })}
            </span>
          )}
          <button className="hover-button" onClick={handleClick}>
            <span class="text">
              {showMore ? "Hide extra details" : "Learn more about me"}
            </span>
          </button>
        </div>
        <div className="qualifications">
          <div className="subtitle">Qualifications</div>
          <ul className="welcome-list">
            <li>
              <span className="bullet"></span>
              <span className="bullet-text">
                Level 4 & Level 5 NZ Certificate in Exercise (Fitness Leadership
                & Personal Training)
              </span>
            </li>
            <li>
              <span className="bullet"></span>
              <span className="bullet-text">Kettlebell Training</span>
            </li>
            <li>
              <span className="bullet"></span>
              <span className="bullet-text">Power & Plyometrics Training</span>
            </li>
            <li>
              <span className="bullet"></span>
              <span className="bullet-text">Strength Training</span>
            </li>
            <li>
              <span className="bullet"></span>
              <span className="bullet-text">
                Pre/Post Pregnancy Exercise Training
              </span>
            </li>
            <li>
              <span className="bullet"></span>
              <span className="bullet-text">
                Trainer-Assisted Stretching (TAS)
              </span>
            </li>
            <li>
              <span className="bullet"></span>
              <span className="bullet-text">
                Current First Aid Certificate & CPR Training
              </span>
            </li>
          </ul>
        </div>
        {/* <div className="carousel">
          <span className="arrow" onClick={nextSlide} />
          <span className="arrow prev" onClick={prevSlide} />
          <div className="slides">
            <div
              className="slide"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <div className="slide-content">
                {initialText}
                <button onClick={handleClick}></button>
                {showMore && (
                      <span>{furtherText.map(text => {
                        return (<span>{text}</span>)
                      })}</span>
                )}
              </div>
            </div>
            <div
              className="slide"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <div className="slide-header">More About Me:</div>
              <div className="slide-content">
                
              </div>
            </div>
            <div
              className="slide"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <div className="slide-header">PT Qualifications:</div>
              <div className="slide-content">
                I’ll have regular check-ins to track your progress, identify
                what’s helping or hindering your journey, and adjust your plan.
                This ensures we stay focused, motivated, and aligned with your
                evolving fitness goals.
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
