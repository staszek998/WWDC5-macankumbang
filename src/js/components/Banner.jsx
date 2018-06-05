import React, { Component } from "react";

class Banner extends Component {
  render() {
    return <section className="banner">{this.props.text}</section>;
  }
}

export default Banner;
