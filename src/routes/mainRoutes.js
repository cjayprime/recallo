import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import routes from "./routes";

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
                            component={el.component}
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
                    <Redirect from="/" to="admin/home" />
                    {/* <Redirect from="/admin" to="/admin/home" />
                    <Redirect to="/404" /> */}
                </Switch>
            </Router>
        )
    }
}

export default MainRoutes;