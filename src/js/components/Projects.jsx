import React, { Component } from "react";
import Project from "./Project";

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sequi doloribus qui voluptatibus itaque, iusto repudiandae nihil exercitationem maiores ratione dolor autem illo vero? Dolores blanditiis error quisquam recusandae labore!`;

class Projects extends Component {
  render() {
    if (this.props.screen === "phone") {
      if (this.props.which === "web") {
        return (
          <div className="projects__wrapper">
            <Project title="Project for web" description={lorem} href="#" />
            <Project title="Project for web" description={lorem} href="#" />
            <Project title="Project for web" description={lorem} href="#" />
          </div>
        );
      } else if (this.props.which === "print") {
        return (
          <div className="projects__wrapper">
            <Project title="Project for print" description={lorem} href="#" />
            <Project title="Project for print" description={lorem} href="#" />
            <Project title="Project for print" description={lorem} href="#" />
          </div>
        );
      } else if (this.props.which === "all") {
        return (
          <div className="projects__wrapper">
            <Project title="Project for print" description={lorem} href="#" />
            <Project title="Project for print" description={lorem} href="#" />
            <Project title="Project for print" description={lorem} href="#" />
            <Project title="Project for web" description={lorem} href="#" />
            <Project title="Project for web" description={lorem} href="#" />
            <Project title="Project for web" description={lorem} href="#" />
          </div>
        );
      }
    } else if (this.props.screen === "tablet") {
      if (this.props.which === "web") {
        return (
          <div className="projects__wrapper">
            <div className="row">
              <Project title="Project for web" description={lorem} href="#" />
              <Project title="Project for web" description={lorem} href="#" />
            </div>
            <div className="row">
              <Project title="Project for web" description={lorem} href="#" />
              <Project title="Project for web" description={lorem} href="#" />
            </div>
          </div>
        );
      } else if (this.props.which === "print") {
        return (
          <div className="projects__wrapper">
            <div className="row">
              <Project title="Project for print" description={lorem} href="#" />
              <Project title="Project for print" description={lorem} href="#" />
            </div>
            <div className="row">
              <Project title="Project for print" description={lorem} href="#" />
              <Project title="Project for print" description={lorem} href="#" />
            </div>
          </div>
        );
      } else if (this.props.which === "all") {
        return (
          <div className="projects__wrapper">
            <div className="row">
              <Project title="Project for print" description={lorem} href="#" />
              <Project title="Project for print" description={lorem} href="#" />
            </div>
            <div className="row">
              <Project title="Project for print" description={lorem} href="#" />
              <Project title="Project for web" description={lorem} href="#" />
            </div>
            <div className="row">
              <Project title="Project for web" description={lorem} href="#" />
              <Project title="Project for web" description={lorem} href="#" />
            </div>
            <div className="row">
              <Project title="Project for print" description={lorem} href="#" />
              <Project title="Project for web" description={lorem} href="#" />
            </div>
          </div>
        );
      }
    } else if (this.props.screen === "desktop") {
      if (this.props.which === "web") {
        return (
          <div className="projects__wrapper">
            <div className="row">
              <Project title="Project for web" description={lorem} href="#" />
              <Project title="Project for web" description={lorem} href="#" />
              <Project title="Project for web" description={lorem} href="#" />
            </div>
          </div>
        );
      } else if (this.props.which === "print") {
        return (
          <div className="projects__wrapper">
            <div className="row">
              <Project title="Project for print" description={lorem} href="#" />
              <Project title="Project for print" description={lorem} href="#" />
              <Project title="Project for print" description={lorem} href="#" />
            </div>
          </div>
        );
      } else if (this.props.which === "all") {
        return (
          <div className="projects__wrapper">
            <div className="row">
              <Project title="Project for print" description={lorem} href="#" />
              <Project title="Project for print" description={lorem} href="#" />
              <Project title="Project for print" description={lorem} href="#" />
            </div>
            <div className="row">
              <Project title="Project for web" description={lorem} href="#" />
              <Project title="Project for web" description={lorem} href="#" />
              <Project title="Project for web" description={lorem} href="#" />
            </div>
          </div>
        );
      }
    }
  }
}

export default Projects;
