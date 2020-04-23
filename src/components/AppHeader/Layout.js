import React, { Component } from 'react';

import AppHeader from "./index";
import routes from "../../Routes";

class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div style={{ width: "100%", height: "auto" }}>
                <AppHeader
                    {...this.props}
                    routes={routes}
                />
                <div className="container">
                    {children}
                </div>
            </div>
        )
    }
}

export default Layout;