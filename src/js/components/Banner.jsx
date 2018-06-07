import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <h2 className="banner__title">{this.props.title}</h2>
        <span className="banner__subtitle">{this.props.subtitle}</span>
      </section>
    );
  }
}

export default Banner;
