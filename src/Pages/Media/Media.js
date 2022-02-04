import React from "react";
import "./Media.css";
import { MediaData } from "./Media-data";

const Media = () => {
  return (
    <div className="media-container">
      <div className="media-section">
        <h1>Gallery</h1>
        <div className="media-article">
          {MediaData.map((MediaD, index) => {
            const { image } = MediaD;
            return (
              <div>
                <img key={index} className="media-img" src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Media;
