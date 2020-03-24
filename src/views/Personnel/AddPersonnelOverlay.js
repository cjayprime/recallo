import React, { Component } from "react";
import Overlay from "../../components/Overlay";
import FormField from "../../components/Form";
import Button from "../../components/Button/button";


class PersonnelOverlay extends Component{

    render() {

        const { open, toggle } = this.props;

        return(
            <Overlay open={open} toggle={toggle}>
                <div>
                    <h4 className="mb-8">Add Personnel</h4>
                    <h6 className="light text-light mb-32"></h6>
                    <div>
                        <div className="row">
                            <div className="col-7">
                                <FormField
                                    labelTitle="First name"
                                    labelClass="profile-label"
                                    className="br-8 profile-input p-12 mb-16"
                                />
                            </div>
                            <div className="col-7">
                                <FormField
                                    labelTitle="Last name"
                                    labelClass="profile-label"
                                    className="br-8 profile-input p-12 mb-16"
                                />
                            </div>
                        </div>
                        <FormField
                            labelTitle="Email"
                            labelClass="profile-label"
                            className="br-8 profile-input p-12 mb-16"
                        />
                        <Button className="br-30" padding={"12px 30px"} background={"var(--text-color)"} text={"#fff"}>Add personnel</Button>
                    </div>
                </div>
            </Overlay>
        )
    }
}

export default PersonnelOverlay;