import React, { Component } from 'react';

import Layout from "../../../components/AppHeader/Layout";

import SignUp from './Signup';
import PersonalInformation from "./PersonalInformation";
import BusinessInformation from "./BusinessInformation";
import PlanSelection from "./PlanSelection";
import { authRequest } from "../../../store/auth/saga";

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


    triggerSavePersonalInformation = e => {
        e.preventDefault();
        var fields = this.state.fields;
        var compulsoryFields = {};
        for (var key in fields) {
            compulsoryFields[key] = fields[key];
        }
    }

    triggerSaveBusinessInformation = e => {
        e.preventDefault();
        var fields = this.state.fields;
        var compulsoryFields = {};
        for (var key in fields) {
            compulsoryFields[key] = fields[key];
        }
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
                            authRequest={authRequest}
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
                        authRequest={authRequest}
                        triggerSavePersonalInformation={this.triggerSavePersonalInformation}
                    />
                );
            case 3:
                return (
                    <BusinessInformation
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        form={this.state}
                        authRequest={authRequest}
                        triggerSaveBusinessInformation={this.triggerSaveBusinessInformation}
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