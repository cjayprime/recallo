import React, { Component } from "react";

import logo from "../../assets/img/logo.png";
import bell from "../../assets/img/bell.svg";
import "./header.css";

class HomeHeader extends Component {
  render() {
    const { className, header } = this.props;

    if (header === false) return null;

    return (
      <div className={className}>
        <div>
          <img className="logo" src={logo} alt="Recallo logo" />
        </div>

        <div className="notification" style={{position:"absolute", marginLeft:910, marginTop:6}}>
          <img className="bell" src={bell} alt="notification bell" />
          <span className="message">4</span>
        </div>
        <div className="home-header-logo mb-23">
              <h1 className="logonav-text">AM</h1>
              <span id="home-header-arrow" className="arrow-down ml-5" />
            </div>
      </div>
    );
  }
}

export default HomeHeader;
