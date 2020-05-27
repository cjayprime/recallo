import React, { Component } from "react"

import SignUp from "./Signup"
import Personal from "./Personal"
import Business from "./Business"
import Plans from "./Plans"

import Notification from "../../../utils/notification"

class SignUpComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // hidden: true,

      // Step 0
      business_name: "",
      business_email: "",
      business_address: "",

      // Step 1
      first_name: "",
      last_name: "",
      mobile: "",

      email: "",
      password: "",
      confirm_password: "",
      people: "",
      business_rc: "",

      step: 0,
      // Step 0 && 2
      business: {
        name: "",
        address: "",
        email: "",
        password: "",
        confirmPassword: "",
        rc: "",
        people: "",
      },

      // Step 1
      user: {
        firstname: "",
        lastname: "",
        mobile: "",
      },

      // Step 3
      payment: {
        reference: "",
        did: "",
        planID: "",
      },

      error: null,
    }
  }

  handleChange = (value, name, error) => {
    const { step } = this.state
    let section = "user"
    if (step === 0) section = "business"

    this.setState({
      [section]: { ...this.state[section], [name]: value },
      error,
    })
  }

  nextStep = () => {
    let { step } = this.state
    this.signup(step, () => {
      if (step < 3) step++
      this.setState({ step })
    })
  }

  signup = (step, callback) => {
    let data = {}
    if (step === 0) {
      const { name, email, password } = this.state.business
      data = { business_name: name, email, password }
    } else if (step === 1) {
      const { firstname, lastname, mobile } = this.state.user
      data = { first_name: firstname, last_name: lastname, mobile }
    } else if (step === 2) {
      const { name, email, address, people, rc } = this.state.business
      data = {
        business_name: name,
        business_email: email,
        business_address: address,
        people,
        business_rc: rc,
      }
    } else if (step === 3) {
      const { reference, did, planID } = this.state.payment
      data = { reference_no: reference, did, payment_plan_id: planID }
    }

    // This is a potential flaw, a possible (and common) scenario of failure is this:
    // if a user, coorectly fills one form (any form element at all, doesn't matter
    // which one) then, this.state.error will be empty, so the fix is:
    // Don't globalise this.state.error OR do some other checks and don't rely on it
    // alone, since the state was messy any, and is needed before the next step I'm
    // using it
    const dataKeys = Object.keys(data)
    if (
      !this.state.error &&
      dataKeys.filter((state) => !!data[state]).length === dataKeys.length
    ) {
      this.props.signup(data, step, () => {
        if (step === 3) this.props.history("/admin/home")
        callback()
      })
    } else {
      Notification.error(
        this.state.error || "Please fill in the form correctly."
      )
    }
  }

  render() {
    switch (this.state.step) {
      case 0:
        return (
          <SignUp
            {...this.props}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            form={this.state.business}
          />
        )
      case 1:
        return (
          <Personal
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            form={this.state.user}
          />
        )
      case 2:
        return (
          <Business
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            form={this.state}
          />
        )
      case 3:
        return <Plans />
      default:
    }
  }
}

export default SignUpComponent
