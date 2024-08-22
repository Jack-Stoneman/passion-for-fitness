import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="inner-wrapper">
        <div className="navbar-title">Passion For Fitness NZ</div>
        <div className="navbar-links">
          <a href="#welcome">Welcome</a>
          <a href="#calendar">Contact</a>
          <a href="#about">About Me</a>
          <a href="#process">My Process</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
