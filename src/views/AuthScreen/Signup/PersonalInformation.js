import React, { Component } from 'react';

import logo from "../../../assets/img/appLogo.png";
import FormField from '../../../components/Form';
import Button from '../../../components/Button/button';

class PersonalInformation extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
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
                        <form>
                            <div className="onboard-form">
                                <FormField
                                    labelTitle="First name"
                                    placeholder="Enter legal first name"
                                    labelClass="auth-label"
                                    className="onboard-input br-4 mb-32"
                                />
                                <FormField
                                    labelTitle="Last name"
                                    placeholder="Enter legal last name"
                                    labelClass="auth-label"
                                    className="onboard-input br-4 mb-32"
                                />
                                <FormField
                                    labelTitle="Mobile"
                                    placeholder="Enter phone number"
                                    labelClass="auth-label"
                                    className="onboard-input br-4 mb-32"
                                />
                                <div>
                                    <Button onClick={this.continue} className="blue-button br-8" padding={"10px 32px"}>
                                        <h5 className="bold text-white">Save and Continue</h5>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalInformation;