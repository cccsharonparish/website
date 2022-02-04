import React from "react";
import { Links } from "react-router-dom";
import "./Happen.css";
const Happen = () => {
  return (
    <div>
      <div className="happen-container">
        <div className="img-happen"></div>
        <div className="happen-section">
          <div className="happen-article">
            <div className="happen-wrapper">
              <iframe
                width="300"
                height="180"
                src="https://www.youtube.com/embed/31rdSt0Twx0"
                allowFullScreen="allowFullScreen"
              ></iframe>
              <h1>4th Super Sunday</h1>
              <p>Jan 23, 2022</p>
            </div>
            <div className="happen-wrapper">
              <iframe
                width="300"
                height="180"
                src="https://www.youtube.com/embed/qxMV33FEsB8"
                allowFullScreen="allowFullScreen"
              ></iframe>
              <h1>3rd Super Sunday: Part 3</h1>
              <p>Jan 23, 2022</p>
            </div>
            <div className="happen-wrapper">
              <iframe
                width="300"
                height="180"
                src="https://www.youtube.com/embed/Nkfyz0Qpcho"
                allowFullScreen="allowFullScreen"
              ></iframe>
              <h1>3rd Super Sunday: Part 2</h1>
              <p>Jan 23, 2022</p>
            </div>
            <div className="happen-wrapper">
              <iframe
                width="300"
                height="180"
                src="https://www.youtube.com/embed/1b9Um08oRcQ"
                allowFullScreen="allowFullScreen"
              ></iframe>
              <h1>3rd Super Sunday: Part 1</h1>
              <p>Jan 23, 2022</p>
            </div>
            <div className="happen-wrapper">
              <iframe
                width="300"
                height="180"
                src="https://www.youtube.com/embed/I-eXXrc3dNQ"
                allowFullScreen="allowFullScreen"
              ></iframe>
              <h1>2nd Super Sunday</h1>
              <p>Jan 23, 2022</p>
            </div>
            <div className="happen-wrapper">
              <iframe
                width="300"
                height="180"
                src="https://www.youtube.com/embed/AzrnRZn7YYM"
                allowFullScreen="allowFullScreen"
              ></iframe>
              <h1>1st Super Sunday</h1>
              <p>Jan 23, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happen;
