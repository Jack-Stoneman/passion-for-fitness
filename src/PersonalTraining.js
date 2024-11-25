import "./PersonalTraining.css";
import aboutPhoto from "./assets/gallery-1.jpg";
import snap_logo from "./assets/snap_logo.png";

const pricing = [
  {
    type: "Members",
    price: 79,
    points: [
      "Minimum 2 sessions/week",
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
      "Minimum 2 sessions/week",
      "60 mins per session",
      "Full package & coaching support",
    ],
  },
];

function PersonalTraining() {
  return (
    <div id="personalTraining" className="section blue">
      <div className="section-header">1:1 TRAINING</div>
      <div className="pt-section">
        <div className="bold">
          Achieve real results with a proven program tailored just for you
        </div>
        <div>
          Transform your body and reach your fitness goals with my personalised
          12-16 week body transformation program, now open to members AND
          non-members of SnapFitness gyms in Christchurch. Whether you're
          looking to lose weight, build muscle, or boost your strength, this
          all-inclusive program provides the tools, support, and flexibility you
          need.
        </div>
      </div>
      {pricing.map((price) => (
        <div className="pricing-container">
          <img src={snap_logo} className="snap-logo" />
          <div className="price-wrapper">
            <div className="price">${price["price"]}</div>
            <div className="price-type">{price["type"]}</div>
          </div>
          <ul className="pricing-points">
            {price["points"].map((point) => (
              <div>{point}</div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PersonalTraining;
