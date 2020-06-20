import React, { Component } from "react";

import logo from "../../../assets/img/appLogo.png";
import TextInput from "../../../components/Form/TextInput";
import Button from "../../../components/Button/button";

class BusinessInformation extends Component {
  continue = (e) => {
    const { nextStep } = this.props;
    e.preventDefault();
    nextStep();
  };

  render() {
    const { form, handleChange } = this.props;
    const {
      name,
      email,
      address,
      people,
      rc,
    } = form;
    return (
      <div>
        <header>
          <div className="app-header">
            <div>
              <img className="logo" src={logo} alt="Recallo logo" />
            </div>
          </div>
        </header>
        <div className="onboard">
          <div className="onboard-welcome">
            <h1 className="bold mb-24">Welcome to Recallo</h1>
            <h5 className="light text-light">
              In a few steps, your account will be up and running. <br /> <br />
              Let's get started.
            </h5>
          </div>
          <div className="onboard-info">
            <div className="onboard-title">
              <h2 className="light text-main">Business Information</h2>
              <div className="row-direction align-center">
                <p className="text-main bold mr-8">2 of 3</p>
                <div className="row-direction">
                  <p className="b-bar-1" />
                  <p className="b-bar-2" />
                  <p className="b-bar-3" />
                </div>
              </div>
            </div>
            <hr />
            <form>
              <div className="business-info">
                <div className="business-info-1">
                  <div className="col-7">
                    <TextInput
                      labelTitle="Business name"
                      className="onboard-input br-4 mb-32"
                      labelClass="auth-label"
                      type="text"
                      name="name"
                      value={name}
                      form={form}
                      onChange={handleChange}
                    />
                    <TextInput
                      labelTitle="Business email"
                      className="onboard-input br-4"
                      labelClass="auth-label"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-7">
                    <TextInput
                      labelTitle="Business address"
                      className="onboard-textarea"
                      type="textarea"
                      labelClass="auth-label"
                      name="address"
                      value={address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="business-info-2">
                  <div className="col-7">
                    <TextInput
                      labelTitle={<span>Business RC No <i>(if registered)</i></span>}
                      className="onboard-input br-4"
                      type="text"
                      name="rc"
                      value={rc}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-7">
                    <TextInput
                      className="onboard-input br-4"
                      labelTitle="How many people with you at this business?"
                      type="number"
                      name="people"
                      value={people}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Button
                    onClick={this.continue}
                    className="blue-button br-8"
                    type="submit"
                    padding="10px 32px"
                  >
                    <h5 className="bold text-white">Save and Continue</h5>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessInformation;
