import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Sidenav from "../../components/SideNav/sidenav";
import Header from "../../components/Header/header";

import routes from "../../routes/routes";

import "./admin.css";

//core components

class Admin extends Component {
    // state = {
    //     visible: true
    // }

    getRoutes = routes => {
        return routes.privateRoutes.sidebar.map((prop, key) => {
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
        return routes.privateRoutes.route.map((prop, key) => {
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

<<<<<<< Updated upstream
    // changeHeader = () => {
    //     for (let i = 0; i < routes.privateRoutes.length; i++) {
    //         if (
    //             this.props.location.pathname.indexOf(
    //                 routes.privateRoutes[i].layout + routes.privateRoutes[i].path
    //             ) !== "/admin/home"
    //         ) {
    //             return showHeader
    //         } else {
    //             return hideHeader
    //         }
    //     }
    // }
=======
    header = (isSideNav) => {
        if (isSideNav === false) {

            if (this.props.location.pathname === "/admin/home")
                return true;

            return false;

        } else {

            if (this.props.location.pathname === "/admin/calls" || this.props.location.pathname === "/admin/personnel" || this.props.location.pathname === "/admin/analytics" || this.props.location.pathname === "/admin/settings" || this.props.location.pathname === "/admin/previous" || this.props.location.pathname === "/admin/voicenotes")
                return true;

            return false;

        }
    }
>>>>>>> Stashed changes

    render() {
        return (
            <>
                <div className="grid-container">
                    <Header className="main-header" />
                    <Sidenav
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
            </>
        )
    }
}

export default Admin;