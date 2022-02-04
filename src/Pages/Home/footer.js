import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footered">
          <div className="footer-section">
            <section className="first-foot">
              <h1>CCC Sharon Parish</h1>
              <h3>Pila-Oba Circuit Headquarter,</h3>
              <h4>
                35/36 Mobolaji Benson Street, Jumofak Bus stop, Igbo Oluwo,
                Ikorodu, Lagos.
              </h4>

              <ul>
                <li>Call: +234 802-307-2375</li>
                <li>Call: +234 802-382-0861</li>

                <div className="fa-fa-foot">
                  <a href="https://web.facebook.com/cccsharonparish">
                    <i class="fab fa-facebook-f"></i>
                  </a>

                  <a href="https://twitter.com/CCCSharonParish?">
                    <i class="fab fa-twitter"></i>
                  </a>

                  <a href="https://www.instagram.com/cccsharonparish/">
                    <i class="fab fa-instagram"></i>
                  </a>

                  <a href="https://www.youtube.com/c/CCCSharontv">
                    <i class="fab fa-youtube"></i>
                  </a>

                  <a href="https://audiomack.com/sharonparish">
                    <i class="fas fa-music"></i>
                  </a>
                </div>
              </ul>
            </section>
            <section className="second-foot">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/new">I'm New</Link>
                </li>
                <li>
                  <Link to="/happen">What's Happening</Link>
                </li>

                <li>
                  <Link to="/connect">Get Connected</Link>
                </li>
                <li>
                  <Link to="/give">Donate</Link>
                </li>
              </ul>
            </section>
          </div>
          <h2>Sharon Multimedia Limited, CCC Sharon Parish &copy; 2022. </h2>
        </div>
      </div>
    </>
  );
};

export default footer;
