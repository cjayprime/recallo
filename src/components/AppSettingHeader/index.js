import React, { Component } from "react";
import { Link } from "react-router-dom";

//import logo from "../../assets/img/appLogo.png";
import logo from "../../assets/img/logo2.png";
import bell from "../../assets/img/bell.svg";


import "./AppSettingHeader.css";

class AppSettingHeader extends Component {

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
        <div className="settingheader">
          <div>
            <img className="settinglogo" src={logo} alt="Recallo logo" />
            
          </div>
          <div className="settingProfile">
          <span>Settings </span> 
          <span>profile</span>
          </div>
          
          <h3 className="text-blue bold mb-8" id="settingside-header">
               AutoMedics Africa Limited 
               <span  className="arrow-down ml-5" />
               <p className="light text-light" style={{marginLeft:70}}>2 agents license</p>
            </h3>
            <div className="businessnav-logo mb-23">
              <h1 className="logonav-text">AM</h1>
            </div>
        </div>
      </header>
    );
  }
}

export default AppSettingHeader;