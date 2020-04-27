import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signup } from "../../../store/auth/actions";

import Layout from "../../../components/AppHeader/Layout";

import SignUp from './Signup';
import PersonalInformation from "./PersonalInformation";
import BusinessInformation from "./BusinessInformation";
import PlanSelection from "./PlanSelection";

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            fields: {
                business_name: {
                    value: "",
                    name: "Business name"
                },
                email: {
                    value: "",
                    name: "Email"
                },
                password: {
                    value: "",
                    name: "Password"
                },
                confirm_password: {
                    value: "",
                    name: "Confirm password"
                },
                first_name: {
                    value: "",
                    name: "First name"
                },
                last_name: {
                    value: "",
                    name: "Last name"
                },
                mobile: {
                    value: "",
                    name: "Mobile"
                },
                business_address: {
                    value: "",
                    name: "Business address"
                },
                people: {
                    value: "",
                    name: "People"
                },
                business_rc: {
                    value: "",
                    name: "Business RC"
                }
            }
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    componentWillUnmount() {
        let newState = { ...this.state };
        Object.keys(newState.fields).map(key => {
            newState.fields[key].value = "";
        });
        this._safelySetState(newState);
    }

    _handleChange = e => {

        const { name, value } = e.target;
        let newState = { ...this.state };
        newState.fields[name].value = value;
        this._safelySetState(newState);
    };

    triggerSignup = e => {
        e.preventDefault();

        var fields = this.state.fields;
        var data = {};
        for (var key in fields) {
            data[key] = fields[key].value
        }
        this.props.signup({ data, history: this.props.history })
    }

    _safelySetState = (newState, prevState = null) => {
        return this.setState(state => ({
            [prevState]: !state[prevState],
            ...newState
        }));
    };


    render() {
        const { step } = this.state;
        const { request } = this.props;
        switch (step) {
            case 1:
                return (
                    <Layout {...this.props}>
                        <SignUp
                            nextStep={this.nextStep}
                            triggerSignup={this.triggerSignup}
                            _handleChange={this._handleChange}
                            form={this.state}
                            request={request}
                        />
                    </Layout>
                );
            case 2:
                return (
                    <PersonalInformation nextStep={this.nextStep} />
                );
            case 3:
                return (
                    <BusinessInformation nextStep={this.nextStep} />
                );
            case 4:
                return (
                    <PlanSelection />
                );
            default:
        }
    }
}

const mapStateToProps = ({ utils, auth }) => ({
    auth,
    request: utils
});

const mapDispatchToProps = {
    signup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent); 