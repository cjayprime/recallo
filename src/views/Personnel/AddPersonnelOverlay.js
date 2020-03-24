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
                        <div className="personnel-checkbox">
                            <h6 className="mb-16 light profile-label">Days active</h6>
                            <form className="mb-32 row-direction">
                                <div className="checkbox ">
                                    <label className="cursor mb-16 checkbox-label">
                                        <h5 className="text-blue light">Monday</h5>
                                        <input type="checkbox" checked="checked"/>
                                        <span className="check-mark"/>
                                    </label>
                                    <label className="cursor mb-16 checkbox-label">
                                        <h5 className="text-blue light">Tuesday</h5>
                                        <input type="checkbox" />
                                        <span className="check-mark"/>
                                    </label>
                                    <label className="cursor mb-16 checkbox-label">
                                        <h5 className="text-blue light">Wednesday</h5>
                                        <input type="checkbox" checked="checked"/>
                                        <span className="check-mark"/>
                                    </label>
                                    <label className="cursor mb-16 checkbox-label">
                                        <h5 className="text-blue light">Thursday</h5>
                                        <input type="checkbox" />
                                        <span className="check-mark"/>
                                    </label>
                                </div>
                                <div className="checkbox " style={{marginLeft: 100}}>
                                    <label className="cursor mb-16 checkbox-label">
                                        <h5 className="text-blue light">Friday</h5>
                                        <input type="checkbox" />
                                        <span className="check-mark"/>
                                    </label>
                                    <label className="cursor mb-16 checkbox-label">
                                        <h5 className="text-blue light">Saturday</h5>
                                        <input type="checkbox" checked="checked"/>
                                        <span className="check-mark"/>
                                    </label>
                                    <label className="cursor mb-16 checkbox-label">
                                        <h5 className="text-blue light">Sunday</h5>
                                        <input type="checkbox" />
                                        <span className="check-mark"/>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <Button className="br-30" padding={"12px 30px"} background={"var(--text-color)"} text={"#fff"}>Add personnel</Button>
                    </div>
                </div>
            </Overlay>
        )
    }
}

export default PersonnelOverlay;