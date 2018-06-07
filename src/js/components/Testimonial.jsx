import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    if (this.props.which === 1) {
      return (
        <div className="testimonial">
          <div className="testimonial__image" />
          <div className="testimonial__text">
            <p className="quotation">Quotation 1</p>
            <span className="author">Author</span>
          </div>
        </div>
      );
    } else if (this.props.which === 2) {
      return (
        <div className="testimonial">
          <div className="testimonial__image" />
          <div className="testimonial__text">
            <p className="quotation">Quotation 2</p>
            <span className="author">Author</span>
          </div>
        </div>
      );
    } else if (this.props.which === 3) {
      return (
        <div className="testimonial">
          <div className="testimonial__image" />
          <div className="testimonial__text">
            <p className="quotation">Quotation 3</p>
            <span className="author">Author</span>
          </div>
        </div>
      );
    } else if (this.props.which === 4) {
      return (
        <div className="testimonial">
          <div className="testimonial__image" />
          <div className="testimonial__text">
            <p className="quotation">Quotation 4</p>
            <span className="author">Author</span>
          </div>
        </div>
      );
    }
  }
}

export default Testimonial;
