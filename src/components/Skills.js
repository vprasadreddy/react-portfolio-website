import React from "react";
import percentages from "../assets/percentages.png";

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
              <label htmlFor="exampleInputEmail1">Azure</label>
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
              <label htmlFor="exampleInputEmail1">Bicep</label>
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
              <label htmlFor="exampleInputEmail1">Azure YAML Pipelines</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%", backgroundColor: "#fdcb6e" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  8/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">Terraform</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%", backgroundColor: "#74b9ff" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  8/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">GitHub Actions</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%", backgroundColor: "#00b894" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  7.5/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">Jenkins</label>
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
              <label htmlFor="exampleInputEmail1">Docker</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#576574" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  7/10
                </div>
              </div>
              <label htmlFor="exampleInputEmail1">Kubernetes</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#c0392b" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  7/10
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
