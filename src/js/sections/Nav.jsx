import React, { Component } from "react";
import $ from "jquery";

class Nav extends Component {
  buttonCllickHandler = event => {
    event.preventDefault();
    $(".nav__nav-items").slideToggle();
  };

  render() {
    return (
      <div className="section-wrapper">
        <section className="nav nav--phone">
          <div className="nav__wrapper">
            <p className="nav__logo">
              Macan<span>kumbang</span>
            </p>
            <button
              className="nav__hamburger"
              onClick={this.buttonCllickHandler}
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div className="nav__nav-items">
            <ul>
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="nav nav--tablet">
          <span className="nav__logo">
            M<strong>c</strong>
          </span>
          <div className="nav__links-wrapper">
            <a href="#" className="nav__nav-link">
              Home
            </a>
            <a href="#" className="nav__nav-link">
              Services
            </a>
            <a href="#" className="nav__nav-link">
              Work
            </a>
            <a href="#" className="nav__nav-link">
              Testimonials
            </a>
            <a href="#" className="nav__nav-link">
              Contact
            </a>
          </div>
        </section>
        <section className="nav nav--desktop">
          <div className="container">
            <span className="nav__logo">
              Macan<strong>kumbang</strong>
            </span>
            <div className="nav__links-wrapper">
              <a href="#" className="nav__nav-link">
                Home
              </a>
              <a href="#" className="nav__nav-link">
                Services
              </a>
              <a href="#" className="nav__nav-link">
                Work
              </a>
              <a href="#" className="nav__nav-link">
                Testimonials
              </a>
              <a href="#" className="nav__nav-link">
                Contact
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Nav;
