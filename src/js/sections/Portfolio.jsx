import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="portfolio portfolio--phone">
          Portfolio for phone
        </section>
        <section className="portfolio portfolio--tablet">
          Portfolio for tablet
        </section>
        <section className="portfolio portfolio--desktop">
          Portfolio for desktop
        </section>
      </div>
    );
  }
}

export default Portfolio;
