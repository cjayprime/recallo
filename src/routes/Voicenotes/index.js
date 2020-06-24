import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button/button";
import MenuItem from "../../components/MenuItem/menuItem";
import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";
import SideNav from "../../components/SideNav/sidenav";

class VoiceNotes extends Component {
  state = { open: false };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    return (
      <>
       <div>

       <SideNav />
      </div>

      <div className="screen-padding">
        <div className="title-bar">
          <div className="title">
            <h2>Voicenotes</h2>
          </div>
          <div className="row">
            <Link to="/admin/calls">
              <Button
                background="#F5F6FA"
                text="var(--text-color)"
                padding="12px 25px"
                className="mr-16 br-30"
              >
                View calls
              </Button>
            </Link>
            <Button
              background="var(--text-color)"
              text="#fff"
              padding="12px 25px"
              className="br-30"
              click={this.toggle}
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
            <div className="search-form">
              <SearchIcon className="search-icon" />
              <input id="input" className="br-3 search bc-blue hover" />
            </div>
          </div>
          <div className="menu-bar-right">
            <p className="text-light mr-5">Viewing results</p>
            <p className="text-main bold mr-20">
              5<span className="text-light ml-5 mr-5">of</span>5
            </p>
            <div className="arrow-icons">
              <span className="arrow arrow-left mr-10 op-4 hover" />
              <span className="arrow arrow-right" />
            </div>
          </div>
        </div>
        <table className="mtb-15">
          <tbody>
            <tr className="background-grey text-light table-head hover-grey">
              <td>CallID</td>
              <td>Call date & time</td>
              <td>Personnel</td>
              <td>Note duration</td>
              <td>Recording</td>
              <td>Profile category</td>
              <td>Action</td>
            </tr>
            {Array.apply(null, Array(6)).map((i) => (
              <tr key={i} className="table-body text-main hover-grey">
                <td className="text-blue bold">
                  <Link to="/admin/previous">+2348103153845</Link>
                </td>
                <td>
                  Today<p className="text-light mt-5">12:03pm</p>
                </td>
                <td>Grace Audu</td>
                <td>03:20</td>
                <td>
                  <audio className="audioPlayer" autoPlay controls loop>
                    <source src="#" type="audio/mpeg" />
                  </audio>
                </td>
                <td>Not yet profiled</td>
                <td className="text-blue bold">Profile call</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
    );
  }
}

export default VoiceNotes;
