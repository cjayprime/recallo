import React, { Component } from 'react';

import ladyIcon from "../../../assets/img/ladyCall.png"
import FormField from '../../../components/Form';
import Button from "../../../components/Button/button";

import arrowright from "../../../assets/img/arrow-right-circle.png";

class SignIn extends Component {
    render() {
        return (
            <div className="signin">
                <div className="signin-form">
                    <h1 className="bold mb-16">Log in</h1>
                    <h3 className="light text-light">Please enter your email address and password</h3>
                    <form>
                        <div className="field">
                            <FormField
                                className="login-input"
                                labelClass="login-label"
                                labelTitle="Email address"
                            />
                        </div>
                        <div className="field">
                            <FormField
                                type="password"
                                className="login-input"
                                labelTitle="Password"
                                labelClass="login-label"
                            />
                        </div>
                        <div className="row">
                            <div className="row-direction">
                                <FormField
                                    type="checkbox"
                                />
                                <h6 className="bold text-blue">Remember me</h6>
                            </div>
                            <div>
                                <h6 className="bold text-blue">Forgot your password?</h6>
                            </div>
                        </div>
                        <div className="mt-34">
                            <Button className="login-button br-8">
                                <h5 className="bold">login</h5>
                                <img src={arrowright} alt="arrow right icon" />
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="signin-icon">
                    <img src={ladyIcon} alt="lady making call" />
                </div>
            </div>
        )
    }
}

export default SignIn;