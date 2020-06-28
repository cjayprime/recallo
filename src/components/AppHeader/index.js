import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/appLogo.png";

import "./AppHeader.css";

class AppHeader extends Component {
  render() {
    const { routes } = this.props;

    return (
      <header>
        <div className="app-header">
          <div>
            <img className="logo" src={logo} alt="Recallo logo" />
          </div>
          <div className="header-menu">
            <div>
              <Link to={"/signin"}>
                <h5 className="bold" id="headerText">Log In</h5>
              </Link>
            </div>
            <div>
              <Link to={"/signup"}>
                <h5 className="bold" id="headerText">Create an Account</h5>
              </Link>
            </div>
            <div>
              <Link to={"/support"}>
                <h5 className="bold" id="headerText">Contact Support</h5>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
