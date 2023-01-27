import React from "react";
import developer from "../assests/developer.png";
import Typed from "react-typed";
import profile from "../assests/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import linkedin from "../assests/linkedin.png";
import github from "../assests/github.png";
import csharpcorner from "../assests/csharpcorner.jpeg";

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
                  "I am a SharePoint/React/Azure DevOps Engineer. I am passionate about web development and automation.",
                ]}
                typeSpeed={40}
              />
              <div className="row d-flex justify-content-center align-items-center">
                <a
                  className="m-2"
                  href="https://www.linkedin.com/in/varaprasadreddyj/"
                  target="_blank"
                  title="LinkedIn"
                >
                  <img src={linkedin} className="social-handles" />
                </a>
                <a
                  className="m-2"
                  href="https://github.com/vprasadreddy"
                  target="_blank"
                  title="Github"
                >
                  <img src={github} className="social-handles" />
                </a>
                <a
                  className="m-2"
                  href="https://www.c-sharpcorner.com/members/varaprasad-reddy7"
                  target="_blank"
                  title="C# Corner"
                >
                  <img src={csharpcorner} className="social-handles" />
                </a>
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
