import React, { Component } from "react";
import Overlay from "../../components/Overlay";
import FormField from "../../components/Form";
import Button from "../../components/Button/button";

class DepartmentOverlay extends Component {
  render() {
    const { open, toggle } = this.props;

    return (
      <Overlay open={open} toggle={toggle}>
        <div>
          <h4 className="mb-8">Add Department</h4>
          {/* <h6 className="light text-light mb-32"></h6> */}
          <div>
            <FormField
              labelTitle="Enter name of department"
              labelClass="profile-label"
              className="br-8 profile-input p-12 mb-16"
            />
            <form className="mb-32">
              <label>
                <h6 className="mb-8 light profile-label">
                  Give a short description for the department
                </h6>
              </label>
              <textarea
                className="profile-input br-8 p-12"
                style={{ overflow: "hidden", height: 100 }}
              />
            </form>
            <Button
              className="br-30"
              padding="12px 60px"
              background="var(--text-color)"
              text="#fff"
            >
              Save
            </Button>
          </div>
        </div>
        <hr className="mt-40 mb-24" />
        <div>
          <h4 className="mb-8">Edit existing departments</h4>
          <h6 className="light text-light mb-32">
            You can rename, add to description or delete previous departments
          </h6>
          <div className="row-direction existing-category-card mb-16">
            <div className="flex-3 p-16 background-darkgrey">
              <h5 className="mb-8">Sales</h5>
              <h6 className="light text-light">
                Department handles matters regarding purchases and rentals
              </h6>
            </div>
            <div className="flex-1 p-16">
              <p>No of personnels </p>
              <p className="mb-8">in department</p>
              <h3>6</h3>
            </div>
          </div>
          <div className="row-direction existing-category-card mb-16">
            <div className="flex-3 p-16 background-darkgrey">
              <h5 className="mb-8">Technical</h5>
              <h6 className="light text-light">
                Department handles matters regarding vehicle parts and knowledge
              </h6>
            </div>
            <div className="flex-1 p-16">
              <p>No of personnels </p>
              <p className="mb-8">in department</p>
              <h3>4</h3>
            </div>
          </div>
        </div>
      </Overlay>
    );
  }
}

export default DepartmentOverlay;
