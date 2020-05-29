import React, { Component } from "react";

import Overlay from "../../components/Overlay";
import FormField from "../../components/Form";
import Button from "../../components/Button/button";

const statuses = ["Active", "Inactive"];

const departments = ["some department"];

const skills = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];

class PersonnelOverlay extends Component {
  render() {
    const { open, toggle } = this.props;

    const statusItem = statuses.map((status) => (
      <option key={status}>{status}</option>
    ));

    const departmentItem = departments.map((department) => (
      <option key={department}>{department}</option>
    ));

    const skillItem = skills.map((skill) => (
      <option key={skill}>{skill}</option>
    ));

    return (
      <Overlay open={open} toggle={toggle}>
        <div>
          <h4 className="mb-8">Add Personnel</h4>
          {/* {<h6 className="light text-light mb-32"></h6>} */}
          <div>
            <div className="row mb-24">
              <div className="col-7">
                <FormField
                  labelTitle="First name"
                  labelClass="profile-label"
                  className="br-8 profile-input p-12"
                />
              </div>
              <div className="col-7">
                <FormField
                  labelTitle="Last name"
                  labelClass="profile-label"
                  className="br-8 profile-input p-12"
                />
              </div>
            </div>
            <FormField
              labelTitle="Email"
              labelClass="profile-label"
              className="br-8 profile-input p-12 mb-24"
            />
            <div className="row mb-24">
              <div className="col-7">
                <FormField
                  type="select"
                  labelTitle="Status"
                  labelClass="profile-label"
                  selectClass="custom-select"
                  options={statusItem}
                  className="profile-input"
                />
              </div>
              <div className="col-7">
                <FormField
                  type="select"
                  labelTitle="Department"
                  labelClass="profile-label"
                  selectClass="custom-select"
                  options={departmentItem}
                  className="profile-input"
                />
              </div>
            </div>
            <div className="row mb-24">
              <div className="col-7">
                <FormField
                  type="select"
                  labelTitle="Skill level"
                  labelClass="profile-label"
                  selectClass="custom-select"
                  options={skillItem}
                  className="profile-input"
                />
              </div>
              <div className="col-7 pt-23">
                <p className="light text-light">
                  Call are routed in order of skill level. Skill level 5 is the
                  highest level and gets calls frequently while skill level 1 is
                  the lowest level
                </p>
              </div>
            </div>
            <div className="personnel-checkbox">
              <h6 className="mb-16 light profile-label">Days active</h6>
              <form className="mb-32 row-direction">
                <div className="checkbox ">
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Monday</h5>
                    <input type="checkbox" checked="checked" />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Tuesday</h5>
                    <input type="checkbox" />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Wednesday</h5>
                    <input type="checkbox" checked="checked" />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Thursday</h5>
                    <input type="checkbox" />
                    <span className="check-mark" />
                  </label>
                </div>
                <div className="checkbox " style={{ marginLeft: 100 }}>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Friday</h5>
                    <input type="checkbox" />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Saturday</h5>
                    <input type="checkbox" checked="checked" />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Sunday</h5>
                    <input type="checkbox" />
                    <span className="check-mark" />
                  </label>
                </div>
              </form>
            </div>
            <Button
              className="br-30"
              padding="12px 30px"
              background="var(--text-color)"
              text="#fff"
            >
              Add personnel
            </Button>
          </div>
        </div>
      </Overlay>
    );
  }
}

export default PersonnelOverlay;
