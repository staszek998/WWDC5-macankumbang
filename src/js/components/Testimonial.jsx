import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    if (this.props.which === 1) {
      return (
        <div className="testimonial">
          <div className="testimonial__image" />
          <div className="testimonial__text">
            <p className="quotation">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim,
              nam recusandae fugiat eligendi repudiandae! Sunt mollitia
              voluptatibus nemo rem animi, voluptatum minus assumenda incidunt
              porro fuga vitae, minima nesciunt!
            </p>
            <span className="author">John Doe</span>
          </div>
        </div>
      );
    } else if (this.props.which === 2) {
      return (
        <div className="testimonial">
          <div className="testimonial__image" />
          <div className="testimonial__text">
            <p className="quotation">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              aliquam, dicta repellendus odit rem reiciendis libero suscipit
              nesciunt quae esse adipisci, possimus ea quibusdam quos nisi
              mollitia, at vitae! Illum.
            </p>
            <span className="author">Jane Doe</span>
          </div>
        </div>
      );
    } else if (this.props.which === 3) {
      return (
        <div className="testimonial">
          <div className="testimonial__image" />
          <div className="testimonial__text">
            <p className="quotation">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              excepturi dolores, doloremque, recusandae nisi neque aspernatur
              optio tempora placeat quibusdam, sequi voluptas sit voluptate
              tenetur perspiciatis ipsa maiores quidem qui.
            </p>
            <span className="author">James Appleseed</span>
          </div>
        </div>
      );
    } else if (this.props.which === 4) {
      return (
        <div className="testimonial">
          <div className="testimonial__image" />
          <div className="testimonial__text">
            <p className="quotation">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              magnam, dignissimos explicabo repellendus alias commodi velit
              nihil corporis, excepturi dolorum, odio perferendis eum est
              incidunt quam possimus. Voluptates, quisquam obcaecati.
            </p>
            <span className="author">Maximilianus Augustus</span>
          </div>
        </div>
      );
    }
  }
}

export default Testimonial;
