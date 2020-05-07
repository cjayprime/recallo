import React, { Component } from 'react';

import Button from "../../../components/Button/button";
import TextInput from '../../../components/Form/TextInput';
import AlertDialog from "../../../components/AlertDialog";

class SignUp extends Component {

    continue = e => {
        e.preventDefault();
        this.props.triggerSignup(e);
        this.props.createAccountSuccess();
    }

    render() {
        const {
            form,
            handleChange,
            request,
            triggerSignup,
            authRequest
        } = this.props,
            { business_name, email, password, confirm_password, formError } = form;
        return (
            <>
                <div className="signup">
                    <div className="signup-form form">
                        <h1 className="bold mb-45">Create your Account</h1>
                        <form onSubmit={triggerSignup}>
                            <div className="field mb-50">
                                <TextInput
                                    className="auth-input"
                                    labelClass="auth-lable"
                                    labelTitle="Business name"
                                    name="business_name"
                                    value={business_name}
                                    form={form}
                                    onChange={handleChange}
                                    novalidate
                                />
                            </div>
                            <div className="mb-50">
                                <TextInput
                                    className="auth-input"
                                    labelClass="auth-lable"
                                    labelTitle="Business email address"
                                    name="email"
                                    value={email}
                                    form={form}
                                    type="email"
                                    onChange={handleChange}
                                    novalidate
                                />
                            </div>
                            <div className="auth-password">
                                <div className="col-7">
                                    <TextInput
                                        type="password"
                                        className="auth-input"
                                        labelClass="auth-lable"
                                        labelTitle="Password"
                                        name="password"
                                        value={password}
                                        form={form}
                                        onChange={handleChange}
                                        novalidate
                                    />
                                </div>
                                <div className="col-7">
                                    <TextInput
                                        type="password"
                                        className="auth-input"
                                        labelClass="auth-lable"
                                        labelTitle="Confirm Password"
                                        name="confirm_password"
                                        value={confirm_password}
                                        form={form}
                                        onChange={handleChange}
                                        novalidate
                                    />
                                </div>
                            </div>
                            <h6 className="lh-24 light text-light mb-32">By clicking "Create Account" you agree to our <span className="bold text-blue">Terms of Service</span>, and to receive marketing communications from Recallo.</h6>
                            <div>
                                <Button error={formError} onClick={this.continue} type="submit" className="signup-button br-8"
                                >
                                    <h5 className="bold">Create Account</h5>
                                </Button>
                            </div>
                            {/* <AlertDialog
                                open={request.feedback.for === authRequest.signupRequest}
                                message={request.feedback.message}
                                success={request.feedback.success}
                            /> */}
                            <hr />
                            <h5 className="bold light text-light">Back to website</h5>
                        </form>
                    </div>
                    <div className="signup-benefits">
                        <div className="benefits-card">
                            <h5 className="bold text-main mb-16">What you will enjoy</h5>
                            <div className="benefits-body">
                                <h5 className="light text-light mb-16">Efficiently reconceptualize innovative ROI without holistic information. Objectively cultivate.</h5>
                                <h5 className="light text-light mb-16">
                                    Appropriately e-enable business "outside the box" thinking and distributed.
                        </h5>
                                <h5 className="light text-light">
                                    Dramatically extend collaborative ROI vis-a-vis parallel collaboration and idea-sharing. Intrinsicly.
                        </h5>
                            </div>
                            <hr />
                            <h5 className="text-main bold mb-16">Have more questions?</h5>
                            <h5 className="bold text-blue mb-16">Speak to us on phone</h5>
                            <h5 className="bold text-blue">Frequently Asked Questions</h5>
                        </div>
                        <div className="benefits-image"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default SignUp;