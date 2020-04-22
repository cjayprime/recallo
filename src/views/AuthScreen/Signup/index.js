import React, { Component } from 'react';

import AppHeader from "../../../components/AppHeader";
import SignUp from './Signup';

import routes from "../../../Routes";

class SignUpComponent extends Component {
    render() {
        return (
            <>
                <AppHeader {...this.props} routes={routes} />
                <SignUp />
            </>
        )
    }
}

export default SignUpComponent; 