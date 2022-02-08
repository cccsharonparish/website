import React from "react";

import "./New.css";
import mission from "../../assets/mission.jpg";
import event from "../../assets/event.jpg";

const New = () => {
  return (
    <>
      <div className="heart-container">
        <div className="new-heart"></div>
        <h1> WHO WE ARE</h1>

        <div className="hearted">
          <section className="first-side">
            <p>
              <strong>C</strong>elestial Church of Christ Sharon parish was
              birthed on the 1st of May, 2003. the idea had been conceived a few
              years back when the evangelist-in-charge, senior evangelist S.O.
              Sofowora was having a personal mediation in the word of God.
              reading through Isaiah chapter 65 took him through a spiritual
              journey of thoughts that climaxed at verse 10. Sharon is therefore
              a place created for people who really seek God and desire a true
              relationship with him.
            </p>
            <br />
            <p>
              God gave evangelist Sofowora a mandate to set up the parish for
              the benefit of several sheep (people) that have been scattered by
              cruel shepherds who instead of feeding the sheep went on to milk
              them dry. At the point of receiving the mandate, baba had less
              than a thousand naira with him and he was at a loss as to where to
              get the funds to acquire a large land mass to accommodate all the
              people.
            </p>
            <br />
            <p>
              However, God directed him to the town of Ikorodu where it all
              started. He was keen on establishing a church wherein the true
              ideologies of ccc will be portrayed. Eventually, he was able to
              purchase about 2 plots of land and the parish’s altar was laid by
              superior evangelist Falola on Thursday, 1st of May, 2003.
            </p>
          </section>
          <section className="second-side">
            <p>
              A major test came on the day the altar was laid. The swampy nature
              of the land, absence of a proper structure and the tiring effect
              of the day threatened the observance of the new moon service which
              should hold 10pm the same night. Nevertheless, three soldiers of
              Christ that included S/E Sofowora, S/E Majekodunmi and S/E Abraham
              Okuribido held the service together with a whole lot of
              mosquitoes, toads and other insects as the choristers.
            </p>
            <br />
            <p>
              Since 2003, Sharon has grown in leaps and bounds from a small
              swampy portion. The parish stands for true celestial worship and
              the testimonies generated so far has been so great. Sixteen years
              gone by and we have been able to create a big family globally as
              we also offer people the opportunity to join our services online.
              The new moon service became the first service to be held in the
              parish.
            </p>
          </section>
        </div>
        <div className="hearted-2-bg">
          <div className="hearted-2">
            <figure>
              <img src={mission} alt="" />
              <figcaption>
                <i>Senior Evangelist S.O. Sofowora</i>
              </figcaption>
            </figure>

            <p>
              <h3>MISSION STATEMENT</h3>
              In line with the mission of Celestial Church of Christ as a
              Christian body, the parish is fully committed to cleanse the heart
              of people from the corruptions of the world that they can be
              gathered as pure seedlings to the kingdom of God. The church
              therefore always concentrates on preaching about the kingdom of
              God and the righteousness.
            </p>
          </div>
        </div>
        <div className="hearted-3-bg">
          <div className="hearted-2 hearted-3">
            <ul>
              <li>Every 1st of may is the church’s anniversary</li>

              <li>
                The parish holds its juvenile harvest every first Sunday of the
                month of June.
              </li>

              <li>
                The parish holds its adult harvest every first Sunday of the
                month of November.
              </li>

              <li>
                Every first Friday of the month of July is ascribed as holy
                Mary’s day
              </li>
            </ul>
            <figure>
              <img src={event} alt="" />
              <figcaption>
                <i>CCC Sharon Parish</i>
              </figcaption>
            </figure>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default New;
