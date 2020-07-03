import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileCallOverlay from "./ProfileCall";
import ViewProfileOverlay from "./ViewProfile";

class Table extends Component {
  state = {
    open: ""
  };

  toggle = (open) => {
    this.setState({ open: this.state.open ? "" : open });
  };

  render() {
    const { all } = this.props;
    return (
      <>
        <table className="mtb-15">
          <tbody>
            <tr id="callTableHeader" className="background-grey text-light table-head hover-grey" >
              <td>Call ID</td>
              <td>Call date & time</td>
              <td>Personnel</td>
              <td>Call duration</td>
              <td>Call status</td>
              <td>Profile category</td>
              <td>Action</td>
            </tr>
            {
              all.map((call, i) => (
                <tr key={i} id="callTableHeader" className="table-body text-main hover-grey">
                  <td className="text-blue bold">
                    <Link to={{
                      pathname: "/admin/calls/" + call.caller_id,
                    }}>
                      {call.caller_id}
                    </Link>
                  </td>
                  <td>
                    {call.end_time.split(' ')[0]}
                    <p className="text-light mt-5">
                      {call.end_time.split(' ')[1]}
                    </p>
                  </td>
                  <td>{call.personnel_name}</td>
                  <td>{call.call_duration}</td>
                  <td>
                  {/* <label className="label yellow bold">Answered</label> */}
                  <span className={"label " + (call.call_status === "answered" ? "voicenote" : "missed")}>
                    {call.call_status.substr(0, 1).toUpperCase() + '' + call.call_status.substr(1)}
                  </span>
                  </td>
                 
                  <td>
                     {/*
    
                                      <p className="label-inactive"> Engine fault</p>

                   */}
                  <span class="label fault">Engine fault</span>

                   
                  </td>

                  <td className="text-blue bold cursor" onClick={() => {
                    call.call_status
                    ? this.toggle('profile-call')
                    : this.toggle('view-profile')
                  }}>
                    {
                      call.call_status
                      ? 'Profile call'
                      : 'View Profile'
                    }
                  </td>
                </tr>
              ))
            }
            {/* <<tr className="table-body text-main hover-grey">
              <td className="text-blue bold">
                <Link to="/admin/previous">+2348103153845</Link>
              </td>
              <td>
                Today<p className="text-light mt-5">12:03pm</p>
              </td>
              <td>Grace Audu</td>
              <td>03:20</td>
              <td>
              {/* <label className="label yellow bold">Dropped</label> /}
              <p className="label-dropped">Dropped</p>
              </td>
              <td>Not yet profiled</td>
              <td className="text-blue bold cursor" onClick={() => this.toggle('view-profile')}>
                View Profile
              </td>
            </tr>
            tr className="table-body text-main hover-grey">
              <td className="text-blue bold">
                <Link to="/admin/profile-calls">+2348103153845</Link>
              </td>
              <td>
                Today<p className="text-light mt-5">12:03pm</p>
              </td>
              <td>Grace Audu</td>
              <td>03:20</td>
              <td>
              {/* <label className="label yellow bold">Answered</label> /}
              <p className="label-active">Answered</p>

              </td>
              <td>
              <p className="label-inactive"> Engine fault</p>
              </td>
              <td className="text-blue bold cursor" onClick={this.toggle}>
                Profile call
              </td>
            </tr>
            <tr className="table-body text-main hover-grey">
              <td className="text-blue bold">
                <Link to="/admin/previous">+2348103153845</Link>
              </td>
              <td>
                Today<p className="text-light mt-5">12:03pm</p>
              </td>
              <td>Grace Audu</td>
              <td>03:20</td>
              <td>
              {/* <label className="label yellow bold">Voicenote</label> /}
              <p className="label-voicenote">Voicenote</p>
              </td>
              <td>Not yet profiled</td>
              <td className="text-blue bold cursor" onClick={this.toggle2}>
                View Profile
              </td>
            </tr>
            <tr className="table-body text-main hover-grey">
              <td className="text-blue bold">
                <Link to="/admin/previous">+2348103153845</Link>
              </td>
              <td>
                Today<p className="text-light mt-5">12:03pm</p>
              </td>
              <td>Grace Audu</td>
              <td>03:20</td>
              <td>
              {/* <label className="label yellow bold">Missed</label> /}
              <p className="label-missed">Missed</p>
              </td>
              <td>
              <p className="label-inactive"> Break fault</p>
              </td>
              <td className="text-blue bold cursor" onClick={this.toggle2}>
                View Profile
              </td>
            </tr>
            <tr className="table-body text-main hover-grey">
              <td className="text-blue bold">
                <Link to="/admin/previous">+2348103153845</Link>
              </td>
              <td>
                Today<p className="text-light mt-5">12:03pm</p>
              </td>
              <td>Grace Audu</td>
              <td>03:20</td>
              <td>
              {/* <label className="label yellow bold">Dropped</label> /}
              <p className="label-dropped">Dropped</p>
              </td>
              <td>Not yet profiled</td>
              <td className="text-blue bold cursor" onClick={this.toggle2}>
                View Profile
              </td>
            </tr> */}
          </tbody>
        </table>
        <ProfileCallOverlay
          open={this.state.open === "profile-call"}
          toggle={() => {
            this.toggle('profile-call');
          }}
        />
        <ViewProfileOverlay
          open={this.state.open === "view-profile"}
          toggle={() => {
            this.toggle('view-profile');
          }}
        />
      </>
    );
  }
}

export default Table;
