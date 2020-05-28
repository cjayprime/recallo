import React, { Component } from "react"

import Button from "../../components/Button/button"
import AuthInput from "../../components/Form/AuthInput"

class ContactSupport extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    error: null,
  }

  handleChange = (value, name, error) => {
    this.setState({ [name]: value, error })
  }

  render() {
    const { first_name, last_name, email, message } = this.state
    return (
      <>
        <div className="support">
          <div className="support-message">
            <h6 className="light text-light mb-16">GOT A QUESTION</h6>
            <h1 className="p-40 mb-24">Contact Recallo</h1>
            <h6 className="light text-light">
              We are here to help and answer any question you might have.
            </h6>
          </div>
          <div>
            <form>
              <h2 className="bold mb-50">Send Message</h2>
              <div className="message-row">
                <AuthInput
                  labelTitle="First name"
                  className="col-7"
                  name="first_name"
                  onChange={this.handleChange}
                  value={first_name}
                  novalidate
                />
                <AuthInput
                  labelTitle="Last name"
                  className="col-7"
                  name="last_name"
                  onChange={this.handleChange}
                  value={last_name}
                  novalidate
                />
              </div>
              <AuthInput
                labelTitle="Email address"
                className="mb-50"
                labelClass="auth-label"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={email}
                novalidate
              />
              <AuthInput
                labelTitle="Message"
                className="mb-50"
                name="message"
                value={message}
                onChange={this.handleChange}
                novalidate
              />
              <Button className="br-8 signup-button" type="submit">
                <h6 className="bold">Send Message</h6>
              </Button>
            </form>
          </div>
          <div className="message-board">
            <div className="benefits-card">
              <h5 className="bold text-main mb-16">Contact information</h5>
              <div className="row-direction mb-24">
                <div>
                  <i className="fa fa-phone text-light" aria-hidden="true" />
                </div>
                <div className="ml-8">
                  <h5 className="bold text-blue">+234 800 111 2222</h5>
                  <h5 className="bold text-blue">+234 800 111 3333</h5>
                </div>
              </div>
              <div className="row-direction">
                <div>
                  <i className="fa fa-envelope text-light" aria-hidden="true" />
                </div>
                <h6 className="bold text-blue ml-8">hi@recallomobile.com</h6>
              </div>
              <hr />
              <h5 className="text-main bold mb-16">Have more questions?</h5>
              <h5 className="bold text-blue">Frequently Asked Questions</h5>
            </div>
            <div className="benefits-image" />
          </div>
        </div>
        <h5 className="light text-light btw">Back to website</h5>
      </>
    )
  }
}

export default ContactSupport
