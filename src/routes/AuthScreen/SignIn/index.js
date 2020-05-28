import React, { Component } from "react"

import AuthInput from "../../../components/Form/AuthInput"
import FormField from "../../../components/Form"
import Button from "../../../components/Button/button"
import Layout from "../../../components/AppHeader/Layout"

import arrowright from "../../../assets/img/arrow-right-circle.png"

import Notification from "../../../utils/notification"

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
  }

  handleChange = (value, name, error) => {
    this.setState({ [name]: value, error })
  }

  signin = (e) => {
    e.preventDefault()
    if (!this.state.error && this.state.email && this.state.password) {
      const { email, password } = this.state

      this.props.signin({ email, password }, () => {
        this.props.history.push("/admin/home")
      })
    } else {
      Notification.error(
        this.state.error || "Please fill in the form correctly."
      )
    }
  }

  render() {
    const { email, password } = this.state
    console.log(this.props.account)
    return (
      <Layout {...this.props}>
        <div className="signin">
          <div className="signin-form form">
            <h1 className="bold mb-16">Log in</h1>
            <h3 className="light text-light">
              Please enter your email address and password
            </h3>
            <form onSubmit={this.signin}>
              <div className="field">
                <AuthInput
                  type="email"
                  labelTitle="Email address"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <AuthInput
                  type="password"
                  labelTitle="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <FormField
                  type="checkbox"
                  checkboxClass="checkbox"
                  checkboxTitle="Remember me"
                />
                <div>
                  <h6 className="bold text-blue">Forgot your password?</h6>
                </div>
              </div>
              <div className="mt-34">
                <Button type="submit" className="login-button br-8">
                  <h5 className="bold">login</h5>
                  <img src={arrowright} alt="arrow right icon" />
                </Button>
              </div>
            </form>
            <hr className="signin-hr" />
            <div>
              <h5 className="light text-light bk-2-web">Back to website</h5>
            </div>
          </div>
          <div className="signin-icon" />
        </div>
      </Layout>
    )
  }
}
