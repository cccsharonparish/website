import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import ErrorImg from "../../assets/error.jpg";

const Error = () => {
  return (
    <div className="error-con">
      <div className="error-con">
        <img src={ErrorImg} alt="" />
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
