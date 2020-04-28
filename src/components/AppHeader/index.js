import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from "../../assets/img/appLogo.png";

import "./AppHeader.css";

class AppHeader extends Component {

    //verifies if routeName is the one active in (in browser input)
    activeRoute = (routeName) => {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    render() {
        const { routes } = this.props;
        return (
            <header>
                <div className="app-header">
                    <div>
                        <img className="logo" src={logo} alt="Recallo logo" />
                    </div>
                    <div className="header-menu">
                        {routes.publicRoutes.map((prop, key) => {
                            if (prop.redirect) return null;
                            return (
                                <div key={key} className={this.activeRoute(prop.path) + (prop.pro ? "active" : "")}>
                                    <Link to={prop.path}>
                                        <h5 className="bold">{prop.name}</h5>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;