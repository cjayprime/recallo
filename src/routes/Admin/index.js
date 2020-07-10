import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";

import SideNav from "../../components/SideNav/sidenav";
import Header from "../../components/Header/header";
import SettingSideBar from "../../components/SideNav/settingsidebar";

import routes from "../routes";

import * as Actions from "../../store/actions";

import "./admin.css";

class Admin extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  component = (route) =>
    connect(
      (state) => state,
      Actions
    )((props) => <route.component {...props} />);

  getRoutes = () => {
    return routes.private.sidebar.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        component={this.component(route)}
      />
    ));
  };

  getSettings = () => {
    return routes.private.route.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        component={this.component(route)}
      />
    ));
  };

  header = (isSideNav) => {
    if(isSideNav)
    return true;

    const { location } = this.props;

    switch (location.pathname){
      case (
        "/admin/home"         ||
        "/admin/analytics"    ||
        "/admin/calls"        ||
        "/admin/contact"      ||
        "/admin/personnel"    ||
        "/admin/settings"     ||
        "/admin/previous"     ||
        "/admin/voicenotes"
      ):
        return true;

      default:
        return false;
    }
  };

  render() {
    const { account, location } = this.props;
    const Component = this.component({
      component: location.pathname === "/admin/settings" ? SettingSideBar : SideNav
    });

    return (
      <div className="grid">
        <Header header={this.header(false)} className="main-header" />
        <Component
          header={this.header(true)}
        />
        <main className="main">
          <Switch>
            {this.getRoutes(routes)}
            {this.getSettings(routes)}
            <Route exact path="/admin">
              <Redirect to="/admin/home" />
            </Route>
            <Route exact path="/admin/*">
              <Redirect to="/admin/home" />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default Admin;
