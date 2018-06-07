import React, { Component } from "react";
import Testimonial from "../components/Testimonial";

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
    return (
      <div className="section-wrapper">
        <section className="testimonials--mobile">
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
              <i className="fas fa-circle" />
            </button>
            <button
              onClick={() => this.changeTestimonial(2)}
              className="selector"
            >
              <i className="fas fa-circle" />
            </button>
            <button
              onClick={() => this.changeTestimonial(3)}
              className="selector"
            >
              <i className="fas fa-circle" />
            </button>
            <button
              onClick={() => this.changeTestimonial(4)}
              className="selector"
            >
              <i className="fas fa-circle" />
            </button>
            <button onClick={this.nextTestimonial} className="selector">
              <i className="fas fa-angle-right" />
            </button>
          </div>
        </section>
        <section className="testimonials--desktop">
          Testimonials for desktop
        </section>
      </div>
    );
  }
}

export default Testimonials;
