import React from "react";
import developer from "../assests/developer.png";
import foodrecipeapp from "../assests/foodrecipeapp.png";
import project from "../assests/project.png";
import SPFxPnpCarousel from "../assests/SPFxPnpCarousel.png";
import SPFxProjectManagement from "../assests/SPFxProjectManagement.png";
import Typed from "react-typed";
import { projects } from "../assests/projects";

function Projects() {
  return (
    <>
      <section id="projects">
        <h3 className="text-center pt-5">Projects</h3>
        <div className="projects2-container mt-3">
          <div className="row pb-3 projects-row">
            {projects.map((project) => {
              return (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center">
                  <div
                    className="card project-card m-2"
                    style={{ width: "18rem", maxWidth: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src={project.image}
                      alt="Card image cap"
                      style={{ height: "13rem" }}
                    />
                    <div className="card-body">
                      <h6 class="card-title">{project.name}</h6>
                      <p className="card-text">{project.description}</p>
                      <a
                        href={project.applicationurl}
                        className="card-link"
                        target="_blank"
                      >
                        View App
                      </a>
                      <a
                        href={project.githuburl}
                        className="card-link"
                        target="_blank"
                      >
                        Github Link
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
