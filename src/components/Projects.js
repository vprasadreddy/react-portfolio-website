import React from "react";
import developer from "../assests/developer.png";
import project from "../assests/project.png";
import Typed from "react-typed";

function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container projects-container mt-3">
          <h1 className="text-center">Projects</h1>
          <div className="row pb-3 projects-row">
            <div className="col-xs-12 col-sm-12 col-md-4 mb-3 justify-content-center align-items-center">
              <div
                className="card"
                style={{ width: "18rem", maxWidth: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src={project}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 mb-3 justify-content-center align-items-center">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={project}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 mb-3 justify-content-center align-items-center">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={project}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 mb-3 justify-content-center align-items-center">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={project}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 mb-3 justify-content-center align-items-center">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={project}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 mb-3 justify-content-center align-items-center">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={project}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
