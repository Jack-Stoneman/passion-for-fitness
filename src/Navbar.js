import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="inner-wrapper">
                <div className="navbar-title">
                    Passion For Fitness NZ
                </div>
                <div className="navbar-links">
                    <a>Welcome</a>
                    <a>Contact</a>
                    <a>About Me</a>
                    <a>My Process</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;