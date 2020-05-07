import React, { Component } from 'react';

import TextInput from '../../../components/Form/TextInput';
import FormField from '../../../components/Form';
import Button from "../../../components/Button/button";

import arrowright from "../../../assets/img/arrow-right-circle.png";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        error: null
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    triggerSignin = e => {
        e.preventDefault();
        const { email, password } = this.state;
        let data = { email, password };
        this.props.signin({ data, history: this.props.history });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="signin">
                <div className="signin-form form">
                    <h1 className="bold mb-16">Log in</h1>
                    <h3 className="light text-light">Please enter your email address and password</h3>
                    <form onSubmit={this.triggerSignin}>
                        <div className="field">
                            <TextInput
                                className="auth-input"
                                labelClass="auth-label"
                                labelTitle="Email address"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                form={this.state}
                            />
                        </div>
                        <div className="field">
                            <TextInput
                                type="password"
                                className="auth-input"
                                labelTitle="Password"
                                labelClass="auth-label"
                                name="password"
                                value={password}
                                form={this.state}
                                onChange={this.handleChange}
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
                            <Button type="submit" className="login-button br-8">
                                <h5 className="bold">login</h5>
                                <img src={arrowright} alt="arrow right icon" />
                            </Button>
                        </div>
                    </form>
                    <hr className="signin-hr" />
                    <div>
                        <h5 className="light text-light bk-2-web">Back to website</h5>
                    </div>
                </div>
                <div className="signin-icon"></div>
            </div>
        )
    }
}

export default SignIn;