import React, { Component } from "react";

import MenuItem from "../../components/MenuItem/menuItem";
import arrowLeft from "../../assets/img/arrow-left.png";
import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";
//import SideNav from "../../components/SideNav/sidenav";
import ProfileCallOverlay from "./../Calls/ProfileCallOverlay";
import Button from "../../components/Button/button";
import NewContactOverlay from "./../Contact/NewContactOverlay";


class ProfileCall extends Component {
  state = {open: false, open2: false };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  toggle2 = () => {
    this.setState({ open2: !this.state.open2 });
  };


  render() {
    const {open, open2 } = this.state;

    return (
      <>
       {/*
       <div>
          <SideNav />
        </div>
       */}
        <div className="previous-header mb-0">
          <div className="callID">
            <p className="light mb-8">
              <span className="text-blue mr-8">Calls</span>
              <span className="ml-8">Caller ID</span>
            </p>
            <h2 id="profCallHeader"  className="bold text-main">+2348051113453</h2>
          </div>
          <div className="callID-history">
              <div>
                <Button
                  background="#336799"
                  text="#fff"
                  padding="12px 25px"
                  className="mr-0 br-30"
                  onClick={this.toggle}
                >
                  Add new contact
                </Button>
              </div>
            <div style={{marginTop:-22}}>
              <p
                className="row-direction align-center cursor goback"
                onClick={this.goBack}
              >
                <img src={arrowLeft} alt="arrow left" />
                <h5 className="bold text-blue ml-8">Go back</h5>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="previous-header mb-0">
          <div className="callID">
           
          <h2 id="profCallHeader" className="bold text-main">Previous calls</h2>
          </div>
          <div className="callID-history">
            <div>
              <h3 id="profCallHeader" className="bold mb-4 text-main">12</h3>
              <p className="light text-light">Previous calls</p>
            </div>
            <div>
              <h3 id="profCallHeader" className="bold mb-4 text-main">4.3 mins</h3>
              <p className="light text-light">Average call time</p>
            </div>
            <div>
              <h3 id="profCallHeader" className="bold mb-4 text-main">1.2 mins</h3>
              <p className="light text-light">Average wait time</p>
            </div>
            
          </div>
        </div>
        <hr />
        <div className="screen-padding previous">          
          
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
                <input id="input" className="br-3 search bc-blue hover" />
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

          <table className="mtb-15">
            <tbody>
              <tr className="background-grey text-light table-head hover-grey">
                <td>Call date & time</td>
                <td>Personnel</td>
                <td>Call duration</td>
                <td>Call status</td>
                <td>Profile category</td>
                <td>Action</td>
              </tr>
              {Array.apply(null, Array(6)).map((a, i) => (
                <tr className="table-body text-main hover-grey">
                  <td>
                    Today<p className="text-light mt-5">12:03pm</p>
                  </td>
                  <td>Grace Audu</td>
                  <td>03:20</td>
                  <td>
                   {/* <label className="label yellow bold">Voicenote</label> */}
                   <p className="label-inactive">Inactive</p>
                  </td>
                  <td>Not yet profiled</td>
                  <td className="text-blue bold" onClick={this.toggle2}>
                      Profile call
                    </td>
                </tr>
              ))}
            </tbody>
            <NewContactOverlay open={open} toggle={this.toggle} />
            <ProfileCallOverlay open={this.state.open2} toggle={this.toggle2} />

          </table>
        </div>
      </>
    );
  }
}

export default ProfileCall;
