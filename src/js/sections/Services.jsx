import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="services services--phone">
          Services for phone
        </section>
        <section className="services services--tablet">
          Services for tablet
        </section>
        <section className="services services--desktop">
          Services for desktop
        </section>
      </div>
    );
  }
}

export default Services;
