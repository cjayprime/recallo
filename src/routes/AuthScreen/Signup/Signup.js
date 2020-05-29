import React, { Component } from "react";

import Button from "../../../components/Button/button";
import AuthInput from "../../../components/Form/AuthInput";
import Layout from "../../../components/AppHeader/Layout";

class SignUp extends Component {
  continue = (e) => {
    const { nextStep } = this.props;
    e.preventDefault();
    nextStep();
  };

  render() {
    const { form, handleChange } = this.props;
    const { name, email, password, confirmPassword } = form;
    return (
      <Layout {...this.props}>
        <div className="signup">
          <div className="signup-form form">
            <h1 className="bold mb-45">Create your Account</h1>
            <form className="go-top">
              <AuthInput
                className="field mb-50"
                labelTitle="Business name"
                name="name"
                value={name}
                onChange={handleChange}
              />
              <AuthInput
                className="mb-50"
                labelTitle="Business email address"
                name="email"
                value={email}
                type="email"
                onChange={handleChange}
              />
              <div className="auth-password">
                <AuthInput
                  className="col-7"
                  type="password"
                  labelTitle="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <AuthInput
                  type="confirm-password"
                  className="col-7"
                  labelTitle="Confirm Password"
                  name="confirmPassword"
                  passed={password === confirmPassword}
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <h6 className="lh-24 light text-light mb-32">
                By clicking "Create Account" you agree to our
                <span className="bold text-blue">Terms of Service</span>, and to
                receive marketing communications from Recallo.
              </h6>
              <div>
                <Button
                  onClick={this.continue}
                  type="submit"
                  className="signup-button br-8"
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
                <h5 className="light text-light mb-16">
                  Efficiently reconceptualize innovative ROI without holistic
                  information. Objectively cultivate.
                </h5>
                <h5 className="light text-light mb-16">
                  Appropriately e-enable business "outside the box" thinking and
                  distributed.
                </h5>
                <h5 className="light text-light">
                  Dramatically extend collaborative ROI vis-a-vis parallel
                  collaboration and idea-sharing. Intrinsicly.
                </h5>
              </div>
              <hr />
              <h5 className="text-main bold mb-16">Have more questions?</h5>
              <h5 className="bold text-blue mb-16">Speak to us on phone</h5>
              <h5 className="bold text-blue">Frequently Asked Questions</h5>
            </div>
            <div className="benefits-image" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default SignUp;
