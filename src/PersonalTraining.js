import "./PersonalTraining.css";
import { useState } from "react";
import { useTransition } from "react";
import aboutPhoto from "./assets/gallery-1.jpg";
import snap_logo from "./assets/snap_logo.png";
import snap_logo_white from "./assets/snap_logo_white.png";
import clock from "./assets/clock.svg";
import tape from "./assets/weight-loss.svg";
import muscle from "./assets/strength.svg";
import hornby from "./assets/Hornby.png";
import barrington from "./assets/Barrington.png";
import papanui from "./assets/hornby2.png";
import extra_photo from "./assets/gym-photos/DSC01031.jpg";

const faq = [
  {
    q: "Who is this 12-16 week transformation program for?",
    a: "This program is perfect for anyone ready to see real transformation from fat loss, muscle gain, core strengthening and better cardiovascular fitness.",
  },
  {
    q: "What does the free membership for non-members include?",
    a: "With 1:1 in-person training, non-members will gain access to SnapFitness 24/7 gym in Hornby.  Outside your 1:1 sessions, you'll have the flexibility to train at other SnapFitness 24/7 locations in Christchurch for the duration of your program.",
  },
  {
    q: "How are the exercise plans and programs created?",
    a: "I create customised monthly plans tailored to your goals, current fitness level, and progress. These will adjust as you move forward, ensuring you’re always challenged but supported.",
  },
  {
    q: "Will I get nutrition guidance?",
    a: "Yes! Alongside exercise plans, you’ll receive nutrition advice and tracking options to align with your fitness goals and ensure sustainable results.",
  },
  {
    q: "What if I can’t make a session?",
    a: "Life happens! We can reschedule with 24 hours notice, so you stay on track without missing out on valuable training time.",
  },
  {
    q: "Can I track my progress outside of sessions?",
    a: "Absolutely! The free fitness app allows you to monitor progress, track workouts, and stay connected, keeping you focused and engaged.",
  },
];

const pricing = [
  {
    type: "Members",
    price: 75,
    points: [
      "Minimum 2 sessions/week*",
      "60 mins per session",
      "Full package & coaching support",
      "Sessions held Mon-Sat @ Hornby",
    ],
  },
  {
    type: "Non-Members",
    price: 95,
    points: [
      "Full 24/7 access to our Hornby gym",
      "No joining fee**",
      "Minimum 2 sessions/week*",
      "60 mins per session",
      "Full package & coaching support",
    ],
  },
];

const trainingList = {
  "Customised monthly training programs":
    "Tailored to your goals and progress, updated each month for optimal results.",
  "Boxfit sessions included":
    "You have the option of incorporating Boxfit into your training sessions. It is an excellent way to improve your strength and coordination, relieve stress and increase your fitness levels.",
  "Monthly progress reviews":
    "Track your achievements, stay on course, and make adjustments as needed.",
  "Free fitness app":
    "Manage your workouts and track progress anywhere, anytime.",
  "Text reminders & support":
    "Stay motivated with regular check-ins and direct access to your trainer.",
  "Nutrition advice & tracking":
    "Receive guidance on sustainable nutrition to complement your fitness plan.",
  "Free gym membership access (for non-members)":
    "Non-members of Snap Fitness will enjoy full 24/7 access to our Hornby gym, which is located only 10-15 minutes from central Christchurch.",
};

const guidelines = [
  {
    title: "Weight Loss",
    centerCard: false,
    sessionsWeekly: "4",
    trainerSessions: "2 with trainer",
    independentSessions: "2 independent cardio sessions",
    duration: "12-16 weeks for significant progress",
    structure: [
      "Focus on strength training (2-3 days)",
      "Incorporate HIIT or cardio (2-3 days)",
      "Include nutritional guidance",
    ],
  },
  {
    title: "Muscle Gain",
    centerCard: false,
    sessionsWeekly: "4-5",
    trainerSessions: "2-3 with trainer",
    independentSessions: "2 independent strength sessions",
    duration: "16 weeks for muscle growth & recovery",
    structure: [
      "Resistance training (4-5 days)",
      "Lower cardio volume",
      "Adequate protein intake",
    ],
  },
  {
    title: "Body Recomposition",
    centerCard: true,
    sessionsWeekly: "4",
    trainerSessions: "2 with trainer",
    independentSessions: "2 independent strength/cardio sessions",
    duration: "16 weeks for visible results",
    structure: [
      "Strength training to build muscle (3-4 days)",
      "Cardio to burn fat (2-3 days)",
      "Nutrition focus on protein intake & calories",
    ],
  },
];

