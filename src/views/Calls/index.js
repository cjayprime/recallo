import React, { Component } from 'react';


import Titlebar from "../../components/TitleBar";
import Table from "../../components/Table/table";
import MenuItem from "../../components/MenuItem/menuItem";
import ProfileCategoryOverlay from "./ProfileCategoryOverlay";


import {ReactComponent as SearchIcon} from "../../assets/img/search.svg";


class Calls extends Component {

    state = { open: false };

    toggle = () => {
        this.setState({ open: ! this.state.open });
    };

    render() {
        return (
            <div className="screen-padding">
                <Titlebar
                    heading={"Calls"}
                    buttons={{
                        left: { title: "View voicenotes"},
                        right: { title: "Profile Category", action: this.toggle }
                    }}
                />
                <div className="menu-bar ptb-20">
                    <div>
                        <MenuItem item={{ title: "Personnel", values: ["Yesterday", "Today", "monday"] }} />
                        <MenuItem item={{ title: "Call date", values: ["Today", "Yesterday", "Last 7 days", "Select range"] }} />
                        <MenuItem item={{ title: "Profile category", values: ["Not yet profited", "Engine fault", "Break fault"] }} />
                        <MenuItem item={{ title: "Call status", values: ["Answered", "Voicenotes", "Dropped", "Missed"] }} />
                        <div className="search-form">
                            <SearchIcon className="search-icon" />
                            <input className="br-3 search bc-blue hover" />
                        </div>
                    </div>
                    <div className="menu-bar-right">
                        <p className="text-light mr-5">Viewing results</p>
                        <p className="text-main bold mr-20">1-10 <span className="text-light ml-5 mr-5">of</span>36</p>
                        <div className="arrow-icons">
                            <span className="arrow arrow-left mr-10 op-4 hover" />
                            <span className="arrow arrow-right" />
                        </div>
                    </div>
                </div>
                <ProfileCategoryOverlay open={this.state.open} toggle={this.toggle} />
                <Table />
            </div>
        )
    }

}

export default Calls;