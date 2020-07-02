import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/button";
import Header from "../Header/header";


import "./sidenav.css";

class Sidenav extends Component {
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
    const { routes, header } = this.props;

    return (
      
      <aside className="sidenav">
       {/* {header && <Header className="sidenav-header" />}*/}
         <Header className="sidenav-header" />
        <div className="sidenav-body">
          <div className="details">
            <div className="business-logo mb-23">
              <h1 className="logo-text">AM</h1>
            </div>
            <h3 className="text-blue bold mb-8" id="sidebar-header">
               AutoMedics Africa Limited 
            </h3>
            <p className="light text-light">2 agents license</p>
            <Link to="/admin/settings" className="mt-24">
              <Button
                className="br-30 account-button orange-hover"
                padding="12px 20px"
              >
                <h6 className="bold">Manage your Recallo Account</h6>
              </Button>
            </Link>
          </div>
          <ul className="sidenav-list">
          {/*  {routes.private.sidebar.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <li
                  key={key}
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " sidenav-list-link active" : "")
                  }
                >
                  <Link
                    key={key}
                    className="sidenav-list-item"
                    activeClassName="active"
                    to={prop.layout + prop.path}
                  >
                    <img src={prop.icon} className="sidenav-list-icon" alt="" />
                    <h5>{prop.name}</h5>
                  </Link>
                </li>
              );
            })} 
            */}
          </ul>
          <Link to="/Home" className="Link">
                <h5 className="sidebar-text">
                  <div className="icon-home" />
                    Home
                </h5>
              </Link> 

              <Link to="/admin/calls" className="Link">
                <h5 className="sidebar-text">
                  <div className="icon-call" />
                    Calls
                </h5>
              </Link> 

              <Link to="/admin/contacts" className="Link">
                <h5 className="sidebar-text">
                  <div className="icon-contact" />
                    Contact
                </h5>
              </Link> 

              <Link to="/admin/personnel" className="Link">
                <h5 className="sidebar-text">
                  <div className="icon-personnel" />
                    Personnel
                </h5>
              </Link> 

              <Link to="/admin/analytics" className="Link">
                <h5 className="sidebar-text">
                  <div className="icon-analytics" />
                    Analytics
                </h5>
              </Link>
          <hr id="sidebarHr" />
          <h6 className="logout text-blue light" onClick={this.signout}>
            Logout
          </h6>
        </div>
      </aside>
    );
  }
}

export default Sidenav;
