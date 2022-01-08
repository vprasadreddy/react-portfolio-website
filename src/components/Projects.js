import React from "react";
import developer from "../assests/developer.png";
import foodrecipeapp from "../assests/foodrecipeapp.png";
import project from "../assests/project.png";
import SPFxPnpCarousel from "../assests/SPFxPnpCarousel.png";
import SPFxProjectManagement from "../assests/SPFxProjectManagement.png";
import Typed from "react-typed";

function Projects() {
  return (
    <>
      <section id="projects">
        <h3 className="text-center pt-5">Projects</h3>
        <div className="projects2-container mt-3">
          <div className="row pb-3 projects-row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center">
              <div
                className="card m-2"
                style={{ width: "18rem", maxWidth: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src={foodrecipeapp}
                  alt="Card image cap"
                  style={{ height: "13rem" }}
                />
                <div className="card-body">
                  <h6 class="card-title">
                    Recipe Search Application using React
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="https://react-recipe-search-c90d0.firebaseapp.com/"
                    className="card-link"
                    target="_blank"
                  >
                    View App
                  </a>
                  <a
                    href="https://github.com/vprasadreddy/react-recipe-search"
                    className="card-link"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center">
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={project}
                  alt="Card image cap"
                  style={{ height: "13rem" }}
                />
                <div className="card-body">
                  <h6 class="card-title">CRUD Application using React</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    View Project
                  </a>
                  <a href="" className="card-link" target="_blank">
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center">
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={project}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h6 class="card-title">React Application</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    View Project
                  </a>
                  <a href="" className="card-link" target="_blank">
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center">
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={SPFxPnpCarousel}
                  alt="Card image cap"
                  style={{ height: "13rem" }}
                />
                <div className="card-body">
                  <h6 class="card-title">SPFx PnP Carousel</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="https://github.com/vprasadreddy/spfx-pnpcarousel-with-react"
                    className="card-link"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/vprasadreddy/spfx-pnpcarousel-with-react"
                    className="card-link"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center">
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={SPFxProjectManagement}
                  alt="Card image cap"
                  style={{ height: "13rem" }}
                />
                <div className="card-body">
                  <h6 class="card-title">
                    SPFx Project Management Application
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="https://github.com/vprasadreddy/spfx-project-management"
                    className="card-link"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/vprasadreddy/spfx-project-management"
                    className="card-link"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center">
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={project}
                  alt="Card image cap"
                  style={{ height: "13rem" }}
                />
                <div className="card-body">
                  <h6 class="card-title">
                    Recipe Search Application using React
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    View Project
                  </a>
                  <a href="" className="card-link" target="_blank">
                    Github Link
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
