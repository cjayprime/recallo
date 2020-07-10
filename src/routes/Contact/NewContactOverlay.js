import React, { Component } from "react";
import Overlay from "../../components/Overlay";
import TextInput from "../../components/Form/TextInput";
import Button from "../../components/Button/button";
import flag from "../../assets/img/Artboard-6.svg";


class NewContactOverlay extends Component {
  state = {
    name: "",
    mobile: "",
    email: "",
    company: "",
    error: null,
  };

  handleChange = (value, name, error) => {
    this.setState({ [name]: value, error });
  };

  render() {
    const { open, toggle } = this.props;
    const { name, mobile, email, company } = this.state;
    return (
      <Overlay open={open} toggle={toggle}>
        <div>
          <h4 className="mb-40">Add new contact</h4>
          <form>
            <TextInput
              name="name"
              labelTitle="Name"
              labelClass="profile-label"
              className="mb-24 br-8 profile-input p-12"
              onChange={this.handleChange}
              value={name}
            />

          
          <div id="ContactFlagDiv">
          <img src={flag} alt="thrash" className="flag-icon" />
          <span id="contactArrowDown" class="arrow-down ml-5"></span>
          </div>

            <TextInput
            id="phoneInput"
             name="mobile"
              labelTitle="Phone number"
              labelClass="profile-label"
              className="mb-24 br-4 profile-input p-12"
              onChange={this.handleChange}
              value={mobile}
            />
            <TextInput
              labelTitle="Email address"
              type="email"
              name="email"
              labelClass="profile-label"
              className="mb-24 br-8 profile-input p-12"
              onChange={this.handleChange}
              value={email}
            />
            <TextInput
              labelTitle="Company name"
              name="company"
              labelClass="profile-label"
              className="br-8 profile-input p-12"
              onChange={this.handleChange}
              value={company}
            />
            <div style={{marginTop:100}}>
            <Button
              className="br-30 account-button orange-hover"
              padding="12px 220px"
              background="var(--text-color)"
              text="#fff"
            >
             <h6 className="Bold">Save</h6> 
            </Button>
            </div>
          </form>
        </div>
      </Overlay>
    );
  }
}

export default NewContactOverlay;
