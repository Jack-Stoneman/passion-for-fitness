import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="inner-wrapper">
        <a className="navbar-title" href="#welcome">
          Passion For Fitness NZ
        </a>
        <div className="navbar-links">
          <a href="#specialisation" className="link-header">
            Specialisation
          </a>
          <a href="#about" className="link-header">
            About Me
          </a>
          <a href="#process" className="link-header">
            The Experience
          </a>
          <div className="options-wrapper">
            <span className="link-header">Personal Training</span>
            <div className="options">
              <a href="#personalTraining">1:1 In-Person Training</a>
              <a href="#onlineTraining">Online Training</a>
            </div>
          </div>
          <a href="#welcome" className="link-header">
            Testimonials
          </a>
          <a href="#contact" className="link-header">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
