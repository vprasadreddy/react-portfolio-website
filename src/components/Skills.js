import React from "react";
import percentages from "../assests/percentages.png";

function Skills() {
  return (
    <>
      <section id="skills">
        <h3 className="text-center pt-5">Skills</h3>
        <div className="skills-container mt-3">
          <div className="row justify-content-center align-items-center">
            <div className="col xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center">
              <img
                src={percentages}
                alt="percentages-logo"
                className="percentages-logo"
                style={{ width: "20rem", height: "20rem" }}
              />
            </div>
            <div
              className="col xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12"
              style={{ maxWidth: "50%" }}
            >
              <label htmlFor="exampleInputEmail1">HTML</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "90%", backgroundColor: "#74b9ff" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  9/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">CSS/Bootstrap</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#e17055" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  7/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">JavaScript</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#fdcb6e" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  7/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">jQuery</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#00b894" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  7/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">React</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#5f27cd" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  7/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">MongoDB</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#576574" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  6.5/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">Node/Express JS</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#c0392b" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  6/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">
                SharePoint(2010, 2013), Nintex Forms & Workflows, SharePoint
                Migration
              </label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "95%", backgroundColor: "#2980b9" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  9.5/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">
                SPFx, M365, SharePoint Online, Power Platform
              </label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%", backgroundColor: "#009432" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  8.5/10
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
