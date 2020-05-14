import React, { Component } from "react"
// import { Link } from "react-router-dom";

class Table extends Component {
  render() {
    return (
      <table className="mtb-15">
        <tbody>
          <tr className="background-grey text-light table-head hover-grey">
            <td />
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email Address</td>
            <td>Department</td>
            <td>Mobile Number</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
          <tr className="table-body text-main hover-grey">
            <td className="text-blue bold" />
            <td>Andrew</td>
            <td>Biodun</td>
            <td>andrewb@recallo.services</td>
            <td>Unspecified</td>
            <td>
              <label className="label yellow bold">Active</label>
            </td>
            <td>+2348051113453</td>
            <td className="text-blue bold cursor">Edit</td>
          </tr>
          <tr className="table-body text-main hover-grey">
            <td className="text-blue bold" />
            <td>Andrew</td>
            <td>Biodun</td>
            <td>andrewb@recallo.services</td>
            <td>Unspecified</td>
            <td>
              <label className="label yellow bold">Active</label>
            </td>
            <td>+2348051113453</td>
            <td className="text-blue bold cursor">Edit</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
