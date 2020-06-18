import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/button";
import Table from "./table";
import MenuItem from "../../components/MenuItem/menuItem";
import ProfileCategoryOverlay from "./ProfileCategoryOverlay";
import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";
import SideNav from "../../components/SideNav/sidenav";
import Header from "../../components/Header/header";

class Calls extends Component {
  state = { open: false };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    return (
      <>
       <div>
          <SideNav />
        </div>
      <div className="screen-padding">
        <div className="title-bar">
          <div className="title">
            <h2>Calls</h2>
          </div>
          <div className="row">
            <Link to="/admin/voicenotes">
              <Button
                background="#F5F6FA"
                text="var(--text-color)"
                padding="12px 25px"
                className="mr-16 br-30"
              >
                View voicenotes
              </Button>
            </Link>
            <Button
              background="var(--text-color)"
              text="#fff"
              padding="12px 25px"
              className="br-30"
              onClick={this.toggle}
            >
              Profile category
            </Button>
          </div>
        </div>
        <div className="menu-bar ptb-20">
          <div>
            <MenuItem
              item={{
                title: "Personnel",
                values: ["Yesterday", "Today", "monday"],
              }}
            />
            <MenuItem
              item={{
                title: "Call date",
                values: ["Today", "Yesterday", "Last 7 days", "Select range"],
              }}
            />
            <MenuItem
              item={{
                title: "Profile category",
                values: ["Not yet profited", "Engine fault", "Break fault"],
              }}
            />
            <MenuItem
              item={{
                title: "Call status",
                values: ["Answered", "Voicenotes", "Dropped", "Missed"],
              }}
            />
            <div className="search-form">
              <SearchIcon className="search-icon" />
              <input className="br-3 search bc-blue hover" />
            </div>
          </div>
          <div className="menu-bar-right">
            <p className="text-light mr-5">Viewing results</p>
            <p className="text-main bold mr-20">
              1-10 <span className="text-light ml-5 mr-5">of</span>36
            </p>
            <div className="arrow-icons">
              <span className="arrow arrow-left mr-10 op-4 hover" />
              <span className="arrow arrow-right" />
            </div>
          </div>
        </div>
        <ProfileCategoryOverlay open={open} toggle={this.toggle} />
        <Table />
      </div>
    </>
    );
  }
}

export default Calls;
