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
        <Banner
          title="Our greatest works"
          subtitle="come from the greatest ideas of our awesome Customers"
        />
        <Portfolio />
        <Testimonials />
        <Banner title="Get in touch with us" subtitle="in the center of Warsaw" />
        <Map />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
