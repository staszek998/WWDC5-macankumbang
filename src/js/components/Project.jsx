import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <h3 className="project__title">{this.props.title}</h3>
        <p className="project__description">{this.props.description}</p>
        <a href={this.props.href} className="project__icon">
          <i className="fas fa-eye" />
        </a>
      </div>
    );
  }
}

export default Project;
