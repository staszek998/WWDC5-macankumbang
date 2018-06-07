import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
  render() {
    if (this.props.which === "web") {
      return (
        <div className="projects__wrapper">
          <Project
            title="Project for web"
            description="Project description"
            href="#"
          />
          <Project
            title="Project for web"
            description="Project description"
            href="#"
          />
          <Project
            title="Project for web"
            description="Project description"
            href="#"
          />
        </div>
      );
    } else if (this.props.which === "print") {
      return (
        <div className="projects__wrapper">
          <Project
            title="Project for print"
            description="Project description"
            href="#"
          />
          <Project
            title="Project for print"
            description="Project description"
            href="#"
          />
          <Project
            title="Project for print"
            description="Project description"
            href="#"
          />
        </div>
      );
    } else if (this.props.which === "all") {
      return (
        <div className="projects__wrapper">
          <Project
            title="Project for print"
            description="Project description"
            href="#"
          />
          <Project
            title="Project for print"
            description="Project description"
            href="#"
          />
          <Project
            title="Project for print"
            description="Project description"
            href="#"
          />
          <Project
            title="Project for web"
            description="Project description"
            href="#"
          />
          <Project
            title="Project for web"
            description="Project description"
            href="#"
          />
          <Project
            title="Project for web"
            description="Project description"
            href="#"
          />
        </div>
      );
    }
  }
}

export default Projects;
