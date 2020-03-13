import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Sidenav from "../../components/sidenav/sidenav";
import Header from "../../components/Header/header";

import routes from "../../routes/routes";

import "./admin.css";

//core components

class Admin extends Component {
    // state = {
    //     visible: true
    // }

    getRoutes = routes => {
        return routes.privateRoutes.map((prop, key) => {
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

    render() {
        return (
            <>
                <div className="grid-container">
                    {/* <Header className="main-header" /> */}
                    <Sidenav
                        {...this.props}
                        routes={routes}
                    />
                    <main className="main">
                        <Switch>{this.getRoutes(routes)}</Switch>
                    </main>
                </div>
            </>
        )
    }
}

export default Admin;