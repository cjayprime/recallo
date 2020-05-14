import React, { Component } from "react"

import logo from "../../../assets/img/appLogo.png"
import TextInput from "../../../components/Form/TextInput"
import Button from "../../../components/Button/button"

class PersonalInformation extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { form, handleChange } = this.props
    const { firstname, lastname, mobile } = form

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
              In a few steps, your account will be up and running. <br /> <br />{" "}
              Let's get started.
            </h5>
          </div>
          <div className="onboard-info">
            <div className="onboard-title">
              <h2 className="light text-main">Personal Information</h2>
              <div className="row-direction align-center">
                <p className="text-main bold mr-8">1 of 3</p>
                <div className="row-direction">
                  <p className="p-bar-1" />
                  <p className="p-bar-2" />
                  <p className="p-bar-3" />
                </div>
              </div>
            </div>
            <hr />
            <form onSubmit={this.continue}>
              <div className="onboard-form">
                <TextInput
                  labelTitle="First name"
                  placeholder="Enter legal first name"
                  labelClass="auth-label"
                  className="onboard-input br-4 mb-32"
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                />
                <TextInput
                  labelTitle="Last name"
                  placeholder="Enter legal last name"
                  labelClass="auth-label"
                  className="onboard-input br-4 mb-32"
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                />
                <TextInput
                  labelTitle="Mobile"
                  placeholder="Enter phone number"
                  labelClass="auth-label"
                  className="onboard-input br-4 mb-32"
                  type="tel"
                  name="mobile"
                  value={mobile}
                  onChange={handleChange}
                />
                <div>
                  <Button
                    onClick={this.continue}
                    type="submit"
                    className="blue-button br-8"
                    padding="10px 32px"
                  >
                    <h5 className="bold text-white">Save and Continue</h5>
                  </Button>
                </div>
                {/* <AlertDialog
                                    open={request.feedback.for === authRequest.signupRequest}
                                    message={request.feedback.message}
                                    success={request.feedback.success}
                                /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalInformation
