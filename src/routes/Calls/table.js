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
    const { all } = this.props;
    console.log(this.props.all)
    return (
      <>
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
            {
              all.map((call, i) => (
                <tr key={i} className="table-body text-main hover-grey">
                  <td className="text-blue bold">
                    <Link to={{
                      pathname: "/admin/calls/" + call.reference_no,
                      // state: {reference_no: call.reference_no}
                    }}>
                      {call.did_called}
                    </Link>
                  </td>
                  <td>
                    {/* Today<p className="text-light mt-5">12:03pm</p> */}
                    <p className="text-light mt-5">{call.end_time.split(' ')[1]}</p>
                  </td>
                  <td>{call.personnel_name}</td>
                  <td>{call.call_duration}</td>
                  <td>
                  {/* <label className="label yellow bold">Answered</label> */}
                  <p className={"label-" + (call.call_status === "answered" ? "voicenote" : "missed")}>
                    {call.call_status.substr(0, 1).toUpperCase() + '' + call.call_status.substr(1)}
                  </p>
                  </td>
                  <td>
                  <p className="label-inactive"> Engine fault</p>
                  </td>
                  <td className="text-blue bold cursor" onClick={this.toggle}>
                    Profile call
                  </td>
                </tr>
              ))
            }
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
              {/* <label className="label yellow bold">Dropped</label> */}
              <p className="label-dropped">Dropped</p>
              </td>
              <td>Not yet profiled</td>
              <td className="text-blue bold cursor" onClick={this.toggle2}>
                View Profile
              </td>
            </tr>
            {/* <tr className="table-body text-main hover-grey">
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
        <ProfileCallOverlay open={this.state.open} toggle={this.toggle} />
        <ViewProfileOverlay open={this.state.open2} toggle={this.toggle2} />
      </>
    );
  }
}

export default Table;
