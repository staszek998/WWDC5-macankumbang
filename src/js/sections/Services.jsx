import React, { Component } from "react";
import Service from "../components/Service";
import separator from "../../images/services/separator.png";
import iconHeart from "../../images/services/icon-heart.png";
import iconGlobe from "../../images/services/icon-globe.png";
import iconMonitor from "../../images/services/icon-monitor.png";
import iconRocket from "../../images/services/icon-rocket.png";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem vel, doloribus, nobis illum, doloremque optio omnis quaerat.`;

class Services extends Component {
  render() {
    return (
      <div className="section-wrapper" id="services">
        <section className="services services--phone">
          <h1 className="section-title services__title">Our services</h1>
          <span className="section-subtitle services__subtitle">
            How can we amaze you?
          </span>
          <img
            src={separator}
            className="services__separator"
            alt="Separator"
          />
          <Service
            title="Service title"
            description={lorem}
            href="#"
            imgSrc={iconHeart}
            imgAlt="Placeholder icon"
          />
          <Service
            title="Service title"
            description={lorem}
            href="#"
            imgSrc={iconGlobe}
            imgAlt="Placeholder icon"
          />
          <Service
            title="Service title"
            description={lorem}
            href="#"
            imgSrc={iconMonitor}
            imgAlt="Placeholder icon"
          />
          <Service
            title="Service title"
            description={lorem}
            href="#"
            imgSrc={iconRocket}
            imgAlt="Placeholder icon"
          />
        </section>
        <section className="services services--tablet">
          <h1 className="section-title services__title">Our services</h1>
          <span className="section-subtitle services__subtitle">
            How can we amaze you?
          </span>
          <img
            src={separator}
            className="services__separator"
            alt="Separator"
          />
          <div className="services__wrapper">
            <div className="row">
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc={iconHeart}
                imgAlt="Heart icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc={iconGlobe}
                imgAlt="Globe icon"
              />
            </div>
            <div className="row">
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc={iconMonitor}
                imgAlt="Monitor icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc={iconRocket}
                imgAlt="Rocket icon"
              />
            </div>
          </div>
        </section>
        <section className="services services--desktop">
          <div className="container">
            <h1 className="section-title services__title">Our services</h1>
            <span className="section-subtitle services__subtitle">
              How can we amaze you?
            </span>
            <img
              src={separator}
              className="services__separator"
              alt="Separator"
            />
            <div className="services__wrapper">
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc={iconHeart}
                imgAlt="Heart icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc={iconGlobe}
                imgAlt="Globe icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc={iconMonitor}
                imgAlt="Monitor icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc={iconRocket}
                imgAlt="Rocket icon"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
