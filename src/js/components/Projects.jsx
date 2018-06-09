import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
  render() {
    if (this.props.screen === "phone") {
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
    } else if (this.props.screen === "tablet") {
      if (this.props.which === "web") {
        return (
          <div className="projects__wrapper">
            <div className="row">
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
            <div className="row">
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
          </div>
        );
      } else if (this.props.which === "print") {
        return (
          <div className="projects__wrapper">
            <div className="row">
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
            <div className="row">
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
          </div>
        );
      } else if (this.props.which === "all") {
        return (
          <div className="projects__wrapper">
            <div className="row">
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
            <div className="row">
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
            </div>
            <div className="row">
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
            <div className="row">
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
            </div>
          </div>
        );
      }
    } else if (this.props.screen === "desktop") {
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
            <div className="row">
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
            <div className="row">
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
          </div>
        );
      }
    }
  }
}

export default Projects;
