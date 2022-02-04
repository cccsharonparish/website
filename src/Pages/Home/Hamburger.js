import styled from "styled-components";
import react from "react";
import logo from "./logo.svg";

import React from "react";
import { useState } from "react";

const Hamburger = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <Section>
      <div>
        <Hamburg IsOpen={IsOpen} onClick={() => setIsOpen(!IsOpen)}>
          <div className="span"></div>
          <div className="span"></div>
          <div className="span"></div>
        </Hamburg>

        <Nav IsOpen={IsOpen}>
          <li>
            <a href="">I'm New&gt;</a>
          </li>
          <li>
            <a href=""> What Happening &gt;</a>
          </li>
          <li>
            <a href="">Get Connected &gt;</a>
          </li>
          <li>
            <a href="">Contact US &gt;</a>
          </li>
          <li>
            <a href="">Media &gt;</a>
          </li>
          <li>
            <a href=""> Give&gt;</a>
          </li>
          <li>
            <a href="">Resource&gt;</a>
          </li>
        </Nav>
      </div>
    </Section>
  );
};

export default Hamburger;

const Section = styled.div`
  display: flex;
  overflow: none;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Hamburg = styled.div`
  position: fixed;
  top: 20px;
  z-index: 999;
  right: 20px;
  cursor: pointer;

  .span {
    background-color: #000;
    width: 2rem;
    height: 0.3rem;
    border-radius: 0.5rem;
    margin-bottom: 0.3rem;
    transition: all 0.2s ease-in-out;
    transform: translateY(45deg);
    /* transform: ${({ IsOpen }) =>
      IsOpen ? "translate(0deg)" : "translateY(90deg)"}; */
  }

  li {
    top: 50%;
    padding-top: 10px;
  }
`;

const Nav = styled.div`
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  z-index: 99;
  transition: 0.3s ease-in-out;
  transform: ${({ IsOpen }) =>
    IsOpen ? "translate(-50%, -50%)" : "translateY(-200%)"};
`;
