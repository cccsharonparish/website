import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

const Result = () => {
  return <p>Your message has been sent we would contact you</p>;
};

const Join = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0kwsbk8",
        "template_wnt0l9j",
        e.target,
        "user_IcbNhL0anLEBWBhUO1YzK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <div className="join-container">
      <div className="join-section">
        <div className="join-form">
          <form action="" onSubmit={sendEmail}>
            <h2>JOIN A DEPARTMENT</h2>
            <div className="ins texts">
              <span>First Name: </span>
              <input
                type="text"
                className="all-input f-name"
                name="f_name"
                placeholder="Enter your First Name..."
                required
              />
            </div>
            <div className="ins texts">
              {" "}
              <span>Last Name: </span>
              <input
                type="text"
                className="all-input s-name"
                name="l_name"
                placeholder="Enter your Last Name...."
                required
              />
            </div>

            <div className="ins">
              {" "}
              <input type="radio" name="gender" value="male" />
              <span>Male</span>
            </div>
            <div className="ins">
              {" "}
              <input type="radio" name="gender" value="female" />
              <span>Female</span>
            </div>
            <div className="ins">
              {" "}
              <input type="radio" name="gender" value="other" />
              <span>Other</span>
            </div>

            <div className="ins texts">
              {" "}
              <span>Email:</span>
              <input
                type="email"
                className="all-input email"
                name="e_mail"
                placeholder="Enter your Email..."
                required
              />
            </div>
            <div className="ins texts">
              {" "}
              <span>Phone No</span>
              <input
                type="tel"
                name="phone_number"
                placeholder="Enter Your Phone Number..."
              />
            </div>
            <div className="ins texts">
              {" "}
              <span>Department:</span>
              <select name="department">
                <option value="Sharon Choir">Sharon Choir</option>
                <option value="Sidesmen/Sideswomen">Sidesmen/Sideswomen</option>
                <option value="Protocol">Protocol</option>
                <option value="Protocol">Good Women</option>
                <option value="Protocol">Men of Valor</option>
                <option value="Sharon Media">Sharon Media</option>
                <option value="Sharon Media">Welfare</option>
                <option value="Writer ">Writer </option>
                <option value="Sharon Academy Teachers">
                  Sharon Academy Teachers
                </option>
                <option value="Youth">Youth</option>
                <option value="Evangelism Group">Evangelism Group</option>
              </select>
            </div>
            {/* <div className="ins texts">
              {" "}
              <span>A Picture of You</span>
              <input type="file" className="input-img" name="image" required />
            </div> */}
            <div className="ins texts">
              <span>Your Skill: </span>
              <input
                type="text"
                className="all-input skill"
                name="skill"
                placeholder="Enter your Skill..."
                required
              />
            </div>
            <div className="ins ">
              {" "}
              <span>Reason for Interest</span>
              <textarea
                type="text"
                name="message"
                placeholder="Enter your Reason for Interest..."
                required
              />
            </div>

            <div className="ins texts">
              <span>
                <i>
                  Would you abide by the rules and regulations of the church?
                </i>
              </span>
            </div>
            <div className="ins">
              {" "}
              <input type="radio" name="Option" value="Yes" />
              <span>Yes</span>
            </div>
            <div className="ins">
              {" "}
              <input type="radio" name="Option" value="No" />
              <span>No</span>
            </div>
            <br />
            <br />

            <button
              className="submit"
              type="submit"
              value="submit"
              name="submit"
            >
              Submit
            </button>
            <br />
            <br />
            <div className="row">{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
