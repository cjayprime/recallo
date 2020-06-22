import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/appLogo.png";
import bell from "../../assets/img/bell.svg";


import "./AppPageHeader.css";

class AppPageHeader extends Component {

  // verifies if routeName is the one active in (in browser input)
  activeRoute = (routeName) => {
    const {
      location: { pathname },
    } = this.props;
    return pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  render() {
    const { routes } = this.props;
    return (
      <header>
        <div className="header">
          <div>
            <img className="logo" src={logo} alt="Recallo logo" />
          </div>
              <div className="notification" style={{marginLeft:900}}>
              <img className="bell" src={bell} alt="notification bell" />
              <span className="message">4</span>
            </div>
        </div>
      </header>
    );
  }
}

export default AppPageHeader;