function PersonalTraining() {
  const [guideSlide, setGuideSlide] = useState(0);
  const [locationSlide, setLocationSlide] = useState(0);
  const [isPending, startTransition] = useTransition();
  const slideCount = 3;
  const [scrolled, setScrolled] = useState(false);

  const scrollContainer = (e) => {
    e.target.parentElement.scroll({
      top: e.target.parentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const nextSlide = (slide, slideSetter) => {
    startTransition(() => slideSetter((slide + 1) % slideCount));
  };

  function prevSlide(slide, slideSetter) {
    let newSlide;
    if (slide) {
      newSlide = (slide - 1) % slideCount;
    } else {
      newSlide = slideCount - 1;
    }
    startTransition(() => slideSetter(newSlide));
  }

  const handleClick = (e) => {
    let titleWrapper = e.currentTarget.childNodes[0],
      additionalInfo = e.currentTarget.childNodes[1];
    let height = additionalInfo.style.height;
    titleWrapper.classList.toggle("expanded");
    if (height) {
      additionalInfo.style.height = "";
    } else {
      additionalInfo.style.height = `${additionalInfo.scrollHeight}px`;
    }
  };
  return (
    <div id="personalTraining" className="section blue">
      <h1 className="section-header">
        In-Person Training (1:1 and 2:1 Sessions)
      </h1>
      <div className="header-logo">
        <img src={snap_logo_white} className="snap-logo large" />
        <div className="branch">Hornby</div>
      </div>
      <div className="pt-section top-banner">
        <div className="section-column top-banner">
          <div className="top-banner-text title">
            Available to all Christchurch residents
          </div>
          <div className="top-banner-text sub-title">
            Discounted rates include 24/7 gym access
          </div>
          <a href="#contact" className="top-banner-text sub-title">
            Book now!
          </a>
        </div>
      </div>
      <div className="pt-section wrap">
        <div className="section-column main-text">
          <div className="bold">
            Achieve real results with a proven program tailored just for you
          </div>
          <div>
            Transform your body and reach your fitness goals with my
            personalised 12-16 week body transformation program, now open to
            members AND non-members of SnapFitness gyms in Christchurch. Whether
            you're looking to lose weight, build muscle, or boost your strength,
            this all-inclusive program provides the tools, support, and
            flexibility you need.
          </div>
          <div className="bold">Your all-inclusive training package:</div>
          <ul className="welcome-list light">
            {Object.entries(trainingList).map(([key, value]) => (
              <li>
                <span className="bullet"></span>
                <span onClick={handleClick} className="bullet-text">
                  <span className="title-wrapper">
                    <strong>{key}</strong>
                    <span className="expand-arrow"></span>
                  </span>
                  <span className="additional-info">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="section-column">
          <div className="prices">
            {pricing.map((price) => (
              <div className="pricing-container">
                <div className="price-wrapper">
                  <div className="price">
                    <span className="amount">
                      <span className="amount-note">Starting from</span>$
                      {price["price"]}/session
                    </span>
                  </div>
                </div>
                <ul className="pricing-points">
                  <li>{price["type"]}</li>
                  {price["points"].map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>

                <img src={snap_logo} className="snap-logo" />
                <div className="price">
                  10% off your first month; Further 5% off referrals
                </div>
              </div>
            ))}
          </div>
          <div className="small-note">
            * It is recommended that clients commit to a minimum of 2 personal
            training sessions per week, supplemented by independent workouts or
            activity outside of sessions.
            <br />
            ** May include access card fee
          </div>
        </div>
      </div>
      <div className="pt-section">
        <div className="section-column row-wrap">
          <div className="pt-carousel-wrapper">
            <div className="bold">Recommended guidelines by goal:</div>
            <div className="carousel">
              <span
                className="arrow"
                onClick={() => {
                  nextSlide(guideSlide, setGuideSlide);
                }}
              />
              <span
                className="arrow prev"
                onClick={() => {
                  prevSlide(guideSlide, setGuideSlide);
                }}
              />
              <div className="slides">
                {guidelines.map((guideline) => (
                  <div
                    className="slide"
                    style={{ transform: `translateX(-${guideSlide * 100}%)` }}
                  >
                    <div
                      className={"guideline-card".concat(
                        guideline.centerCard ? " center" : ""
                      )}
                    >
                      <div className="bold">{guideline.title}</div>
                      <div className="guideline-section">
                        <div className="guideline-title">
                          {guideline.sessionsWeekly} sessions per week:
                        </div>
                        <ul className="guideline-points">
                          <li>{guideline.trainerSessions}</li>
                          <li>{guideline.independentSessions}</li>
                        </ul>
                      </div>
                      <div className="guideline-section">
                        <div className="guideline-title">Duration:</div>
                        <ul className="guideline-points">
                          <li>{guideline.duration}</li>
                        </ul>
                      </div>
                      <div className="guideline-section">
                        <div className="guideline-title">Structure:</div>
                        <ul className="guideline-points">
                          {guideline.structure.map((point) => (
                            <li>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="guideline-image-wrapper">
                        <img
                          src={guideline.title == "Muscle Gain" ? muscle : tape}
                          className="guideline-icon"
                        />
                        {guideline.centerCard ? (
                          <img src={muscle} className="guideline-icon" />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img className="training-image" src={extra_photo} />
        </div>
      </div>
      <div className="pt-section">
        <div className="section-column row-wrap">
          <div className="pt-carousel-wrapper">
            <div className="bold">Snap Fitness 24/7 location:</div>
            <div className="carousel">
              <span
                className="arrow"
                onClick={() => {
                  nextSlide(locationSlide, setLocationSlide);
                }}
              />
              <span
                className="arrow prev"
                onClick={() => {
                  prevSlide(locationSlide, setLocationSlide);
                }}
              />
              <div className="slides">
                <div
                  className="slide"
                  style={{ transform: `translateX(-${locationSlide * 100}%)` }}
                >
                  <div className="snap-location">
                    <img src={hornby} className="location-image" />
                    <div className="location-name">
                      <img src={snap_logo} />
                      <div className="branch">Hornby</div>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  style={{ transform: `translateX(-${locationSlide * 100}%)` }}
                >
                  <div className="snap-location">
                    <img src={papanui} className="location-image" />
                    <div className="location-name">
                      <img src={snap_logo} />
                      <div className="branch">Hornby</div>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  style={{ transform: `translateX(-${locationSlide * 100}%)` }}
                >
                  <div className="snap-location">
                    <img src={barrington} className="location-image" />
                    <div className="location-name">
                      <img src={snap_logo} />
                      <div className="branch">Hornby</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-carousel-wrapper">
            <div className="bold">Frequently Asked Questions:</div>
            <div className="faq-wrapper">
              <div className="faq" onScroll={handleScroll}>
                <div
                  className={`arrow ${scrolled ? "hide" : ""}`}
                  onClick={scrollContainer}
                ></div>
                {faq.map((point) => (
                  <div className="faq-point">
                    <div className="question">{point.q}</div>
                    <div className="answer">{point.a}</div>
                  </div>
                ))}
                <div className="faq-point">
                  <div className="question">How do I sign up?</div>
                  <div className="answer">
                    There are a few ways to sign up to my body transformation
                    program:
                    <ul>
                      <li>
                        Fill in the General Enquiry form at the bottom of the
                        webpage with your contact details and I will get in
                        touch with you within 48 hours
                      </li>
                      <li>
                        Under the Book A Call section, schedule a date and time
                        for a catch up, either via a phone call or Google video
                        call.
                      </li>
                      <li>
                        Send a DM on my Instagram page{" "}
                        <a
                          href="https://www.instagram.com/passionforfitness2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          target="__blank"
                        >
                          passionforfitness2024
                        </a>
                      </li>
                      <li>
                        Email me at{" "}
                        <a href="mailto:passionforfitness.nz@gmail.com">
                          passionforfitness.nz@gmail.com
                        </a>
                      </li>
                      <li>
                        Drop by SnapFitness 24/7 in Hornby, Christchurch during
                        operating hours and register your interest
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalTraining;
