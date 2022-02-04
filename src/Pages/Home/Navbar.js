import React, { useState, useEffect } from "react";
import logo from "./sharon.png";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 988) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "CCC SHARON PARISH";
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/new" className="nav-links" onClick={closeMobileMenu}>
                I'm New
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/happening"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                What's Happening
              </Link>
            </li>

            <div className="dropdown">
              <li className="nav-item">
                <Link
                  to="/connect"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Get Connected
                </Link>
              </li>
              <div class="dropdown-content">
                <li>
                  <Link to="/join">Join a Department</Link>
                </li>
                <li>
                  <Link to="/">Youth</Link>
                </li>
                <li>
                  <Link to="/">Sharon Academy</Link>
                </li>
                {/* <li>
                  <Link to="/">Missions</Link>
                </li>
                <li>
                  <Link to="/">Find a Group Service Teams</Link>
                </li>
                <li>
                  <Link to="/">Missions</Link>
                </li> */}
              </div>
            </div>

            <div className="dropdown">
              <li className="nav-item">
                <Link
                  to="/media"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Media
                </Link>
              </li>
              <div class="dropdown-content">
                <li>
                  <Link to="/media">Images (Our Story)</Link>
                </li>
                <li>
                  <Link to="/media">Videos</Link>
                </li>
              </div>
            </div>

            <li className="nav-item">
              <Link to="/give" className="nav-links" onClick={closeMobileMenu}>
                Donate
              </Link>
            </li>
            <div className="dropdown">
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </div>

            <div className="dropdown">
              <li>
                <Link
                  to="/live"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Watch Live
                </Link>
              </li>
            </div>
            {button && <Button buttonStyle="btn--outline"> Watch Live</Button>}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
