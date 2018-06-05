import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="nav nav--phone">Nav for phone</section>
        <section className="nav nav--tablet">Nav for tablet</section>
        <section className="nav nav--desktop">Nav for desktop</section>
      </div>
    );
  }
}

export default Nav;
