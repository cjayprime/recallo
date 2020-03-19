import React, { Component } from 'react';

import Titlebar from "../components/TitleBar/titlebar";
import MenuItem from "../components/MenuItem/menuItem";
import {ReactComponent as SearchIcon} from "../assets/img/search.svg";
import Table from "../components/Table/table";
import Modal from "../components/Overlay/overlay";

class Personnel extends Component {


    render() {

        return (
            <div className="screen-padding">
                <Titlebar
                    heading={"Personnel"}
                    buttons={{
                        left: "Departments",
                        right: "Add personnel",
                    }}
                />
                <div className="menu-bar ptb-20">
                    <div>
                        <MenuItem item={{ title: "Status", values: ["Active", "Inactive"] }} />
                        <div className="search-form">
                            <SearchIcon className="search-icon" />
                            <input className="br-3 search bc-blue hover" />
                        </div>
                    </div>
                    <div className="menu-bar-right">
                        <p className="text-light mr-5">Viewing results</p>
                        <p className="text-main bold mr-20">1-6 <span className="text-light ml-5 mr-5">of</span>6</p>
                        <div className="arrow-icons">
                            <span className="arrow arrow-left mr-10 op-4 hover" />
                            <span className="arrow arrow-right" />
                        </div>
                    </div>
                </div>
                <Table/>
            </div>
        )
    }
}

export default Personnel;