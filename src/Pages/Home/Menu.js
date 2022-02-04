import react from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import menuData from "./MenuData";
import Slider1 from "../../assets/new.JPG";

import Slider3 from "../../assets/drama.JPG";
import Slider4 from "../../assets/supers.jpg";
import Slider5 from "../../assets/Money.jpg";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";
// import wave from "../../card.png";

import "./Menu.css";

const menuData = [
  {
    id: 1,
    image: Slider1,
    text: "I'M NEW",
    link: "/new",
  },
  { id: 2, image: Image2, text: "WATCH LIVE", link: "/live" },
  { id: 3, image: Slider3, text: "JOIN A DEPARTMENT", link: "/connect" },
  { id: 4, image: Slider4, text: "WHAT'S HAPPENING", link: "/happening" },
  { id: 5, image: Image4, text: "YOUTHS", link: "/" },

  { id: 6, image: Image1, text: "CONNECT", link: "/connect" },
  { id: 7, image: Image3, text: "SHARON ACADEMY", link: "/" },
  { id: 8, image: Slider5, text: "DONATE", link: "/give" },
  // { id: 9, image: Slider5, text: "YOUTH AND KIDS", link: "/" },
];

const MenuList = () => {
  return (
    <>
      <div className="ment">
        <br />
        <br />
        <br />
        <section className="MenuList">
          {menuData.map((data, index) => {
            // console.log(data);
            return (
              <>
                <Menu class="Menu-img" key={data.id} {...data}></Menu>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

const Menu = ({ image, text, link }) => {
  // const { image, title } = props.book;

  return (
    <>
      <div className="Menu">
        <Link to={link}>
          <img src={image} alt="" />
          {/* {console.log(image)} */}
          <h1>{text}</h1>
        </Link>
      </div>
    </>
  );
};

export default MenuList;

// const Show = styled.div`
//   background-image: url(${{ wave }} = wave);
// `;
