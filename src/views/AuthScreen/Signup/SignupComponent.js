import React, { Component } from 'react';

import Layout from "../../../components/AppHeader/Layout";

import SignUp from './Signup';
import PersonalInformation from "./PersonalInformation";
import BusinessInformation from "./BusinessInformation";
import PlanSelection from "./PlanSelection";
import { validate } from "../../../utils/misc";
import { authRequest } from "../../../store/auth/saga";

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            formError: false,
            hidden: true,
            fields: {
                business_name: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "Business name",
                    rules: {
                        required: true
                    }
                },
                email: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "Email",
                    rules: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "Password",
                    rules: {
                        required: true,
                        password: true
                    }
                },
                confirm_password: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "Confirm password",
                    rules: {
                        required: true,
                        confirmPassword: true
                    }
                },
                first_name: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "First name",
                    rules: {
                        required: true
                    }
                },
                last_name: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "Last name",
                    rules: {
                        required: true
                    }
                },
                mobile: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "Mobile",
                    rules: {
                        required: true
                    }
                },
                business_address: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "Business address",
                    rules: {
                        required: true
                    }
                },
                people: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "People",
                    rules: {
                        required: true
                    }
                },
                business_rc: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "Business RC",
                    rules: {
                        required: true
                    }
                }
            }
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    _safelySetState = (newState, prevState = null) => {
        return this.setState(state => ({
            [prevState]: !state[prevState],
            ...newState
        }));
    };

    _handleChange = e => {

        const { name, value } = e.target;
        let newState = { ...this.state };
        newState.formError = false;
        newState.fields[name].error = false;
        newState.fields[name].value = value;
        this._safelySetState(newState);
        validate(this, this.state.fields, e);
    };

    onBlur = (res, name) => {
        const { error, errorMessage } = res;
        let newForm = { ...this.state };
        newForm.fields[name] = {
            ...newForm.fields[name],
            error,
            errorMessage
        };

        this._safelySetState(newForm);
    };

    triggerSignup = (e, success) => {
        e.preventDefault();
        let data = {};
        Object.keys(this.state.fields).map(key => {
            if (key !== "confirm_password") {
                data[key] = this.state.fields[key].value;
            }
        });

        this.props.signup({ data, success });
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
        if (validate(this, compulsoryFields)) {
            let data = {};
            Object.keys(this.state.fields).map(key => {
                data[key] = this.state.fields[key].value;
            })
        }
    }

    triggerSaveBusinessInformation = e => {
        e.preventDefault();
        var fields = this.state.fields;
        var compulsoryFields = {};
        for (var key in fields) {
            compulsoryFields[key] = fields[key];
        }
        if (validate(this, compulsoryFields)) {
            let data = {};
            Object.keys(this.state.fields).map(key => {
                data[key] = this.state.fields[key].value;
            })
        }
    }

    render() {
        const { step } = this.state;
        const { request } = this.props
        const forms = Object.assign(this.state.fields);
        const form1 = {};
        const form2 = {};
        const form3 = {};

        for (var key in forms) {

            if (key === "business_name" || key === "email" || key === "password" || key === "confirm_password") {

                form1[key] = forms[key];

            } else if (key === "first_name" || key === "last_name" || key === "mobile") {

                form2[key] = forms[key];

            } else if (key === "business_name" || key === "email" || key === "business_address" || key === "people" || key === "business_rc") {

                form3[key] = forms[key];

            }

        }

        const validate1 = validate.bind(this, this, form1);
        const validate2 = validate.bind(this, this, form2);
        const validate3 = validate.bind(this, this, form3);

        switch (step) {
            case 1:
                return (
                    <Layout {...this.props}>
                        <SignUp
                            nextStep={this.nextStep}
                            triggerSignup={this.triggerSignup}
                            _handleChange={this._handleChange}
                            form={this.state}
                            validate={validate1}
                            onBlur={this.onBlur}
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
                        _handleChange={this._handleChange}
                        form={this.state}
                        validate={validate2}
                        onBlur={this.onBlur}
                        authRequest={authRequest}
                        triggerSavePersonalInformation={this.triggerSavePersonalInformation}
                    />
                );
            case 3:
                return (
                    <BusinessInformation
                        nextStep={this.nextStep}
                        _handleChange={this._handleChange}
                        form={this.state}
                        validate={validate3}
                        onBlur={this.onBlur}
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