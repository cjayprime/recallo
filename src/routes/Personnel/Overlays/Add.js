import React, { Component } from "react";

import Overlay from "../../../components/Overlay";
import FormField from "../../../components/Form";
import Button from "../../../components/Button/button";

import Notification from "../../../utils/notification";

const statuses = ["Active", "Inactive"];

const departments = ["some department"];

const skills = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];

class Add extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    status: 1,
    skill: 1,
    department: 'Marketing',
    schedule: [],
    error: ''
  };

  componentDidUpdate(prevProps){
    if(this.props.open && prevProps.open !== this.props.open){
      const { getPersonnels, edit, id } = this.props;

      if(edit){
        getPersonnels(5, data => {
          this.setState({
            firstname: "",
            lastname: "",
            email: "",
            status: 1,
            skill: 1,
            department: 'Marketing',
            schedule: [],
          });
        });
      }
    }
  };

  handleChange = (value, name, error) => {
    if(name)
    this.setState({
      [name]: value,
      error,
    });
  };

  submit = () => {
    const { submit } = this.props;
    const data = this.state;
    const { error } = data;
    
    const dataKeys = Object.keys(data);
    console.log(error, data, dataKeys.filter((state) => state === "error" || !!data[state]).length, dataKeys.length);
    if (
      !error &&
      dataKeys.filter((state) => state == "error" || !!data[state]).length === dataKeys.length
    ) {
      submit({
        name: data.firstname + ' ' + data.lastname,
        email: data.email,
        status: data.status,
        skill_level: data.skill,
        mobile: "2930220",
        department: data.department,
        schedule: data.schedule
      });
    } else {
      Notification.error(
        error || "Please fill in the form correctly."
      );
    }
  };

  setSchedule = (index) => {
    return () => {
      var schedule = this.state.schedule;
      if(schedule.findIndex(v => v === index) >= 0){
        schedule = schedule.filter(v => v !== index);
      }else{
        schedule.push(index);
      }

      this.setState({schedule});
    }
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      status,
      skill,
      department,
      schedule
    } = this.state;
    const { open, toggle, edit } = this.props;

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

        <div className="addPersonnelContainer">
          <h4 className="mb-8">{edit ? 'Edit' : 'Add'} Personnel</h4><br/><br/><br/>
          {/* {<h6 className="light text-light mb-32"></h6>} */}
          <div>
            <div className="row mb-24">
              <div className="col-7">
                {/*<span className="formSpan">First Name</span>*/}
                <FormField
									required={true}
                  labelTitle="First name"
                  labelClass="profile-label"
                  className="br-8 profile-input p-12"
                  name='firstname'
                  value={firstname}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-7">
              {/*<span className="formSpan">Last Name</span>*/}
                <FormField
									required={true}
                  labelTitle="Last name"
                  labelClass="profile-label"
                  className="br-8 profile-input p-12"
                  name='lastname'
                  value={lastname}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {/*<span className="formSpan">Email</span>*/}
            <FormField
							required={true}
              labelTitle="Email"
              labelClass="profile-label"
              className="br-8 profile-input p-12 mb-24"
              type="email"
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <div className="row mb-24">
              <div className="col-7">
              {/*<span className="formSpan">Status</span>*/}
                <FormField
									required={true}
                  type="number"
                  labelTitle="Status"
                  labelClass="profile-label"
                  selectClass="custom-select"
                  options={statusItem}
                  className="br-8 profile-input p-12"
                  name='status'
                  value={status}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-7">
              {/*<span className="formSpan">Department</span>*/}
                <FormField
									required={true}
                  type="select"
                  labelTitle="Department"
                  labelClass="profile-label"
                  selectClass="custom-select"
                  options={departmentItem}
                  className="br-8 profile-input p-12"
                  name='department'
                  value={department}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row mb-24">
              <div className="col-7">
              {/*<span className="formSpan">Skill Level</span>*/}
                <FormField
									required={true}
                  type="number"
                  labelTitle="Skill level"
                  labelClass="profile-label"
                  selectClass="custom-select"
                  options={skillItem}
                  className="br-8 profile-input p-12"
                  name='skill'
                  value={skill}
                  onChange={this.handleChange}
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
              <form className="mb-32 row-direction" id="addPersonnelForm">
                <div className="checkbox">
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Monday</h5>
                    <input
                      type="checkbox"
                      checked={schedule.findIndex((v) => v === 1) >= 0}
                      onChange={this.setSchedule(1)}
                    />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Tuesday</h5>
                    <input
                      type="checkbox"
                      checked={schedule.findIndex((v) => v === 2) >= 0}
                      onChange={this.setSchedule(2)}
                    />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Wednesday</h5>
                    <input
                      type="checkbox"
                      checked={schedule.findIndex((v) => v === 3) >= 0}
                      onChange={this.setSchedule(3)}
                    />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Thursday</h5>
                    <input
                      type="checkbox"
                      checked={schedule.findIndex((v) => v === 4) >= 0}
                      onChange={this.setSchedule(4)}
                    />
                    <span className="check-mark" />
                  </label>
                </div>
                <div className="checkbox " style={{ marginLeft: 100 }}>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Friday</h5>
                    <input
                      type="checkbox"
                      checked={schedule.findIndex((v) => v === 5) >= 0}
                      onChange={this.setSchedule(5)}
                    />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Saturday</h5>
                    <input
                      type="checkbox"
                      checked={schedule.findIndex((v) => v === 6) >= 0}
                      onChange={this.setSchedule(6)}
                    />
                    <span className="check-mark" />
                  </label>
                  <label className="cursor mb-16 checkbox-label">
                    <h5 className="text-blue light">Sunday</h5>
                    <input
                      type="checkbox"
                      checked={schedule.findIndex((v) => v === 7) >= 0}
                      onChange={this.setSchedule(7)}
                    />
                    <span className="check-mark" />
                  </label>
                </div>
              </form>
            </div>
            <Button
              className="br-30 account-button orange-hover"
              padding="12px 30px"
              background="var(--text-color)"
              text="#fff"
              onClick={this.submit}
            >
             <h6 className="addPersonnelButton">{edit ? 'Edit' : 'Add'} personnel</h6> 
            </Button>
          </div>
        </div>
    </Overlay>

   );
  }
}

export default Add;
