import React, { Component } from "react";

import logo from "../../assets/img/logo2.png";

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
    const { account: { business } } = this.props;
    return (
      <header>
        <div className="settingheader">
          <div>
            <img className="settinglogo" src={logo} alt="Recallo logo" />
            
          </div>
          <div className="settingProfile">
          <span style={{color:"#2E384D", fontSize:16}}>Settings </span> <span style={{marginLeft:-17, fontSize:16, color:"#000000"}}> &gt; </span>
          <span style={{color:"#2E384D", fontSize:16}}>Profile</span>
          </div>
          
          <h3 className="text-blue bold mb-8" id="settingside-header">
                {
                  business.name
                }
               <span  className="arrow-down ml-5" />
               {/* <p className="light text-light" style={{marginLeft:70}}>2 agents license</p> */}
            </h3>
            <div className="businessnav-logo mb-23">
              <h1 className="logonav-text">
                {
                  business.name.substr(0, 1) + '' + 
                  (
                    business.name.split(' ')[1] ? 
                    business.name.split(' ')[1].substr(0, 1) : ''
                  )
                }
              </h1>
            </div>
        </div>
      </header>
    );
  }
}

export default AppSettingHeader;
