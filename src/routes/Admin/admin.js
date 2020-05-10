import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Sidenav from "../../components/SideNav/sidenav";
import Header from "../../components/Header/header";

import routes from "../../routes";

import "./admin.css";

//core components

class Admin extends Component {


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    // state = {
    //     header: false
    // }

    getRoutes = routes => {
        return routes.private.sidebar.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                )
            } else {
                return null;
            }
        })
    }

    getSettings = routes => {
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
                )
            } else {
                return null;
            }
        })
    }

    header = (isSideNav) => {
        if (isSideNav === false) {

            if (this.props.location.pathname === "/admin/home" || this.props.location.pathname === "/admin/analytics")
                return true;

            return false;

        } else {

            if (this.props.location.pathname === "/admin/calls" || this.props.location.pathname === "/admin/personnel" || this.props.location.pathname === "/admin/settings" || this.props.location.pathname === "/admin/previous" || this.props.location.pathname === "/admin/voicenotes")
                return true;

            return false;

        }
    }

    render() {
        return (
            <div className="grid">
                <Header header={this.header(false)} className="main-header" />
                <Sidenav
                    header={this.header(true)}
                    {...this.props}
                    routes={routes}
                />
                <main className="main">
                    <Switch>
                        {this.getRoutes(routes)}
                        {this.getSettings(routes)}
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Admin;