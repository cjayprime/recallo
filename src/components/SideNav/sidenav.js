import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./sidenav.css"
import Header from "../Header/header";

class Sidenav extends Component {
    render() {
        const { routes } = this.props;
        console.log(routes, "Hey routes");
        return (
            <aside className="sidenav">
                {/* <Header className="SideNav-header" /> */}
                <div className="sidenav-body">
                    <div className="details">
                        <div className="business-logo">
                            <p className="logo-text">AM</p>
                        </div>
                        <p className="business-name">AutoMedics Africa Limited</p>
                        <p className="license">2 agents license</p>
                        {routes.privateRoutes.route.map((prop, key) => {
                            if (prop.redirect) return null;
                            return (
                                <Link key={key} to={prop.layout + prop.path} className="account-button"><p>Manage your Recallo Account</p></Link>
                            )
                        })}
                    </div>
                    <ul className="sidenav-list">
                        {routes.privateRoutes.sidebar.map((prop, key) => {
                            if (prop.redirect) return null;
                            return (
                                <Link className="sidenav-list-link" to={prop.layout + prop.path}>
                                    <li key={key} className="sidenav-list-item">
                                        <img src={prop.icon} className="sidenav-list-icon" />
                                        <h5>{prop.name}</h5>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                    <hr />
                    <p className="logout">Logout</p>
                </div>
            </aside>
        )
    }
}

export default Sidenav;