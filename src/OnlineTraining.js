import "./OnlineTraining.css";
import startPhoto from "./assets/gym-photos/DSC00751.jpg";
import premiumPhoto from "./assets/gym-photos/DSC00726.jpg";

const packages = [
  {
    title: "Starter",
    imgSrc: startPhoto,
    price: 25,
    features: [
      "Customised workout program",
      "Monthly progress review",
      "Nutrition tweaks & guidelines",
      "Video/WhatsApp call support",
      "Free App access for all exercise videos",
      "Minimum 10 weeks",
    ],
  },
  {
    title: "Premium",
    imgSrc: premiumPhoto,
    price: 39,
    features: [
      "Customised workout program",
      "Weekly progress review",
      "Personalised nutrition plan",
      "Video/WhatsApp call support",
      "Free App access for all exercise videos",
      "Lifestyle coaching",
      "Minimum 10 weeks",
    ],
  },
];

function OnlineTraining() {
  return (
    <div id="onlineTraining" className="section">
      <h1 className="section-header">ONLINE TRAINING</h1>
      <a href="#contact" className="book-now">
        Book now!
      </a>
      <div className="online-packages">
        <div className="package">
          <div className="card">
            <div className="card-header">{packages[0].title}</div>
            <div className="card-price">From ${packages[0].price}/wk</div>
            <div className="card-img-wrapper">
              <img className="card-img" src={packages[0].imgSrc}></img>
            </div>
            <div className="features">
              {packages[0].features.map((feature) => (
                <div className="feature">{feature}</div>
              ))}
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
        <div className="package">
          <div className="card">
            <div className="card-header">{packages[1].title}</div>
            <div className="card-price">From ${packages[1].price}/wk</div>
            <div className="card-img-wrapper">
              <img className="card-img" src={packages[1].imgSrc}></img>
            </div>
            <div className="features">
              {packages[1].features.map((feature) => (
                <div className="feature">{feature}</div>
              ))}
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineTraining;
