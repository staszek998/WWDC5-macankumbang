import React, { Component } from "react";
import Testimonial from "../components/Testimonial";
import separator from "../../images/portfolio/separator.png";

class Testimonials extends Component {
  state = {
    currentTestimonial: 1
  };

  previousTestimonial = () => {
    if (this.state.currentTestimonial === 1) {
      this.setState({
        currentTestimonial: 4
      });
    } else {
      this.setState({
        currentTestimonial: this.state.currentTestimonial - 1
      });
    }
  };

  nextTestimonial = () => {
    if (this.state.currentTestimonial === 4) {
      this.setState({
        currentTestimonial: 1
      });
    } else {
      this.setState({
        currentTestimonial: this.state.currentTestimonial + 1
      });
    }
  };

  changeTestimonial = which => {
    this.setState({
      currentTestimonial: which
    });
  };

  render() {
    let selector1Classes = `fas fa-circle ${
      this.state.currentTestimonial === 1 ? "active" : ""
    }`;
    let selector2Classes = `fas fa-circle ${
      this.state.currentTestimonial === 2 ? "active" : ""
    }`;
    let selector3Classes = `fas fa-circle ${
      this.state.currentTestimonial === 3 ? "active" : ""
    }`;
    let selector4Classes = `fas fa-circle ${
      this.state.currentTestimonial === 4 ? "active" : ""
    }`;

    return (
      <div className="section-wrapper">
        <section className="testimonials--mobile" id="testimonials">
          <h2 className="section-title testimonials__title">Testimonials</h2>
          <span className="section-subtitle testimonials__subtitle">
            Subtitle
          </span>
          <img
            src={separator}
            className="portfolio__separator"
            alt="Separator"
          />
          <Testimonial which={this.state.currentTestimonial} />
          <div className="testimonials__selectors">
            <button onClick={this.previousTestimonial} className="selector">
              <i className="fas fa-angle-left" />
            </button>
            <button
              onClick={() => this.changeTestimonial(1)}
              className="selector"
            >
              <i className={selector1Classes} />
            </button>
            <button
              onClick={() => this.changeTestimonial(2)}
              className="selector"
            >
              <i className={selector2Classes} />
            </button>
            <button
              onClick={() => this.changeTestimonial(3)}
              className="selector"
            >
              <i className={selector3Classes} />
            </button>
            <button
              onClick={() => this.changeTestimonial(4)}
              className="selector"
            >
              <i className={selector4Classes} />
            </button>
            <button onClick={this.nextTestimonial} className="selector">
              <i className="fas fa-angle-right" />
            </button>
          </div>
        </section>
        <section className="testimonials--desktop">
          <div className="container">
            <h2 className="testimonials__title">Testimonials</h2>
            <span className="testimonials__subtitle">Subtitle</span>
            <hr />
            <Testimonial which={this.state.currentTestimonial} />
            <div className="testimonials__selectors">
              <button onClick={this.previousTestimonial} className="selector">
                <i className="fas fa-angle-left" />
              </button>
              <button
                onClick={() => this.changeTestimonial(1)}
                className="selector"
              >
                <i className={selector1Classes} />
              </button>
              <button
                onClick={() => this.changeTestimonial(2)}
                className="selector"
              >
                <i className={selector1Classes} />
              </button>
              <button
                onClick={() => this.changeTestimonial(3)}
                className="selector"
              >
                <i className={selector1Classes} />
              </button>
              <button
                onClick={() => this.changeTestimonial(4)}
                className="selector"
              >
                <i className={selector1Classes} />
              </button>
              <button onClick={this.nextTestimonial} className="selector">
                <i className="fas fa-angle-right" />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Testimonials;
