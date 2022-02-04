import React from "react";
import { useRef, useState, useEffect } from "react";
import "./Live.css";

const Live = () => {
  const [timerDays, settimerDays] = useState("00");
  const [timerHours, settimerHours] = useState("00");
  const [timerMinutes, settimerMinutes] = useState("00");
  const [timerSeconds, settimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("Feb 6, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update time
        settimerDays(days);
        settimerHours(hours);
        settimerMinutes(minutes);
        settimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="all-live">
        <div className="live-container">
          <section className="live-con">
            <h1>Watch Our Live</h1>
            <h3>We Would be Live in</h3>

            <div className="live-count">
              <section>
                <h1>{timerDays}</h1>
                <p>Days</p>
              </section>
              <span>:</span>

              <section>
                <h1> {timerHours}</h1>
                <p>Hours</p>
              </section>
              <span>:</span>
              <section>
                <h1> {timerMinutes}</h1>
                <p>Minutes</p>
              </section>
              <span>:</span>

              <section>
                <h1> {timerSeconds}</h1>
                <p>Seconds</p>
              </section>
            </div>
            <section className="live-butt">
              <button className=" live-button live-you">Watch Live</button>
              <button className=" live-button live-fa">Watch Live</button>
            </section>
            <section className="live-links">
              <i class="fab fa-youtube"></i>
              <i class="fab fa-facebook-f"></i>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Live;
