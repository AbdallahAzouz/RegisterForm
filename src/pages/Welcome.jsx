import React from "react";
import "../styles/Welcome.scss";
import welcomeImg from "../assets/Image Placeholder (1).png";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__wrapper">
        <div className="image">
          <img src={welcomeImg} alt="" />
        </div>
        <div className="content">
          <h1>Welcome</h1>
          <p>We're glad you're here! Sign up to start</p>

          <button className="btn1">
            <Link to="/register">Get Started</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
