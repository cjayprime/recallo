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
   
              <div className="notification" style={{marginLeft:820}}>
              <img className="bell" src={bell} alt="notification bell" />
              <span className="message">4</span>
              
              <div className="businessnav-logo mb-23" style={{marginLeft:290, marginTop:-35, position:"absolute"}}>
              <h1 className="logonav-text">AM</h1>
              <span style={{marginLeft:50, marginTop:-21, position:"absolute"}} className="arrow-down ml-5" />
            </div>
            </div>
           
        </div>
      </header>
    );
  }
}

export default AppPageHeader;