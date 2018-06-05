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
        <Nav />
        <Hero />
        <Services />
        <Banner text="Banner 1" />
        <Portfolio />
        <Testimonials />
        <Banner text="Banner 2" />
        <Map />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
