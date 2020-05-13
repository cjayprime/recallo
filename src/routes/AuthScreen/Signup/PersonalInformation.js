import React, { Component } from 'react';

import logo from "../../../assets/img/appLogo.png";
import FormField from '../../../components/Form';
import TextInput from "../../../components/Form/TextInput";
import Button from '../../../components/Button/button';
import AlertDialog from "../../../components/AlertDialog";

class PersonalInformation extends Component {

    continue = e => {
        e.preventDefault();
        this.props.triggerPersonalInformation(e);
        this.props.nextStep();
    }

    render() {
        const {
            form,
            handleChange,
            authRequest,
            request,
            triggerPersonalInformation
        } = this.props,
            { first_name, last_name, mobile } = form;
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
                            In a few steps, your account will be up and running. <br /> <br /> Let's get started.
                            </h5>
                    </div>
                    <div className="onboard-info">
                        <div className="onboard-title">
                            <h2 className="light text-main">Personal Information</h2>
                            <div className="row-direction align-center">
                                <p className="text-main bold mr-8">1 of 3</p>
                                <p className="row-direction">
                                    <p className="p-bar-1"></p>
                                    <p className="p-bar-2"></p>
                                    <p className="p-bar-3"></p>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <form onSubmit={triggerPersonalInformation}>
                            <div className="onboard-form">
                                <TextInput
                                    labelTitle="First name"
                                    placeholder="Enter legal first name"
                                    labelClass="auth-label"
                                    className="onboard-input br-4 mb-32"
                                    type="text"
                                    name="first_name"
                                    value={first_name}
                                    form={form}
                                    onChange={handleChange}
                                />
                                <TextInput
                                    labelTitle="Last name"
                                    placeholder="Enter legal last name"
                                    labelClass="auth-label"
                                    className="onboard-input br-4 mb-32"
                                    type="text"
                                    name="last_name"
                                    value={last_name}
                                    form={form}
                                    onChange={handleChange}
                                />
                                <TextInput
                                    labelTitle="Mobile"
                                    placeholder="Enter phone number"
                                    labelClass="auth-label"
                                    className="onboard-input br-4 mb-32"
                                    type="tel"
                                    name="mobile"
                                    form={form}
                                    value={mobile}
                                    onChange={handleChange}
                                />
                                <div>
                                    <Button onClick={this.continue} type="submit" className="blue-button br-8" padding={"10px 32px"}>
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

export default PersonalInformation;