import React, { Component } from "react";
import Projects from "../components/Projects";

class Portfolio extends Component {
  state = {
    selected: "all"
  };

  selectorClickHandler = event => {
    event.preventDefault();
    this.setState({
      selected: event.currentTarget.innerText.toLowerCase()
    });
  };

  render() {
    return (
      <div className="section-wrapper">
        <section className="portfolio portfolio--phone">
          <h1 className="portfolio__title">Portfolio</h1>
          <span className="portfolio__subtitle">Portfolio description</span>
          <hr />
          <div className="portfolio__selectors-wrapper">
            <a
              href="#"
              onClick={this.selectorClickHandler}
              className="portfolio__selector"
            >
              All
            </a>{" "}
            /{" "}
            <a
              href="#"
              onClick={this.selectorClickHandler}
              className="portfolio__selector"
            >
              Web
            </a>{" "}
            /{" "}
            <a
              href="#"
              onClick={this.selectorClickHandler}
              className="portfolio__selector"
            >
              Print
            </a>
          </div>
          <Projects which={this.state.selected} screen={"phone"} />
          <span>Browse all</span>
          <a href="#" className="portfolio__link">
            <i className="fas fa-angle-down" />
          </a>
        </section>
        <section className="portfolio portfolio--tablet">
          <h1 className="portfolio__title">Portfolio</h1>
          <span className="portfolio__subtitle">Portfolio description</span>
          <hr />
          <div className="portfolio__selectors-wrapper">
            <a
              href="#"
              onClick={this.selectorClickHandler}
              className="portfolio__selector"
            >
              All
            </a>{" "}
            /{" "}
            <a
              href="#"
              onClick={this.selectorClickHandler}
              className="portfolio__selector"
            >
              Web
            </a>{" "}
            /{" "}
            <a
              href="#"
              onClick={this.selectorClickHandler}
              className="portfolio__selector"
            >
              Print
            </a>
          </div>
          <Projects which={this.state.selected} screen={"tablet"} />
          <span>Browse all</span>
          <a href="#" className="portfolio__link">
            <i className="fas fa-angle-down" />
          </a>
        </section>
        <section className="portfolio portfolio--desktop">
          <div className="container">
            <h1 className="portfolio__title">Portfolio</h1>
            <span className="portfolio__subtitle">Portfolio description</span>
            <hr />
            <div className="portfolio__selectors-wrapper">
              <a
                href="#"
                onClick={this.selectorClickHandler}
                className="portfolio__selector"
              >
                All
              </a>{" "}
              /{" "}
              <a
                href="#"
                onClick={this.selectorClickHandler}
                className="portfolio__selector"
              >
                Web
              </a>{" "}
              /{" "}
              <a
                href="#"
                onClick={this.selectorClickHandler}
                className="portfolio__selector"
              >
                Print
              </a>
            </div>
            <Projects which={this.state.selected} screen={"desktop"} />
            <span>Browse all</span>
            <a href="#" className="portfolio__link">
              <i className="fas fa-angle-down" />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
