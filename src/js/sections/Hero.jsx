import React, { Component } from "react";
import image from "../../images/header/image.png";

class Hero extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="hero hero--phone">
          <h1 className="hero__title">Hero title</h1>
          <p className="hero__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            libero eos aperiam?
          </p>
          <img src={image} alt="Hero image" className="hero__image" />
          <button type="button" href="#" className="hero__button">
            More
          </button>
        </section>
        <section className="hero hero--tablet-and-desktop">
          <div className="container">
            <div className="hero__col">
              <h1 className="hero__title">Hero title</h1>
              <p className="hero__subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                libero eos aperiam?
              </p>
              <button href="#" className="hero__button">
                Hero button
              </button>
            </div>
            <div className="hero__col">
              <img src={image} alt="Hero image" className="hero__image" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
