import React from "react";
import "./About.css";
import me from "../../images/me.jpg";

const About = () => {
  return (
    <div className="d-flex align-items-center container">
      <div>
        <img className="w-100 h-auto mt-2" src={me} alt="" />
      </div>
      <div>
        <h2 className="fw-bold">S M Shahed Yousuf</h2>
        <p className="fs-5 ms-2">
          {" "}
          I want to be a good human being. Want to help as many people I can. I
          am a working as a Research Assistant in OsloMet University at Software
          development.
        </p>
      </div>
    </div>
  );
};

export default About;
