import React, { Component } from "react";

import Titlebar from "../../components/TitleBar";
import MenuItem from "../../components/MenuItem/menuItem";
import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";
import Table from "./table";
import DepartmentOverlay from "./DepartmentOverlay";
import PersonnelOverlay from "./AddPersonnelOverlay";
import SideNav from "../../components/SideNav/sidenav";
import Header from "../../components/Header/header";


class Personnel extends Component {
  state = { open: false, open2: false };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  toggle2 = () => {
    const { open2 } = this.state;
    this.setState({ open2: !open2 });
  };

  render() {
    const { open, open2 } = this.state;
    return (
      <>
      <div>

      <SideNav />
      </div>
      
      <div className="screen-padding" style={{width:1020, marginLeft:320}}>
        <Titlebar
          heading="Personnel"
          buttons={{
            left: { title: "Departments", action: this.toggle },
            right: { title: "Add personnel", action: this.toggle2 },
          }}
        />
        <div className="menu-bar ptb-20">
          <div>
            <MenuItem
              item={{ title: "Status", values: ["Active", "Inactive"] }}
            />
            <div className="search-form">
              <SearchIcon className="search-icon" />
              <input className="br-3 search bc-blue hover" />
            </div>
          </div>
          <div className="menu-bar-right">
            <p className="text-light mr-5">Viewing results</p>
            <p className="text-main bold mr-20">
              1-6 <span className="text-light ml-5 mr-5">of</span>6
            </p>
            <div className="arrow-icons">
              <span className="arrow arrow-left mr-10 op-4 hover" />
              <span className="arrow arrow-right" />
            </div>
          </div>
        </div>
        <DepartmentOverlay open={open} toggle={this.toggle} />
        <PersonnelOverlay open={open2} toggle={this.toggle2} />
        <Table />
      </div>
    </>
    );
  }
}

export default Personnel;
