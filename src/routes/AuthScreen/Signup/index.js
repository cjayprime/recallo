import React, { Component } from "react";

import SignUp from "./Signup";
import Personal from "./Personal";
import Business from "./Business";
import Plans from "./Plans";

import Notification from "../../../utils/notification";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      plan: {
        reference: "",
        did: "",
        planID: "",
      },

      error: null,
    };
  }

  handleChange = (value, name, error) => {
    const { step } = this.state;
    let section = "user";
    if (step === 0 || step === 2) section = "business";
    else if(step === 1) section = "user";
    else if(step === 3) section = "plan";

    this.setState((prevState) => ({
      [section]: { ...prevState[section], [name]: value },
      error,
    }));
  };

  nextStep = () => {
    let { step } = this.state;
    this.signup(step, () => {
      if (step < 3) step ++;
      this.setState({ step });
    });
  };

  signup = (step, callback) => {
    let data = {};
    const { error, business, user, plan } = this.state;
    const { signup, history } = this.props;
    if (step === 0) {
      const { name, email, password } = business;
      data = { business_name: name, email, password };
    } else if (step === 1) {
      const { firstname, lastname, mobile } = user;
      data = { first_name: firstname, last_name: lastname, mobile };
    } else if (step === 2) {
      const { name, email, address, people, rc } = business;
      data = {
        business_name: name,
        business_email: email,
        business_address: address,
        people,
        business_rc: rc,
      };
    } else if (step === 3) {
      const { reference, did, planID } = plan;
      data = { reference_no: reference, did, payment_plan_id: planID };
    }
    
    const dataKeys = Object.keys(data);
    if (
      !error &&
      dataKeys.filter((state) => !!data[state]).length === dataKeys.length
    ) {
      signup(data, step, () => {
        if (step === 3) history.push("/admin/home");
        callback();
      });
    } else {
      Notification.error(
        error || "Please fill in the form correctly."
      );
    }
  };

  render() {
    const { step, business, user, plan } = this.state;

    switch (step) {
      case 0:
        return (
          <SignUp
            {...this.props}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            form={business}
          />
        );
      case 1:
        return (
          <Personal
            {...this.props}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            form={user}
          />
        );
      case 2:
        return (
          <Business
            {...this.props}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            form={business}
          />
        );
      case 3:
        return (
          <Plans
            {...this.props}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            form={plan}
          />
        )
      default:
    }
  }
}

export default SignUpComponent;
