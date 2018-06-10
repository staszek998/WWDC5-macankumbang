import React, { Component } from "react";
import Projects from "../components/Projects";
import separator from "../../images/portfolio/separator.png";

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
    let linkAllClasses = `portfolio__selector ${
      this.state.selected === "all" ? "active" : ""
    }`;
    let linkWebClasses = `portfolio__selector ${
      this.state.selected === "web" ? "active" : ""
    }`;
    let linkPrintClasses = `portfolio__selector ${
      this.state.selected === "print" ? "active" : ""
    }`;

    return (
      <div className="section-wrapper">
        <section className="portfolio portfolio--phone">
          <h1 className="section-title portfolio__title">Portfolio</h1>
          <span className="section-subtitle portfolio__subtitle">
            our awesome projects
          </span>
          <img
            src={separator}
            className="portfolio__separator"
            alt="Separator"
          />
          <div className="portfolio__selectors-wrapper">
            <a
              href="#"
              onClick={this.selectorClickHandler}
              className={linkAllClasses}
            >
              All
            </a>{" "}
            /{" "}
            <a
              href="#"
              onClick={this.selectorClickHandler}
              className={linkWebClasses}
            >
              Web
            </a>{" "}
            /{" "}
            <a
              href="#"
              onClick={this.selectorClickHandler}
              className={linkPrintClasses}
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
