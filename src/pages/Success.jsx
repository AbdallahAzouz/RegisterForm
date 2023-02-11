import React from "react";
import "../styles/Success.scss";
import successImg from "../assets/Image Placeholder (5).png";

const Success = () => {
  return (
    <section className="success">
      <div className="success__wrapper">
        <div className="image">
          <img src={successImg} alt="" />
        </div>
        <div className="content">
          <h1>Successfully Logged In</h1>
          <p>User@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Success;
