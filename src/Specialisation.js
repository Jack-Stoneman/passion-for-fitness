import "./Specialisation.css";
import mobilityIcon from "./assets/mobility.svg";
import strengthIcon from "./assets/strength.svg";
import nutritionIcon from "./assets/nutrition.svg";
import weightLossIcon from "./assets/weight-loss.svg";

let content = {
  "Weight loss & losing body fat": {
    "Personalised weight loss plans":
      "Customised fitness & nutrition strategies tailored to your body type, lifestyle and goals",
    "Progress tracking & accountability":
      "Closely monitoring and adjusting your plan as needed to keep you on track to reach your milestones",
    "Safe & effective workouts":
      "Designed to help you burn fat safely and efficiently at your own pace",
    "Ongoing support":
      "Being there for you every step of the way to guide you with healthier habits and providing continuous encouragement",
  },
  "Building lean muscle & strength": {
    "Customised strength programmes":
      "Ensuring you build lean muscle and improve overall strength based on your current training abilities and goals",
    "Focus on form and technique":
      "Guiding you on proper form and technique to ensure youminimise risk of injury and maximise results",
    "Progressive overload":
      "Gradual increases in intensity and resistance, helping you consistently grow stronger",
    "Functional strength training":
      "Improving your everyday functional strength and how you move and feel in daily life",
  },
  "Nutritional coaching & support": {
    "Tailored nutrition plans":
      "Personalised advice that complements your training for optimal performance",
    "Macro and micro nutrient guidance":
      "Ensuring you get the right mix of proteins, fats, carbs and micronutrients for a more balanced diet",
    "Sustainable habits":
      "Focusing on long-term nutritional strategies, not quick fixes",
    "Continuous feedback":
      "Ongoing feedback and adjustments based on your progress to reach your nutrition goals",
  },
  "Over 50’s mobility & stability training": {
    "Tailored mobility programmes":
      "Specific exercises designed to improve your, flexibility, stability and balance",
    "Safe & supportive training":
      "Prioritising low impact exercises that enhance mobility and strength without overloading your joints",
    "Posture & balance improvement":
      "Guiding you through exercises that focus on posture correction and balance, reducing your risk of falls",
    "Functional movement focus":
      "Workouts designed to help you perform daily tasks with ease, helping you maintain confidence in your body",
  },
};

let icons = {
  "Weight loss & losing body fat": weightLossIcon,
  "Building lean muscle & strength": strengthIcon,
  "Nutritional coaching & support": nutritionIcon,
  "Over 50’s mobility & stability training": mobilityIcon,
};

function Specialisation() {
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
    <div id="specialisation" className="section">
      <div className="section-header">Areas of Specialty</div>
      <div className="introduction-grid">
        <div className="grid-wrapper">
          {Object.entries(content).map(([key, value]) => (
            <div>
              <div className="welcome-icon">
                <img src={icons[key]} />
              </div>
              <div className="subsection-header">{key}</div>
              <ul className="welcome-list">
                {Object.entries(value).map(([key, value]) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specialisation;
