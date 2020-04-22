import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";

import * as mapDispatchToProps from "../store/AllActions";

import routes from "./index"

import PrivateRoute from "../components/PrivateRoute";

const hist = createBrowserHistory();

class MainRoutes extends Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    {routes.publicRoutes.map(el => (
                        <Route
                            key={el.path}
                            path={el.path}
                            exact={el.exact}
                            component={el.component}
                        />
                    ))}
                    {routes.privateRoutes.sidebar.map(el => (
                        <PrivateRoute
                            key={el.path}
                            path={el.path}
                            exact={el.exact}
                            component={connect(state => state, mapDispatchToProps)(props => <el.component {...props} />)}
                        />
                    ))}
                    {routes.privateRoutes.route.map(el => (
                        <PrivateRoute
                            key={el.path}
                            path={el.path}
                            exact={el.exact}
                            component={el.component}
                        />
                    ))}
                    <Route path="/404" component={() => <div style={{
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 200
                    }}>404</div>} />
                    <Redirect from="/" to="/signin" />
                    {/* <Redirect from="/admin" to="/admin/home" />
                    <Redirect to="/404" /> */}
                </Switch>
            </Router>
        )
    }
}

export default MainRoutes;