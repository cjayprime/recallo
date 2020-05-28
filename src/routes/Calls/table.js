import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileCallOverlay from "./ProfileCallOverlay";
import ViewProfileOverlay from "./ViewProfileOverlay";

class Table extends Component {
  state = { open: false, open2: false };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  toggle2 = () => {
    this.setState({ open2: !this.state.open2 });
  };

  render() {
    return (
      <table className="mtb-15">
        <tbody>
          <tr className="background-grey text-light table-head hover-grey">
            <td>Call ID</td>
            <td>Call date & time</td>
            <td>Personnel</td>
            <td>Call duration</td>
            <td>Call status</td>
            <td>Profile category</td>
            <td>Action</td>
          </tr>
          <tr className="table-body text-main hover-grey">
            <td className="text-blue bold">
              <Link to="/admin/profile-calls">+2348103153845</Link>
            </td>
            <td>
              Today<p className="text-light mt-5">12:03pm</p>
            </td>
            <td>Grace Audu</td>
            <td>03:20</td>
            <td>
              <label className="label yellow bold">Voicenote</label>
            </td>
            <td>Not yet profiled</td>
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
              <label className="label yellow bold">Voicenote</label>
            </td>
            <td>Not yet profiled</td>
            <td className="text-blue bold cursor" onClick={this.toggle2}>
              View Profile
            </td>
          </tr>
        </tbody>
        <ProfileCallOverlay open={this.state.open} toggle={this.toggle} />
        <ViewProfileOverlay open={this.state.open2} toggle={this.toggle2} />
      </table>
    );
  }
}

export default Table;
