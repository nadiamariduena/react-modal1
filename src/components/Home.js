import React, { Component } from "react";
import ModalBox from "./ModalBox";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="home">
          <h3>HOME</h3>
          <ModalBox />
        </div>
      </>
    );
  }
}

export default Home;
