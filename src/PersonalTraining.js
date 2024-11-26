import "./PersonalTraining.css";
import aboutPhoto from "./assets/gallery-1.jpg";
import snap_logo from "./assets/snap_logo.png";
import clock from "./assets/clock.svg";
import tape from "./assets/tape.svg";
import muscle from "./assets/muscle.svg";

const pricing = [
  {
    type: "Members",
    price: 79,
    points: [
      "Minimum 2 sessions/week*",
      "60 mins per session",
      "Full package & coaching support",
      "Train at Hornby, Papanui or Barrington gyms",
    ],
  },
  {
    type: "Non-Members",
    price: 95,
    points: [
      "Full 24/7 access to our Hornby gym",
      "No joining fee",
      "Minimum 2 sessions/week*",
      "60 mins per session",
      "Full package & coaching support",
    ],
  },
];

const trainingList = {
  "Custom monthly exercise plans & programs":
    "Tailored to your goals and progress, updated each month for optimal results.",
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
    sessionsWeekly: "4",
    trainerSessions: "2 with trainer",
    independentSessions: "2 independent cardio sessions",
    duration: "12-16 weeks",
    structure: [
      "Focus on strength training (2-3 days)",
      "Incorporate HIIT or cardio (2-3 days)",
      "Include nutritional guidance",
    ],
  },
  {
    title: "Muscle Gain",
    sessionsWeekly: "4-5",
    trainerSessions: "2-3 with trainer",
    independentSessions: "2 independent strength sessions",
    duration: "16 weeks",
    structure: [
      "Resistance training (4-5 days)",
      "Lower cardio volume",
      "Adequate protein intake",
    ],
  },
  {
    title: "Body Recomposition",
    sessionsWeekly: "4",
    trainerSessions: "2 with trainer",
    independentSessions: "2 independent strength/cardio sessions",
    duration: "16 weeks",
    structure: [
      "Strength training to build muscle (3-4 days)",
      "Cardio to burn fat (2-3 days)",
      "Nutrition focus on protein intake & calories",
    ],
  },
];

function PersonalTraining() {
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
      <div className="section-header">1:1 TRAINING</div>
      <div className="pt-section">
        <div className="section-column">
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
                  <span class="title-wrapper">
                    <strong>{key}</strong>
                    <span class="expand-arrow"></span>
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
                    <span className="amount">${price["price"]}/</span>session
                  </div>
                </div>
                <ul className="pricing-points">
                  <li>{price["type"]}</li>
                  {price["points"].map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
                <img src={snap_logo} className="snap-logo" />
              </div>
            ))}
          </div>
          <div className="small-note">
            * For meaningful progress, clients should commit to a minimum of 2
            personal training sessions per week, supplemented by independent
            workouts or activity outside of sessions.
          </div>
        </div>
      </div>
      <div className="pt-section">
        <div className="section-column">
          <div className="training-guidelines">
            {guidelines.map((guideline) => (
              <div className="guideline-card">
                <div className="left-column">
                  <div className="bold">{guideline.title}</div>
                  <div className="guideline-section">
                    <div className="guideline-title">
                      {guideline.sessionsWeekly} sessions per week
                    </div>
                    <div className="guideline-points">
                      <div>{guideline.trainerSessions}</div>
                      <div>{guideline.independentSessions}</div>
                    </div>
                  </div>
                </div>
                <div className="duration-wrapper">
                  <img src={tape} className="clock-icon" />
                  <div className="duration-text">{guideline.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalTraining;
