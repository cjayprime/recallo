import React, { Component } from "react";
import Add from "./Overlays/Add";

class Table extends Component {
  state = { open: false, id: 1 };

  toggle = id => {
    const { open } = this.state;
    this.setState({ open: !open, id });
  };
  
  render() {
    const { open } = this.state;
    const { personnels, updatePersonnel } = this.props;
    return (
      <>
        <table className="mtb-15">
          <tbody>
            <tr className="background-grey text-light table-head hover-grey">
              <td />
              
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email Address</td>
              <td>Department</td>
              {/* <td>Mobile Number</td> */}
              <td>Status</td>
              <td>Action</td>
            </tr>
            {
              personnels.map((personnel, i) => (
                <tr key={i} className="table-body text-main hover-grey">
                  <td className="text-blue bold" />
                  
                  <td>{/*<div className="tableIcon" />*/}{personnel.name.split(' ')[0]}</td>
                  <td>{personnel.name.split(' ')[1]}</td>
                  <td>{personnel.email}</td>
                  <td>{personnel.department ? personnel.department.department : 'Unspecified'}</td>
                  
                  {/* <td>{personnel.mobile}</td> */}

                  <td>
                    {/* <label for="active" className="label-inactive">Active</label>*/}
                    <p className="label-active">{personnel.status}</p>
                  </td>
                  <td onClick={() => this.toggle(personnel._id)} className="text-blue bold cursor">Edit</td>
                </tr>
                
              ))
            }
          </tbody>
        </table>
        <Add
          {...this.props}
          id={this.state.id}
          edit={true}
          open={open}
          toggle={this.toggle}
          submit={updatePersonnel}
        />
      </>
    );
  }
}

export default Table;
