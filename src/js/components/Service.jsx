import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <div className="service">
        <img
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
          className="service__icon"
        />
        <h3 className="service__title">{this.props.title}</h3>
        <p className="service__description">{this.props.description}</p>
        <button
          className="service__button"
          type="button"
          href={this.props.href}
        >
          More
        </button>
      </div>
    );
  }
}

export default Service;
