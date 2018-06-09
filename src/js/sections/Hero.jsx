import React, { Component } from "react";
// import $ from "jquery";

class Hero extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="hero hero--phone">
          <h1 className="hero__title">Hero title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            libero eos aperiam?
          </p>
          <img
            src="http://via.placeholder.com/350x150"
            alt="Hero image"
            className="hero__image"
          />
          <a type="button" href="#" className="hero__button">
            Hero button
          </a>
        </section>
        <section className="hero hero--tablet-and-desktop">
          <div className="container">
            <div className="hero__col">
              <h1 className="hero__title">Hero title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                libero eos aperiam?
              </p>
              <a type="button" href="#" className="hero__button">
                Hero button
              </a>
            </div>
            <div className="hero__col">
              <img
                src="http://via.placeholder.com/350x150"
                alt="Hero image"
                className="hero__image"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
