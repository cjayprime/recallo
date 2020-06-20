import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import PrivateRoute from "../components/PrivateRoute";

import routes from "./routes";

import * as Actions from "../store/actions";

// This is the only manually connected component in the app
// because this.props.load needs to be called
// it's loading all user info when the app first mounts
export default connect(
  null,
  Actions
)(
  class Routes extends Component {
    async componentDidMount() {
      const { load } = this.props;
      const token = await Actions.token.get();
      if (token) {
        load();
      }
    }

    component = (route) =>
      connect(
        (state) => state,
        Actions
      )((props) => <route.component {...props} />);

    render() {
      return (
        <Router history={createBrowserHistory()}>
          <Switch>
            {routes.public.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={this.component(route)}
              />
            ))}
            {routes.private.sidebar.map((route) => (
              <PrivateRoute
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={this.component(route)}
              />
            ))}
            {routes.private.route.map((route) => (
              <PrivateRoute
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={this.component(route)}
              />
            ))}
            <Route
              path="/404"
              component={() => (
                <div
                  style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 200,
                  }}
                >
                  404
                </div>
              )}
            />
            <Redirect from="/" to="/signin" />
            {/* <Redirect to="/404" /> */}
          </Switch>
        </Router>
      );
    }
  }
);
