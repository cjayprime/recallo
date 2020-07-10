import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./sidenav.css";

class settingsidebar extends Component {
    signout = (e) => {
        e.preventDefault();
        const { history, signout } = this.props;
        signout({ history });
      };
    
      // verifies if routeName is the one active in (in browser input)
      activeRoute = (routeName) => {
        const { location } = this.props;
        return location.pathname.indexOf(routeName) > -1 ? "active" : "";
      };
    
      render() {
        return (
          <aside className="sidenav" id="seetingsidebar">
           
            <div className="sidenav-body">
              <div className="details">
                <div className="settingbusiness-logo mb-23">
                  <h1 className="settinglogo-text">AM</h1>
                </div>

                <Link to="/" className="Link">
                      <div className="setting-icon" />
                  </Link> 

                  <hr style={{ marginLeft:-20, marginTop:55, width:100}}/>

                  <Link to="/" className="Link">
                      <div className="settingicon-home" />
                  </Link> 

                  <Link to="/" className="Link">
                      <div className="settingicon-call" />
                  </Link> 
    
                  <Link to="/" className="Link">
                      <div className="settingicon-personnel" />
                  </Link> 
                  
    
                  <Link to="/" className="Link">
                      <div className="settingicon-analytics" />
                  </Link> 

                  <hr style={{ marginLeft:-20, marginTop:240, width:100}}/>
                  <Link to="/" className="Link">
                      <div className="settingicon-power" />
                  </Link> 
              </div>
            </div>
          </aside>
        
        );
      }
}

export default settingsidebar;
