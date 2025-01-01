import "./OnlineTraining.css";
import startPhoto from "./assets/gym-photos/DSC00751.jpg";
import premiumPhoto from "./assets/gym-photos/DSC00726.jpg";

const packages = [
  {
    title: "Starter",
    imgSrc: startPhoto,
    price: 29,
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
    price: 49,
    features: [
      "Customised workout program",
      "Fortnightly progress review",
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
      <div className="section-header">ONLINE TRAINING</div>
      <div className="book-now">
        <button href="#contact" className="hover-button red">
          <span className="text">Book now!</span>
        </button>
      </div>
      <div className="online-packages">
        <div className="package">
          <div className="card">
            <div className="price-badge">
              <div className="price-badge-text">
                ${packages[0].price}
                <br></br>/wk
              </div>
            </div>
            <div className="card-header">{packages[0].title}</div>
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
            <div className="price-badge">
              <div className="price-badge-text">
                ${packages[1].price}
                <br></br>/wk
              </div>
            </div>
            <div className="card-header">{packages[1].title}</div>
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
