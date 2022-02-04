import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <form action="">
        <div className="con-container">
          <div className="con-coned">
            <div className="con-con">
              <div className="con-first">
                <h1>Contact Us</h1>
                <span>Full Name: </span>
                <input type="text" name="f_name" />
                <span>Phone Number: </span>
                <input type="tel" name="p_num" />
                <span>Enter Email: </span>
                <input type="email" name="e_mail" />
              </div>
              <div className="con-sec">
                <span>Message: </span>
                <textarea name="message" id="" cols="20" rows="10"></textarea>
                <button className="con-but" type="submit" name="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
