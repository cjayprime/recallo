import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Sidenav from "../../components/SideNav/sidenav";
import Header from "../../components/Header/header";
import SettingSideBar from "../../components/SideNav/settingsidebar";


import routes from "../routes";

import "./admin.css";

// core components

class Admin extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // state = {
  //     header: false
  // }

  getRoutes = () => {
    return routes.private.sidebar.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    });
  };

  getSettings = () => {
    return routes.private.route.map((prop, key) => {
      if (prop.layout === "/admin") {
        // from and to props of the Redirect component from react-router-dom npm library
        // will aid you redirect if props.match.url === "/"
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    });
  };

  header = (isSideNav) => {
    const { location } = this.props;
    if (isSideNav === false) {
      if (
        location.pathname === "/admin/home" ||
        location.pathname === "/admin/analytics"
      )
        return true;

      return false;
    }
    if (
      location.pathname === "/admin/calls" ||
      location.pathname === "/admin/contact" ||
      location.pathname === "/admin/personnel" ||
      location.pathname === "/admin/settings" ||
      location.pathname === "/admin/previous" ||
      location.pathname === "/admin/voicenotes"
    )
      return true;

    return false;
  };

  render() {
    const { account, location/* data, result */ } = this.props;
   if(location.pathname === "/admin/settings"){
    return (
      <div className="grid">
           <Header header={this.header(false)} className="main-header" />
            <SettingSideBar
              header={this.header(true)}
              {...this.props}
              routes={routes}
              account={account}
            />
        <main className="main">
          <Switch>
            {this.getRoutes(routes)}
            {this.getSettings(routes)}
          </Switch>
        </main>
      </div>
    );
   }else{
    return (
      <div className="grid">
        <Header header={this.header(false)} className="main-header" />
        <Sidenav
          header={this.header(true)}
          {...this.props}
          routes={routes}
          account={account}
        />
        <main className="main">
          <Switch>
            {this.getRoutes(routes)}
            {this.getSettings(routes)}
          </Switch>
        </main>
      </div>
    );
   }
  }
}

export default Admin;
