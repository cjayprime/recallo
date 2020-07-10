import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileCall from "./ProfileCall";
import ViewProfile from "./ViewProfile";

class Table extends Component {
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

  render() {
    const { all } = this.props;
    const { call, open, index } = this.state;
    return (
      <>
        <table className="mtb-15">
          <tbody>
            <tr id="callTableHeader" className="background-grey text-light table-head hover-grey" >
              <td>CallerID</td>
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
                    {call.final_state === 0 ? <>Has Events</> : ''}
                    <span className={"label " + (call.call_status === "answered" ? "voicenote" : "missed")}>
                      {call.call_status.substr(0, 1).toUpperCase() + '' + call.call_status.substr(1)}
                    </span>
                  </td>
                  <td>
                    {/*<p className="label-inactive"> Engine fault</p>*/}
                    <span className="label fault">Engine fault</span>
                  </td>
                  <td className="text-blue bold cursor" onClick={() => {
                    call.call_status
                    ? this.toggle('profile-call', call, i)
                    : this.toggle('view-profile', call, i)
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
          </tbody>
        </table>
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
      </>
    );
  }
}

export default Table;
