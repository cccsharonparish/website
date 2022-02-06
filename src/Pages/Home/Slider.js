import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";
import Sliderdata from "./Slider-data";

import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = Sliderdata.length;

  // slideLength = 1 2 3
  // currentSlide = 0 1 2

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 8000;

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <Hero>
        <div className="slider">
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

          {Sliderdata.map((slide, index) => {
            console.log(slide.image);
            return (
              <>
                <div
                  className={index === currentSlide ? "slide current" : "slide"}
                  key={index}
                >
                  {index === currentSlide && (
                    <>
                      <div
                        className="slids"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                        }}
                      ></div>
                      <div className="content">
                        <h2>{slide.heading}</h2>
                        <p>
                          Celestial Church of Christ Sharon parish was birthed
                          on the 1st of May, 2003. the idea had been conceived a
                          few years back when the evangelist-in-charge, senior
                          evangelist S.O. Sofowora was having a personal
                          mediation in the word of God.
                        </p>
                        <hr />

                        <button className="--btn --btn-primary">
                          Read More
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </Hero>
    </>
  );
};

export default Slider;

const Hero = styled.div``;
