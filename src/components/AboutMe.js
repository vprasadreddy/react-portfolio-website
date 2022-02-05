import React from "react";
import developer from "../assests/developer.png";
import Typed from "react-typed";
import profile from "../assests/profile.png";
import "animate.css";

function AboutMe() {
  return (
    <>
      <section id="about-me">
        <div className="container mt-5 aboutme-container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              <div className="text-center animate__animated animate__fadeInDown animate__slow">
                <img
                  src={profile}
                  className="profile-pic"
                  alt="profile-pic"
                  style={{}}
                />
              </div>
              <h1 className="welcome-text text-secondary">Hey there! I'm </h1>
              <h1 className="title">Prasad</h1>
              <Typed
                className="lead text-primary about-me-text"
                strings={[
                  "I am a SharePoint/React developer. I am passionate about web development.",
                ]}
                typeSpeed={40}
              />
              <div className="row d-flex justify-content-center align-items-center">
                <button className="btn btn-primary m-1">hel</button>
                <button className="btn btn-primary m-1">hel</button>
                <button className="btn btn-primary m-1">hel</button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-center animate__animated animate__fadeInUp animate__slow">
              <img
                src={developer}
                alt="developer-logo"
                className="developer-logo"
                style={{ width: "18.75rem", height: "18.75rem" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
