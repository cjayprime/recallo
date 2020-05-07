import React, { Component } from 'react';
import { connect } from "react-redux";

import SignupComponent from "./SignupComponent";
import { signup, personalInformation, businessInformation } from "../../../store/AllActions";

class SignupContainer extends Component {
    render() {
        const { signup, request, misc } = this.props;
        return (
            <>
                <SignupComponent
                    {...this.props}
                    signup={signup}
                    request={request || {}}
                    misc={misc}
                />
            </>
        )
    }
}

const mapStateToProps = ({ utils, misc, auth }) => ({
    auth,
    misc,
    request: utils
});

const mapDispatchToProps = {
    signup,
    personalInformation,
    businessInformation
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);