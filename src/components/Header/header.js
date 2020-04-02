import React, { Component } from 'react'

import logo from "../../assets/img/logo.png"
import bell from "../../assets/img/bell.svg"
import "./header.css"

class Header extends Component {
    render() {
        const {
            className,
            header
        } = this.props;

        if (header === false) return null;

        return (
            <div className={className}>
                <div>
                    <img className="logo" src={logo} alt="Recallo logo" />
                </div>
                <div className="notification">
                    <img className="bell" src={bell} alt="notification bell" />
                    <span className="message">4</span>
                </div>
            </div>
        )
    }
}

export default Header;