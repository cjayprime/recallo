import React, { Component } from 'react';
import './menuBar.css';
import MenuItem from "../menuItem/menuItem";


class MenuBar extends Component {
    render() {
        return (
          <div className="menu-bar">
            <MenuItem item={{ title: "Personnel", values: ["yesterday", "today","monday"]}}/>
            <MenuItem item={{ title: "Calls"}}/>
            <MenuItem item={{ title: "Profile category"}}/>
            <MenuItem item={{ title: "Call status"}}/>
          </div>
        )
    }
}

export default MenuBar;