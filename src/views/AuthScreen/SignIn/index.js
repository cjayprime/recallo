import React, { Component } from 'react';

import SignIn from "./Signin";
import AppHeader from "../../../components/AppHeader";

import routes from "../../../Routes";

class SignInComponent extends Component {
    render() {
        return (
            <>
                <AppHeader {...this.props} routes={routes} />
                <SignIn />
            </>
        )
    }
}

export default SignInComponent;