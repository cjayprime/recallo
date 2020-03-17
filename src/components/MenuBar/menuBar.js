import React, { Component } from 'react';

import './menuBar.css';
import MenuItem from "../menuItem/menuItem";

// import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";


class MenuBar extends Component {

    render() {
        return (
            <div className="menu-bar ptb-20">
                <div>
                    <MenuItem item={{ title: "Personnel", values: ["Yesterday", "Today", "monday"] }} />
                    <MenuItem item={{ title: "Calls", values: ["Today", "Yesterday", "Last 7 days", "Select range"] }} />
                    <MenuItem item={{ title: "Profile category", values: ["Not yet profited", "Engine fault", "Break fault"] }} />
                    <MenuItem item={{ title: "Call status", values: ["Answered", "Voicenotes", "Dropped", "Missed"] }} />
                    <div className="search-form">
                        {/* <SearchIcon className="search-icon" /> */}
                        <input className="br-3 search bc-blue hover" />
                    </div>
                </div>
                <div className="menu-bar-right">
                    <p className="text-light mr-5">Viewing results</p>
                    <p className="text-main bold mr-20">1-10 <span className="text-light mr-5">of</span>36</p>
                    <div className="arrow-icons">
                        <span className="arrow arrow-left mr-10 op-4 hover" />
                        <span className="arrow arrow-right" />
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuBar;