import React, { Component } from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Banner from "./components/Banner";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Map from "./sections/Map";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <Nav />
          <Hero />
          <Services />
          <Banner title="Banner 1 title" subtitle="Banner 1 subtitle" />
          <Portfolio />
          <Testimonials />
          <Banner title="Banner 2 title" subtitle="Banner 2 subtitle" />
          <Map />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
