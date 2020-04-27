import React, { Component } from 'react';

import logo from "../../../assets/img/appLogo.png";
import FormField from "../../../components/Form";
import Button from "../../../components/Button/button";

class BusinessInformation extends Component {

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
                            <h2 className="light text-main">Business Information</h2>
                            <div className="row-direction align-center">
                                <p className="text-main bold mr-8">2 of 3</p>
                                <p className="row-direction">
                                    <p className="b-bar-1"></p>
                                    <p className="b-bar-2"></p>
                                    <p className="b-bar-3"></p>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <form>
                            <div className="business-info">
                                <div className="business-info-1">
                                    <div className="col-7">
                                        <FormField
                                            labelTitle="Business name"
                                            className="onboard-input br-4 mb-32"
                                            labelClass="auth-label"
                                        />
                                        <FormField
                                            labelTitle="Business email"
                                            className="onboard-input br-4"
                                            labelClass="auth-label"
                                        />
                                    </div>
                                    <div className="col-7">
                                        <FormField
                                            labelTitle="Business address"
                                            className="onboard-textarea"
                                            type="textarea"
                                            labelClass="auth-label"
                                        />
                                    </div>
                                </div>
                                <div className="business-info-2">
                                    <div className="col-7">
                                        <label className="business-rc">Business RC No <span>(if registered)</span></label>
                                        <FormField
                                            className="onboard-input br-4"
                                        />
                                    </div>
                                    <div className="col-7">
                                        <FormField
                                            className="onboard-input br-4"
                                            labelTitle="How many people with you at this business?"
                                        />
                                    </div>
                                </div>
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

export default BusinessInformation;