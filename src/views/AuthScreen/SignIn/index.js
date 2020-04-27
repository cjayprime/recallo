import React, { Component } from 'react';

import SignIn from "./Signin";
import Layout from "../../../components/AppHeader/Layout";

class SignInComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <SignIn
                        {...this.props}
                    />
                </Layout>
            </>
        )
    }
}



export default SignInComponent;