import React from "react";
import styled from "styled-components";
import This from "./card.jpg";
import "./card.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-wrapper">
          <h2>
            Stay connected with <br /> Celestial Church of Christ <br /> Sharon
            Parish
          </h2>
          <br />
          <Link to="/happening">
            {" "}
            <button class="probtn">Digital Program </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;

const Section = styled.div``;
