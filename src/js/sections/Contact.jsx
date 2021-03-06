import React, { Component } from "react";
import separator from "../../images/services/separator.png";

class Contact extends Component {
  render() {
    return (
      <div className="section-wrapper" id="contact">
        <section className="contact--mobile">
          <h2 className="section-title contact__title">Contact</h2>
          <span className="section-subtitle contact__subtitle">
            Let's talk business
          </span>
          <img src={separator} className="contact__separator" alt="Separator" />
          <div className="contact__contact-details">
            <span>Office Hours:</span>
            <span>Monday to Friday 07:00-17:00</span>
            <span>Saturday 09:00-15:00</span>
            <i className="fas fa-map-marker" />
            <span>Plac Defilad 1, 00-901 Warsaw</span>
            <i className="fas fa-phone" />
            <span>+48 667 882 721</span>
            <i className="fas fa-envelope" />
            <span>stanislaw.gregor@outlook.com</span>
            <div className="social-media-icons">
              <div className="icon">
                <i className="fab fa-facebook-f" />
              </div>
              <div className="icon">
                <i className="fab fa-twitter" />
              </div>
              <div className="icon">
                <i className="fab fa-google-plus-g" />
              </div>
            </div>
          </div>
          <form action="submit" className="contact__form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email address" />
            <textarea name="" cols="30" rows="10" placeholder="Message" />
            <input type="submit" value="Send" />
          </form>
        </section>
        <section className="contact--desktop">
          <div className="container">
            <h2 className="section-title contact__title">Contact</h2>
            <span className="section-subtitle contact__subtitle">
              Let's talk business
            </span>
            <img
              src={separator}
              className="contact__separator"
              alt="Separator"
            />
            <div className="contact__wrapper">
              <div className="contact__contact-details">
                <span>Office Hours:</span>
                <span>Monday to Friday 07:00-17:00</span>
                <span>Saturday 09:00-15:00</span>
                <div className="row">
                  <i className="fas fa-map-marker" />
                  <span>Plac Defilad 1, 00-901 Warsaw</span>
                </div>
                <div className="row">
                  <i className="fas fa-phone" />
                  <span>+48 667 882 721</span>
                </div>
                <div className="row">
                  <i className="fas fa-envelope" />
                  <span>stanislaw.gregor@outlook.com</span>
                </div>
                <div className="social-media-icons">
                  <div className="icon">
                    <i className="fab fa-facebook-f" />
                  </div>
                  <div className="icon">
                    <i className="fab fa-twitter" />
                  </div>
                  <div className="icon">
                    <i className="fab fa-google-plus-g" />
                  </div>
                </div>
              </div>
              <form action="submit" className="contact__form">
                <div className="inputs-wrapper">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email address" />
                </div>
                <textarea name="" cols="30" rows="10" placeholder="Message" />
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
