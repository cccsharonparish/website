import React from "react";
import styled from "styled-components";

const Link =
  "https://www.boomplay.com/embed/75830881/MUSIC?colType=2&colID=35115667";

const Link2 =
  "https://audiomack.com/embed/sharonparish/song/the-right-counsel?background=1";
const Radio = () => {
  return (
    <RadioCon>
      <div className="firstlink-con">
        {" "}
        <iframe
          src={Link}
          className="firstLink"
          style={{ frameborder: "0" }}
        ></iframe>
      </div>

      <div className="secondlink-con">
        <iframe src={Link2} scrolling="no" className="secondlink"></iframe>
      </div>
    </RadioCon>
  );
};

export default Radio;

const RadioCon = styled.div`
  display: flex;
  margin: 30px 0 30px 0;
  gap: 30px;
  align-items: center;
  justify-content: center;

  .firstlink-con {
    margin-left: 20px;
  }

  .secondlink-con {
    margin-right: 20px;
  }
  .firstlink-con,
  .secondlink-con {
    display: flex;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 10px 30px rgba(56, 125, 255, 0.3);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.07));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.07));
    justify-content: center;
    align-items: center;
    padding: 30px 0 30px 0;
    width: 100%;
    @media (max-width: 900px) {
      flex-direction: column;
      width: 100%;
      margin: 0;
    }
  }

  iframe {
    display: flex;
    width: 90%;
    height: 300px;
    border-radius: 0.5rem;
    justify-content: center;

    align-items: center;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;
