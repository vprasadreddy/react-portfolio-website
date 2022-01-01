import React from "react";
import developer from "../assests/developer.png";
import Typed from "react-typed";

function AboutMe() {
  return (
    <>
      <section id="about-me">
        <div className="container aboutme-container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xs-12 col-sm-12 col-md-6 text-center">
              <h1 className="welcome-text text-secondary">Hey there! I'm </h1>
              <h1>Prasad</h1>
              <Typed
                className="lead text-primary"
                strings={[
                  "I am a SharePoint/React developer. I am passionate about web development.",
                ]}
                typeSpeed={40}
              />
              <p className="lead"></p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 text-center">
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
