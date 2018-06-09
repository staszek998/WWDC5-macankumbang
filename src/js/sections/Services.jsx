import React, { Component } from "react";
import Service from "../components/Service";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem vel, doloribus, nobis illum, doloremque optio omnis quaerat.`;

class Services extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="services services--phone">
          <h1 className="services__title">Services title</h1>
          <span className="services__subtitle">Services subtitle</span>
          <hr />
          <Service
            title="Service title"
            description={lorem}
            href="#"
            imgSrc="http://via.placeholder.com/50x50"
            imgAlt="Placeholder icon"
          />
          <Service
            title="Service title"
            description={lorem}
            href="#"
            imgSrc="http://via.placeholder.com/50x50"
            imgAlt="Placeholder icon"
          />
          <Service
            title="Service title"
            description={lorem}
            href="#"
            imgSrc="http://via.placeholder.com/50x50"
            imgAlt="Placeholder icon"
          />
          <Service
            title="Service title"
            description={lorem}
            href="#"
            imgSrc="http://via.placeholder.com/50x50"
            imgAlt="Placeholder icon"
          />
        </section>
        <section className="services services--tablet">
          <h1 className="services__title">Services title</h1>
          <span className="services__subtitle">Services subtitle</span>
          <hr />
          <div className="services__wrapper">
            <div className="row">
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc="http://via.placeholder.com/50x50"
                imgAlt="Placeholder icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc="http://via.placeholder.com/50x50"
                imgAlt="Placeholder icon"
              />
            </div>
            <div className="row">
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc="http://via.placeholder.com/50x50"
                imgAlt="Placeholder icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc="http://via.placeholder.com/50x50"
                imgAlt="Placeholder icon"
              />
            </div>
          </div>
        </section>
        <section className="services services--desktop">
          <div className="container">
            <h1 className="services__title">Services title</h1>
            <span className="services__subtitle">Services subtitle</span>
            <hr />
            <div className="services__wrapper">
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc="http://via.placeholder.com/50x50"
                imgAlt="Placeholder icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc="http://via.placeholder.com/50x50"
                imgAlt="Placeholder icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc="http://via.placeholder.com/50x50"
                imgAlt="Placeholder icon"
              />
              <Service
                title="Service title"
                description={lorem}
                href="#"
                imgSrc="http://via.placeholder.com/50x50"
                imgAlt="Placeholder icon"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
