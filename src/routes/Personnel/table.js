import React, { Component } from "react";
import EditPersonnelOverlay from "./EditPersonnelOverlay";

// import { Link } from "react-router-dom";

class Table extends Component {
  state = { open: false };


  toggle = () => {
   // alert(333);
    const { open } = this.state;
    this.setState({ open: !open });
    
  };
  render() {
    const { open } = this.state;

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
            
            <td><div className="tableIcon" />Andrew</td>
            <td>Biodun</td>
            <td>andrewb@recallo.services</td>
            <td>Unspecified</td>
            
            <td>+2348051113453</td>

            <td>
              {/* <label for="active" className="label-inactive">Active</label>*/}
              <p className="label voicenote">Active</p>
            </td>
            <td onClick={this.toggle} className="text-blue bold cursor">Edit</td>
          </tr>
          <tr className="table-body text-main hover-grey">
            <td className="text-blue bold" />
            <td>  <div className="tableIcon" /> Andrew</td>
            <td>Biodun</td>
            <td>andrewb@recallo.services</td>
            <td>Unspecified</td>
           
            <td>+2348051113453</td>
            <td>
              {/*<label for="inactive" className="label-inactive">Inactive</label>*/}
              <p className="label fault">Inactive</p>

            </td>
            <td onClick={this.toggle} className="text-blue bold cursor">Edit</td>
          </tr>
        </tbody>
        <EditPersonnelOverlay open={open} toggle={this.toggle} />

      </table>

      
    );
  }
}

export default Table;
