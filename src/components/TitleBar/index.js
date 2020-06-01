import React, { Component } from "react";
import "./titlebar.css";

import Button from "../Button/button";

class Titlebar extends Component {
  render() {
    const { heading, buttons } = this.props;
    return (
      <div className="title-bar">
        <div className="title">
          <h2>{heading}</h2>
        </div>
        <div className="row">
          <Button
            background="#F5F6FA"
            text="var(--text-color)"
            padding="12px 25px"
            className="mr-16 br-30"
            click={buttons.left.action}
          >
            {buttons.left.title}
          </Button>
          <Button
            background="var(--text-color)"
            text="#fff"
            padding="12px 25px"
            className="br-30"
            click={buttons.right.action}
          >
            {buttons.right.title}
          </Button>
        </div>
      </div>
    );
  }
}

export default Titlebar;
