import React from "react";
import styled from "styled-components";
import Val from "../../assets/vall.png";
import Val2 from "../../assets/val2.webp";
import Val3 from "../../assets/val3.png";
import Val4 from "../../assets/val4.jpg";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    image: Val,
    month: "Jan",
    day: "30",
    title: "A look at Love: Valentine",
    date: "Feb 13, 2022",
  },
  {
    id: 2,
    image: Val2,
    month: "Jan",
    day: "30",
    title: "New Moon Service",
    date: "Every First Thursday",
  },
  // {
  //   id: 3,
  //   image: Val3,
  //   month: "Jan",
  //   day: "30",
  //   title: "News Resolution",
  //   date: "Feb 18, 2022",
  // },
  // {
  //   id: 4,
  //   image: Val,
  //   month: "Jan",
  //   day: "30",
  //   title: "A look at Love: Valentine",
  //   date: "Feb 6, 2022",
  // },
  // {
  //   id: 5,
  //   image: Val3,
  //   month: "Jan",
  //   day: "30",
  //   title: "New Moon Service",
  //   date: "Jan 28, 2022",
  // },
  // {
  //   id: 6,
  //   image: Val2,
  //   month: "Jan",
  //   day: "30",
  //   title: "News Resolution",
  //   date: "Feb 18, 2022",
  // },
  // {
  //   id: 7,
  //   image: Val,
  //   month: "Jan",
  //   day: "30",
  //   title: "A look at Love: Valentine",
  //   date: "Feb 6, 2022",
  // },
  // {
  //   id: 8,
  //   image: Val3,
  //   month: "Jan",
  //   day: "30",
  //   title: "New Moon Service",
  //   date: "Jan 28, 2022",
  // },
  // {
  //   id: 9,
  //   image: Val4,
  //   month: "Jan",
  //   day: "30",
  //   title: "News Resolution",
  //   date: "Feb 18, 2022",
  // },
  // {
  //   id: 10,
  //   image: Val,
  //   month: "Jan",
  //   day: "30",
  //   title: "A look at Love: Valentine",
  //   date: "Feb 6, 2022",
  // },
];

const Event = () => {
  return (
    <>
      <AllGrid>
        <h1 className="head">UPCOMING EVENTS</h1>
        <GridList>
          {Data.map((data) => {
            const { image, month, day, title, date } = data;
            return (
              <Grids key={data.id} {...data}>
                <div>
                  <Link to="/">
                    <img className="grid-item" src={image} alt="" />
                  </Link>
                </div>
                <div className="tag">
                  <h6>
                    <Link className="title" to="/">
                      {title}
                    </Link>
                  </h6>
                  <h5>
                    <Link className="date" to="/">
                      {date}
                    </Link>
                  </h5>
                </div>
              </Grids>
            );
          })}
        </GridList>
        <div className="btn-see">
          <button type="button" className="btn-see-more">
            See More
          </button>
        </div>
      </AllGrid>
    </>
  );
};

export default Event;

const Grids = styled.div`
  display: grid;
  margin-top: 60px;
  cursor: pointer;
  font-family: cursive;
  overflow: hidden;
  justify-content: center;
  /* border: 1px solid #fff; */

  img {
    width: 280px;
    height: 160px;
    transition: all 0.2s linear;
    overflow: hidden;

    /* align-items: center;
    justify-content: center; */
    /* display: grid;
    z-index: -999; */
  }
  img:hover {
    transform: scale(1.07);
  }

  h5 .date {
    margin-top: 20px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  .title {
    font-size: 18px;
    color: #fff;

    /* position: absolute; */
  }
`;

const GridList = styled.div`
  max-width: 1170px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  align-items: center;
  justify-content: center;

  @media (max-width: 1165px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 90vw;
    margin: 0 auto;
  }
  @media (max-width: 970px) {
    grid-template-columns: 1fr 1fr;
    max-width: 90vw;
    margin: 0 auto;
  }
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    max-width: 90vw;
    margin: 0 auto;
  } ;
`;

const AllGrid = styled.div`
  background-color: #00004d;

  .head {
    padding-top: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    /* text-align: center; */
    color: #fff;
    font-size: 45px;
    font-family: cursive;
    @media (max-width: 464px) {
      font-size: 38px;
    }
    @media (max-width: 389px) {
      font-size: 32px;
    }
  }

  .btn-see-more {
    background-color: #000066;
    border: 1px solid #fff;
    display: flex;
    flex: auto;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    color: #fff;
    align-content: center;
    align-self: center;
    flex-direction: column;
    font-size: 16px;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.2s ease-in;

    @media (max-width: 900px) {
    }
  }

  .btn-see-more:hover {
    background-color: #fff;
    color: #000066;
  }

  .btn-see {
    display: flex;
    justify-content: center;
    max-width: 15%;
    margin: auto;
    padding-bottom: 40px;
    padding-top: 40px;

    @media (max-width: 900px) {
      max-width: 20%;
    }

    @media (max-width: 450px) {
      max-width: 25%;
    }
  }
`;
