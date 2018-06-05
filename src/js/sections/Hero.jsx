import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="hero hero--phone">Hero for phone</section>
        <section className="hero hero--tablet-and-desktop">
          Hero for tablet and desktop
        </section>
      </div>
    );
  }
}

export default Hero;
