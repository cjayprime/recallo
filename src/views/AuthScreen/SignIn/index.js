import React, { Component } from 'react';
import { connect } from "react-redux";

import SigninComponent from "./SigninComponent";
import { signin } from "../../../store/auth/actions";

class SigninContainer extends Component {
    render() {
        const { signin, requestStatus } = this.props;
        return (
            <>
                <SigninComponent
                    {...this.props}
                    signin={signin}
                    requestStatus={requestStatus}
                />
            </>
        )
    }
}

const mapStateToProps = ({ utils, auth }) => ({
    requestStatus: auth.requestStatus,
});

const mapDispatchToProps = {
    signin
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);