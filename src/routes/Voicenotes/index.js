import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProfileCategory from "./../Calls/ProfileCategory";
import ProfileCall from "./../Calls/ProfileCall";
import ViewProfile from "./../Calls/ViewProfile";

import Button from "../../components/Button/button";
import MenuItem from "../../components/MenuItem/menuItem";

import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";



class VoiceNotes extends Component {
  state = {
    open: "",
    call: {},
    index: 0
  };

  toggle = (open, call, index) => {
    this.setState({
      open: this.state.open ? "" : open,
      call: call ? call : {},
      index: typeof index !== 'undefined' ? index : 0
    });
  };

  componentDidMount(){
    const { getVoiceNotes } = this.props;
    getVoiceNotes('all');
  };
  
  render() {
    const { open, call, index } = this.state;
    const { voicenote: { all } } = this.props;

    return (
      <>
        <div className="screen-padding">
          <div className="title-bar">
            <div className="title">
              <h2>Voicenotes</h2>
            </div>
            <div className="row" id="calltopbutton">
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
                className="blue-hover br-30"
                onClick={() => this.toggle('profile-category')}
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
                  title: "vn date",
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
                <td>CallerID</td>
                <td>Call date & time</td>
                <td>Personnel</td>
                <td>Note duration</td>
                <td>Recording</td>
                <td>Profile category</td>
                <td>Action</td>
              </tr>
              {all.map((vn, i) => (
                <tr key={i} className="table-body text-main hover-grey">
                  <td className="text-blue bold">
                    <Link to={"/admin/calls/" + vn.caller_id}>{vn.caller_id}</Link>
                  </td>
                  <td>
                    {vn.recording_date}
                    <p className="text-light mt-5">
                      {vn.recording_time}
                    </p>
                  </td>
                  <td style={{width:130}}>Grace Audu</td>
                  <td>03:20</td>
                  <td>
                    <audio className="audioPlayer" autoPlay controls loop>
                      <source src="#" type="audio/mpeg" />
                    </audio>
                  </td>
                  <td style={{width:150}}>{vn.call_status}</td>
                  <td className="text-blue bold cursor" onClick={() => {
                    vn.call_status
                    ? this.toggle('profile-call', vn, i)
                    : this.toggle('view-profile', vn, i)
                  }}>
                    {
                      vn.call_status
                      ? 'Profile call'
                      : 'View Profile'
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <ProfileCategory {...this.props} open={open === 'profile-category'} toggle={this.toggle} />
          <ProfileCall
            {...this.props}
            open={open === "profile-call"}
            call={call}
            next={() => {
              this.setState({
                open: '',
              }, () => {
                this.toggle(
                  'profile-call',
                  typeof all[index+1] !== 'undefined' ? all[index+1] : call,
                  index
                );
              });
            }}
            toggle={() => {
              this.toggle('profile-call');
            }}
          />
          <ViewProfile
            open={open === "view-profile"}
            call={call}
            toggle={() => {
              this.toggle('view-profile');
            }}
          />
        </div>
      </>
    );
  }
}

export default VoiceNotes;
