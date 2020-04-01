import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button from "../../components/Button/button";

import "./sidenav.css"

class Sidenav extends Component {
    render() {
        const { routes } = this.props;
        //console.log(routes, "Hey routes");
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
                                <Link key={key} to={prop.layout + prop.path} className="mt-24"><Button className="br-30 bd-grey account-button"
                                    padding={"12px 20px"} background={"#fff"} text={"#333"}
                                >
                                    <h6 className="bold text-main">Manage your Recallo Account</h6>
                                </Button></Link>
                            )
                        })}
                    </div>
                    <ul className="sidenav-list">
                        {routes.privateRoutes.sidebar.map((prop, key) => {
                            if (prop.redirect) return null;
                            return (
                                <Link key={key} className="sidenav-list-link" to={prop.layout + prop.path}>
                                    <li className="sidenav-list-item">
                                        <img src={prop.icon} className="sidenav-list-icon" alt="" />
                                        <h5>{prop.name}</h5>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                    <hr />
                    <h6 className="logout text-blue light">Logout</h6>
                </div>
            </aside>
        )
    }
}

export default Sidenav;