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

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    triggerSignup = (e) => {
        e.preventDefault();
        const { business_name, email, password } = this.state;
        let data = { business_name, email, password };
        // Object.keys(this.state.fields).map(key => {
        //     if (key !== "confirm_password") {
        //         data[key] = this.state.fields[key].value;
        //     }
        // });

        this.props.signup({ data });
    };

    createAccountSuccess = () => {
        this.nextStep();
    };


    triggerPersonalInformation = e => {
        e.preventDefault();
        const { first_name, last_name, mobile } = this.props;
        let data = { first_name, last_name, mobile };
        this.props.personalInformation({ data });
    }

    pushPersonalInformation = () => {
        this.nextStep();
    }

    triggerBusinessInformation = e => {
        e.preventDefault();
        const { business_name, business_email, business_address, people, business_rc } = this.props;
        let data = {
            business_name, business_email,
            business_address, people, business_rc
        };
        this.props.businessInformation({ data, history: this.props.history });
    }

    pushBusinessInformation = () => {
        this.nextStep();
    }

    render() {
        const { step } = this.state;
        const { request } = this.props

        switch (step) {
            case 1:
                return (
                    <Layout {...this.props}>
                        <SignUp
                            nextStep={this.nextStep}
                            triggerSignup={this.triggerSignup}
                            handleChange={this.handleChange}
                            form={this.state}
                            request={request}
                            //authRequest={authRequest}
                            createAccountSuccess={this.createAccountSuccess}
                        />
                    </Layout>
                );
            case 2:
                return (
                    <PersonalInformation
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        form={this.state}
                        //authRequest={authRequest}
                        request={request}
                        triggerPersonalInformation={this.triggerPersonalInformation}
                        pushPersonalInformation={this.pushPersonalInformation}
                    />
                );
            case 3:
                return (
                    <BusinessInformation
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        form={this.state}
                        request={request}
                        //authRequest={authRequest}
                        triggerBusinessInformation={this.triggerBusinessInformation}
                        pushBusinessInformation={this.pushBusinessInformation}
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