import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9774.555306898252!2d20.997407669476125!3d52.23177933770987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c93a84a83%3A0xa2e1cc1f1b7198de!2sPalace+of+Culture+and+Science%2C+plac+Defilad+1%2C+00-901+Warszawa!5e0!3m2!1sen!2spl!4v1528394943090"
          width="100%"
          height="300px"
          frameBorder="0"
          allowFullScreen
        />
      </section>
    );
  }
}

export default Map;
