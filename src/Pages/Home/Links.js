import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="links-container">
      <div className="follow">
        <h1>FOLLOW AND SUBSCRIBE</h1>
        <div className="fa-fa">
          <a href="https://web.facebook.com/cccsharonparish">
            <i class="fab fa-facebook-square"></i>
          </a>

          <a href="https://twitter.com/CCCSharonParish?">
            <i class="fab fa-twitter-square"></i>
          </a>

          <a href="https://www.instagram.com/cccsharonparish/">
            <i class="fab fa-instagram-square"></i>
          </a>

          <a href="https://www.youtube.com/c/CCCSharontv">
            <i class="fab fa-youtube-square"></i>
          </a>

          <a href="https://audiomack.com/sharonparish">
            <i class="fas fa-music"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
