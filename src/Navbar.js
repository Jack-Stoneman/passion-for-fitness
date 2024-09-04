import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="inner-wrapper">
        <a className="navbar-title" href="#welcome">
          Passion For Fitness NZ
        </a>
        <div className="navbar-links">
          <a href="#about" className="link-header">About Me</a>
          <div className="options-wrapper">
            <span className="link-header">Training Types</span>
            <div className="options">
              <a href="">1:1 Training</a>
              <a href="">Online Training</a>
            </div>
          </div>
          <div className="options-wrapper">
            <span className="link-header">Contact</span>
            <div className="options">
              <a href="">Book a Call</a>
              <a href="">Enquire Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
