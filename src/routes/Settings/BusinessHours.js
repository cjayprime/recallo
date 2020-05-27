import React, { Component } from 'react'

import Button from "../../components/Button/button";
import Select from "../../components/Form/select";
import FormField from '../../components/Form';
import editPen from "../../assets/img/editPen.svg";

class BusinessHours extends Component {
    render() {
        return (
            <>
                <div className="screen-padding mt-80">
                    <div className="overview br-8 pt-30 plr-32 pb-32 mb-24">
                        <form>
                            <h4 className="bold mb-14">Add time slot</h4>
                            <div className="time-slot">
                                <div className="time-slot-1">
                                    <div>
                                        <div className="time-slot-head">
                                            <div className="slot-label">
                                                <p className="text-light label-day">DAY</p>
                                                <p className="text-light start-time">START TIME</p>
                                                <p className="text-light end-time">END TIME</p>
                                            </div>
                                        </div>
                                        <div className="slot">
                                            <div className="business-day">
                                                <p className="days">MON</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                            </div>
                                            <div className="business-day">
                                                <p className="days">TUE</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                            </div>
                                            <div className="business-day">
                                                <p className="days">WED</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                            </div>
                                            <div className="business-day">
                                                <p className="days">THU</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                            </div>
                                            <div className="business-day">
                                                <p className="days">FRI</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                            </div>
                                            <div className="business-day">
                                                <p className="days">SAT</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                            </div>
                                            <div className="business-day">
                                                <p className="days">SUN</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" options="8:00AM" className="time-select" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="extra-time">
                                        <div className="mb-13">
                                            <p className="text-light">EXTRA HOURS</p>
                                        </div>
                                        <div className="slot">
                                            <div className="row-direction">
                                                <FormField
                                                    type="checkbox"
                                                    checkboxClass="checkbox-extra"
                                                />
                                                <Select type="select" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" className="time-select" />
                                            </div>
                                            <div className="row-direction">
                                                <FormField
                                                    type="checkbox"
                                                    checkboxClass="checkbox-extra"
                                                />
                                                <Select type="select" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" className="time-select" />
                                            </div>
                                            <div className="row-direction">
                                                <FormField
                                                    type="checkbox"
                                                    checkboxClass="checkbox-extra"
                                                />
                                                <Select type="select" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" className="time-select" />
                                            </div>
                                            <div className="row-direction">
                                                <FormField
                                                    type="checkbox"
                                                    checkboxClass="checkbox-extra"
                                                />
                                                <Select type="select" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" className="time-select" />
                                            </div>
                                            <div className="row-direction">
                                                <FormField
                                                    type="checkbox"
                                                    checkboxClass="checkbox-extra"
                                                />
                                                <Select type="select" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" className="time-select" />
                                            </div>
                                            <div className="row-direction">
                                                <FormField
                                                    type="checkbox"
                                                    checkboxClass="checkbox-extra"
                                                />
                                                <Select type="select" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" className="time-select" />
                                            </div>
                                            <div className="row-direction">
                                                <FormField
                                                    type="checkbox"
                                                    checkboxClass="checkbox-extra"
                                                />
                                                <Select type="select" className="time-select" />
                                                <p className="text-light to">TO</p>
                                                <Select type="select" className="time-select" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-info">
                                    <p className="time-info-i">i</p>
                                    <p className="light mb-16">Any time of day outside of the chosen working/extra hours would be diverted to voicenote.</p>
                                    <p className="light">
                                        Extra hours time are Compellingly evolve empowered alignments
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="overview br-8 pt-30 pb-32 plr-32">
                        <div className="holiday">
                            <div className="holiday-form">
                                <form>
                                    <div className="holiday-head mb-30">
                                        <h4 className="bold">Holidays</h4>
                                        <h6 className="text-blue bold">+Add Holiday</h6>
                                    </div>
                                    <table>
                                        <tr>
                                            <th>NAME OF HOLIDAY</th>
                                            <th>DATE</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td><h6>Christmas Day</h6></td>
                                            <td><h6>December 25</h6></td>
                                            <td>
                                                <div className="row-direction">
                                                    <div className="mr-16">
                                                        <img src={editPen} alt="pen" className="edit-pen" />
                                                        <p className="bold">Edit</p>
                                                    </div>
                                                    <div>
                                                        <img src={editPen} alt="pen" className="edit-pen" />
                                                        <p>Delete</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h6>Independence Day</h6></td>
                                            <td><h6>October 1</h6></td>
                                            <td>
                                                <div className="row-direction">
                                                    <div className="mr-16">
                                                        <img src={editPen} alt="pen" className="edit-pen" />
                                                        <p>Edit</p>
                                                    </div>
                                                    <div>
                                                        <img src={editPen} alt="pen" className="edit-pen" />
                                                        <p>Delete</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    <Button padding="12px 187px" className="br-30 text-white" background={"#336799"}>Save</Button>
                                </form>
                            </div>
                            <div className="holiday-info">
                                <p className="holiday-info-i">i</p>
                                <p className="light">Holiday are periods rapidiously implement cutting-edge paradigms without efficient markets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BusinessHours;