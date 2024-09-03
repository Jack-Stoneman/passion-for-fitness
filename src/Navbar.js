import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="inner-wrapper">
        <a className="navbar-title" href="#welcome">
          Passion For Fitness NZ
        </a>
        <div className="navbar-links">
          <a href="#about">About Me</a>
          <a href="#process">
            Training Types
            <div className="sub-options">
              <a href="">1:1 Training</a>
              <a href="">Online Training</a>
            </div>
          </a>
          <a href="#calendar">
            Contact
            <div className="sub-options">
              <a href="">Book a Call</a>
              <a href="">Enquire Now</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
