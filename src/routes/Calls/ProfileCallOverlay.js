import React, { Component } from "react";
import Overlay from "../../components/Overlay";
import Button from "../../components/Button/button";



class ProfileCallOverlay extends Component{

    constructor() {
        super();
        this.state = {
            showMenuCard: false
        }
    }

    show() {
        this.setState({
            showMenuCard: !this.state.showMenuCard
        })
    }

    render() {

        const { open, toggle } = this.props;

        return(
            <Overlay open={open} toggle={toggle} width="96rem">
                <div>
                    <h4 className="mb-8">Profiled call from +2348051113453</h4>
                    <h6 className="light text-light mb-32">Edit call details</h6>
                    <div className="mb-32 flex">
                        <div className="flex-1">
                            <div className="background-grey flex view-profile-table">
                                <h6 className="text-light flex-1 light">Call ID</h6>
                                <h6 className="flex-3">+2348051113453</h6>
                            </div>
                            <div className="flex view-profile-table">
                                <h6 className="text-light flex-1 light">Personnel</h6>
                                <h6 className="flex-3">Grace Audu</h6>
                            </div>
                            <div className="background-grey flex view-profile-table">
                                <h6 className="text-light flex-1 light">Date Time</h6>
                                <h6 className="flex-3">22-01-2020 12:03:pm</h6>
                            </div>
                            <div className="flex view-profile-table">
                                <h6 className="text-light flex-1 light">Duration</h6>
                                <h6 className="flex-3">3mins 2secs</h6>
                            </div>
                            <div className="background-grey flex view-profile-table">
                                <h6 className="text-light flex-1 light">Status</h6>
                                <h6 className="flex-3">Answered</h6>
                            </div>
                            <div className="flex view-profile-table">
                                <h6 className="text-light flex-1 light">Age group</h6>
                                <h6 className="flex-3">Youth</h6>
                            </div>
                            <div className="background-grey flex view-profile-table">
                                <h6 className="text-light flex-1 light">Gender</h6>
                                <h6 className="flex-3">Female</h6>
                            </div>
                        </div>
                        <div className="flex-1 ml-35">
                            <div className="flex">
                                <div>
                                    <h6 className="text-light flex-1 light">Select age group</h6>
                                    <label className="profile-call-label mt-16 cursor bold">Teenager
                                        <input type="radio" name="radio"/>
                                        <span className="checkmark"/>
                                    </label>
                                    <label className="profile-call-label mt-16 cursor bold">Youth
                                        <input type="radio"  name="radio"/>
                                        <span className="checkmark"/>
                                    </label>
                                    <label className="profile-call-label mt-16 cursor bold">Adult
                                        <input type="radio" name="radio"/>
                                        <span className="checkmark"/>
                                    </label>
                                    <label className="profile-call-label mt-16 cursor bold">Elder
                                        <input type="radio" name="radio"/>
                                        <span className="checkmark"/>
                                    </label>
                                </div>
                                <div className="ml-35">
                                    <h6 className="text-light flex-1 light">Select gender</h6>
                                    <label className="profile-call-label mt-16 cursor bold">Male
                                        <input type="radio" name="radio"/>
                                        <span className="checkmark"/>
                                    </label>
                                    <label className="profile-call-label mt-16 cursor bold">Female
                                        <input type="radio"  name="radio"/>
                                        <span className="checkmark"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-32 flex">
                        <div className="flex-1">
                            <div className="row-direction profile-category-card">
                                <div className="p-16">
                                    <h6 className="light text-light mb-16">Select Category</h6>
                                    <h5 className="mb-8 cursor text-blue hover" onClick={() => this.show()}>Enquiry
                                        <span className="arrow-down ml-8" />
                                    </h5>
                                    {
                                        this.state.showMenuCard ?
                                            <div className="menu-card" style={{marginTop: 0}}>
                                                <h6 className="text-blue light cursor hover-grey">Enquiry</h6>
                                                <h6 className="text-blue light cursor hover-grey">Complaints</h6>
                                                <h6 className="text-blue light cursor hover-grey">Request</h6>
                                                <h6 className="text-blue light cursor hover-grey">Engine fault</h6>
                                            </div>
                                            : null
                                    }
                                    <h6 className="light text-light">Caller raised an issue about engine</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 ml-35">

                        </div>
                    </div>
                    <div className="mb-32">
                        <h6 className="light text-light mb-8">Add Comments</h6>
                        <div className="row-direction profile-category-card mb-16 ">
                            <div className="p-16">
                                <h6 className="light text-light">Caller mentioned a desire to be able to switch mechanics as often as possible</h6>
                            </div>
                        </div>
                    </div>
                    <div className="mb-32 row pt-30">
                        <div>
                            <Button className="br-30 mr-16" padding={"11px 32px"} background={"var(--text-color)"} text={"#fff"}><h6>Save Profile</h6></Button>
                            <Button className="br-30" padding={"11px 32px"} background={"background-grey"} text={"var(--text-color)"}><h6>Profile Next Call</h6></Button>
                        </div>
                        <h6 className="bold text-light cursor" onClick={toggle}>Close</h6>
                    </div>
                </div>
            </Overlay>
        )
    }
}

export default ProfileCallOverlay;