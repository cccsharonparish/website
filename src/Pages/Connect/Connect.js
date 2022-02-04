import React from "react";
import "./Connect.css";
import Join from "../../assets/drama.JPG";
import Youth from "../../assets/image4.jpg";
import Kids from "../../assets/image3.jpg";
import { Link } from "react-router-dom";

const ConnectData = [
  {
    id: 1,
    image: Join,
    text: "JOIN A DEPARTMENT",
    link: "/join",
  },
  {
    id: 2,
    image: Youth,
    text: "YOUTHS",
    link: "/youths",
  },
  {
    id: 3,
    image: Kids,
    text: "SHARON ACADEMY",
    link: "/sharon-academy",
  },
];

const ConnectList = () => {
  return (
    <>
      <div className="ment">
        <br />
        <br />
        <br />
        <section className="ConnectList">
          {ConnectData.map((data, index) => {
            // console.log(data);
            return (
              <>
                <Connect class="Connect-img" key={data.id} {...data}></Connect>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

const Connect = ({ image, text, link }) => {
  // const { image, title } = props.book;

  return (
    <>
      <div className="Connect">
        <Link to={link}>
          <img src={image} alt="" />
          {/* {console.log(image)} */}
          <h1>{text}</h1>
        </Link>
      </div>
    </>
  );
};

export default ConnectList;
