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
        const {signout, history, account: {business}} = this.props;
        return (
          <aside className="sidenav" id="seetingsidebar">
           
            <div className="sidenav-body">
              <div className="details">
                <div className="settingbusiness-logo mb-23">
                  <h1 className="settinglogo-text">
                  {
                    business.name.substr(0, 1) + '' + 
                    (
                      business.name.split(' ')[1] ? 
                      business.name.split(' ')[1].substr(0, 1) : ''
                    )
                  }
                  </h1>
                </div>

                <Link to="/admin/settings" className="Link">
                      <div className="setting-icon" />
                  </Link> 

                  <hr style={{ marginLeft:-20, marginTop:1, width:100}}/>

                  <Link to="/admin/home" className="Link">
                      <div className="settingicon-home" />
                  </Link> 

                  <Link to="/admin/calls" className="Link">
                      <div className="settingicon-call" />
                  </Link> 
    
                  <Link to="/admin/personnel" className="Link">
                      <div className="settingicon-personnel" />
                  </Link> 
                  
    
                  <Link to="/admin/analytics" className="Link">
                      <div className="settingicon-analytics" />
                  </Link> 

                  <hr style={{ marginLeft:-20, marginTop:250, width:100}}/>
                  <Link to="/signin" className="Link">
                    <div className="settingicon-power" onClick={signout} />
                  </Link> 
              </div>
            </div>
          </aside>
        
        );
      }
}

export default settingsidebar;
