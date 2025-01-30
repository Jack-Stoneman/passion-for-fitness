import "./About.css";
import photo1 from "./assets/gym-photos/DSC01257.jpg";
import photo2 from "./assets/gym-photos/IMG_8451.jpg";
import photo3 from "./assets/gym-photos/DSC00707.jpg";
import photo4 from "./assets/gym-photos/DSC00699.jpg";
import photo5 from "./assets/gym-photos/IMG_8453.jpg";
import photo6 from "./assets/gym-photos/IMG_8407.jpg";
import extraPhoto from "./assets/gym-photos/DSC00805.jpg";
import { useState } from "react";
import { useTransition } from "react";
import Gallery from "./Gallery";
import dumbell from "./assets/dumbell.svg";

const initialText = `Hi! I'm Ramesh and I'm a qualified personal trainer and fitness leader based in Christchurch, New Zealand. 
                      I provide 1:1 gym training, 2:1 sessions plus nutrition and online coaching to individuals in 
                      NZ, Australia and other countries.  Fitness has truly been my passion for more than 25 years and 
                      the biggest satisfaction for me is in helping others embark on a sustainable fitness journey to lose 
                      weight, gain muscle, improve their health, feel fitter and eat better.`,
  furtherText = [
    `Hi! I'm Ramesh and I'm a qualified personal trainer and fitness leader based in Christchurch, New Zealand. 
                I provide 1:1 gym training, 2:1 sessions plus nutrition and online coaching to individuals in 
                NZ, Australia and other countries.  Fitness has truly been my passion for more than 25 years and 
                the biggest satisfaction for me is in helping others embark on a sustainable fitness journey to lose 
                weight, gain muscle, improve their health, feel fitter and eat better.`,
    `I’ve been a fitness and sports enthusiast all my life and have dedicated
                many years to strength training, high-altitude trekking,
                mountaineering and living a fit and healthy lifestyle. I spent 3
                years in the military, which instilled good discipline and
                mental strength in my early life. These traits have enabled me
                to foster a mindset of perseverance and self-discipline in my
                clients.`,
    `My fitness qualifications include Level 4 and Level 5 NZ
                Certificates in Exercise, Performance Nutrition Coach (Level 1 & 2), and additional training certifications
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
  const slideCount = 7;
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
          images={[photo1, photo2, photo3, photo4, photo5, photo6]}
          interval={3000}
          width={500}
          height={750}
        />
        <div className={`about-text ${showMore ? "expand" : ""}`}>
          <div className="dumbell-banner top">
            <div className="horizontal-line"></div>
            <img src={dumbell} className="banner-dumbell"></img>
            <div className="horizontal-line"></div>
          </div>
          <div className="subtitle">Who am I?</div>
          {showMore ? (
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
          ) : (
            <span>{initialText}</span>
          )}
          <button className="hover-button" onClick={handleClick}>
            <span className="text">
              {showMore ? "Hide extra details" : "Learn more about me"}
            </span>
          </button>
          <div className="dumbell-banner bottom">
            <div className="horizontal-line"></div>
            <img src={dumbell} className="banner-dumbell"></img>
            <div className="horizontal-line"></div>
          </div>
        </div>
        <div className="qualifications">
          <div className="dumbell-banner top">
            <div className="horizontal-line"></div>
            <img src={dumbell} className="banner-dumbell"></img>
            <div className="horizontal-line"></div>
          </div>
          <div className="section-header">Qualifications</div>
          <div className="qualifications-content">
            <ul className="welcome-list">
              <li>
                <span className="bullet"></span>
                <span className="bullet-text">
                  Level 4 & Level 5 NZ Certificate in Exercise (Fitness
                  Leadership & Personal Training)
                </span>
              </li>
              <li>
                <span className="bullet"></span>
                <span className="bullet-text">
                  Performance Nutrition Coach (Level 1 & 2)
                </span>
              </li>
              <li>
                <span className="bullet"></span>
                <span className="bullet-text">Kettlebell Training</span>
              </li>
              <li>
                <span className="bullet"></span>
                <span className="bullet-text">
                  Power & Plyometrics Training
                </span>
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
            <img src={extraPhoto} className="qualifications-img"></img>
          </div>
          <div className="dumbell-banner bottom">
            <div className="horizontal-line"></div>
            <img src={dumbell} className="banner-dumbell"></img>
            <div className="horizontal-line"></div>
          </div>
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
