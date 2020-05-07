import React, { Component } from 'react';

import SignIn from "./Signin";
import Layout from "../../../components/AppHeader/Layout";

class SigninComponent extends Component {
    render() {
        const { signin } = this.props;
        return (
            <Layout {...this.props}>
                <SignIn
                    {...this.props}
                    signin={signin}
                />
            </Layout>
        )
    }
}

export default SigninComponent;