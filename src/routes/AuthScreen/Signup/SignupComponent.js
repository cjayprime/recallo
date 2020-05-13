import React, { Component } from 'react';

import Layout from "../../../components/AppHeader/Layout";

import SignUp from './Signup';
import PersonalInformation from "./PersonalInformation";
import BusinessInformation from "./BusinessInformation";
import PlanSelection from "./PlanSelection";
// import { authRequest } from "../../../store/auth/saga";

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            hidden: true,
            business_name: "",
            email: "",
            password: "",
            confirm_password: "",
            first_name: "",
            last_name: "",
            mobile: "",
            business_email: "",
            business_address: "",
            people: "",
            business_rc: "",
            error: null
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    handleChange = (value, name, error) => {
        this.setState({ [name]: value, error })
    }

    triggerSignup = (e) => {
        e.preventDefault();
        if (!this.state.error) {
            const { business_name, email, password } = this.state;
            let data = { business_name, email, password };
            this.props.signup({ data }, 0);
        }
    };

    triggerPersonalInformation = e => {
        e.preventDefault();
        if (!this.state.error) {
            const { first_name, last_name, mobile } = this.props;
            let data = { first_name, last_name, mobile };
            this.props.signup({ data }, 1);
        }
    }

    triggerBusinessInformation = e => {
        e.preventDefault();
        if (!this.state.error) {
            const { business_name, business_email, business_address, people, business_rc } = this.props;
            let data = {
                business_name, business_email,
                business_address, people, business_rc
            };
            this.props.signup({ data }, 2, () => {
                this.props.history('/admin/home')
            });
        }
    }

    render() {
        const { step } = this.state;

        switch (step) {
            case 1:
                return (
                    <Layout {...this.props}>
                        <SignUp
                            nextStep={this.nextStep}
                            triggerSignup={this.triggerSignup}
                            handleChange={this.handleChange}
                            form={this.state}
                        />
                    </Layout>
                );
            case 2:
                return (
                    <PersonalInformation
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        form={this.state}
                        triggerPersonalInformation={this.triggerPersonalInformation}
                    />
                );
            case 3:
                return (
                    <BusinessInformation
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        form={this.state}
                        triggerBusinessInformation={this.triggerBusinessInformation}
                    />
                );
            case 4:
                return (
                    <PlanSelection />
                );
            default:
        }
    }
}

export default SignUpComponent; 