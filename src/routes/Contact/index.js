import React, { Component } from "react";
import Button from "../../components/Button/button";
import Table from "./table";
import NewContactOverlay from "./NewContactOverlay";

import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";

class Contact extends Component {
  state = { open: false };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="screen-padding">
        <div className="title-bar">
          <div className="title">
            <h2>Contact</h2>
          </div>
          <div className="row" id="calltopbutton">
            <Button
              background="#336799"
              text="#fff"
              padding="12px 25px"
              className="mr-16 br-30"
              onClick={this.toggle}
            >
              Add new contact
            </Button>
          </div>
        </div>
        <div className="menu-bar ptb-20">
          <div>
            <div className="search-form">
              <SearchIcon className="search-icon" />
              <input id="input" className="br-3 search bc-blue hover" />
            </div>
          </div>
          <div className="menu-bar-right">
            <p className="text-light mr-5">Viewing results</p>
            <p className="text-main bold mr-20">
              1-10 <span className="text-light ml-5 mr-5">of</span>36
            </p>
            <div className="arrow-icons">
              <span className="arrow arrow-left mr-10 op-4 hover" />
              <span className="arrow arrow-right" />
            </div>
          </div>
        </div>
        <NewContactOverlay open={open} toggle={this.toggle} />
        <Table />
      </div>
    );
  }
}

export default Contact;
