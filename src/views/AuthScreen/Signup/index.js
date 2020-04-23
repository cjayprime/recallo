import React, { Component } from 'react';

import Layout from "../../../components/AppHeader/Layout";
import SignUp from './Signup';

class SignUpComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <SignUp />
                </Layout>
            </>
        )
    }
}

export default SignUpComponent; 