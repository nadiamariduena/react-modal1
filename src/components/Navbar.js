import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <h3>
            <Link className="logo" to="Home">
              MODAL
            </Link>
          </h3>
          <nav></nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
