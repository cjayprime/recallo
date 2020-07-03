import React, { Component } from "react";

import Titlebar from "../../components/TitleBar";
import MenuItem from "../../components/MenuItem/menuItem";
import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";
import Table from "./AAA";
// import DepartmentOverlay fro./Overlays/DepartmentOverlaylay";
// import Add from "./AddPersonnelOverlay";
import Add from "./Overlays/Add";
// import Edit from "./Overlays/Edit";
import Department from "./Overlays/Department";


class Personnel extends Component {
  state = {
    open: ""
  };

  toggle = (open) => {
    this.setState({ open: this.state.open ? "" : open });
  };

  componentDidMount(){
    const { getPersonnels } = this.props;

    getPersonnels();
  };

  render() {
    const { personnel, createPersonnel } = this.props;
    const { open } = this.state;
    const loading = personnel.loading.indexOf('personnel') >= 0;
    return (
      <>
        <div className="screen-padding">
          <Titlebar
            heading="Personnel"
            buttons={{
              left: { title: "Departments", action: () => this.toggle('department') },
              right: { title: "Add personnel", action: () => this.toggle('add') },
            }}
          />
          <div className="menu-bar ptb-20">
            <div>
              <MenuItem
                item={{ title: "Status", values: ["Active", "Inactive"] }}
              />
              <div className="search-form">
                <SearchIcon className="search-icon" />
                <input id="input" className="br-3 search bc-blue hover" />
              </div>
            </div>
            <div className="menu-bar-right">
              <p className="text-light mr-5">Viewing results</p>
              <p className="text-main bold mr-20">
                {!loading && <>1-10 <span className="text-light ml-5 mr-5">of</span>{personnel.all.length}</>}
              </p>
              <div className="arrow-icons">
                <span className="arrow arrow-left mr-10 op-4 hover" />
                <span className="arrow arrow-right" />
              </div>
            </div>
          </div>
          <Department
            open={open === "department"}
            toggle={() => {
              this.toggle('department');
            }}
          />
          <Add
            {...this.props}
            open={open === "add"}
            toggle={() => {
              this.toggle('add');
            }}
            submit={createPersonnel}
          />
          {
            loading
            ? 'Loading'
            : personnel.all.length === 0
              ? 'You have no personnels.'
              : <Table
                  {...this.props}
                  personnels={personnel.all}
                />
          }
        </div>
      </>
    );
  }
}

export default Personnel;
