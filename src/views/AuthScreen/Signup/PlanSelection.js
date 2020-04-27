import React, { Component } from 'react';
import {Link} from "react-router-dom";

import logo from "../../../assets/img/appLogo.png";
import FormField from "../../../components/Form";
import Button from "../../../components/Button/button";
import paymentbadge from "../../../assets/img/paymentbadge.png";

class PlanSelection extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="app-header">
                        <div>
                            <img className="logo" src={logo} alt="Recallo logo" />
                        </div>
                    </div>
                </header>
                <div className="onboard">
                    <div className="onboard-welcome">
                        <h1 className="bold mb-24">Welcome to Recallo</h1>
                        <h5 className="light text-light">
                            In a few steps, your account will be up and running. <br /> <br /> Let's get started.
                        </h5>
                    </div>
                    <div className="onboard-info">
                        <div className="onboard-title">
                            <h2 className="light text-main">Plan Selection</h2>
                            <div className="row-direction align-center">
                                <p className="text-main bold mr-8">3 of 3</p>
                                <p className="row-direction">
                                    <p className="plan-bar-1"></p>
                                    <p className="plan-bar-2"></p>
                                    <p className="plan-bar-3"></p>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <form>
                            <div className="plan">
                                <div className="row mb-16">
                                    <h3 className="bold">Select a Plan</h3>
                                    <h5 className="bold"><span className="text-blue mr-12">Monthly</span><span className="text-light">Yearly</span></h5>
                                </div>
                                <div className="plan-row">
                                    <div className="plan-card">
                                        <div className="radio">
                                            <input type="radio" name="plan" />
                                        </div>
                                        <div className="text-center plan-details">
                                            <h2 className="mb-10">2 users</h2>
                                            <p className="light uppercase text-light">100 mins call log</p>
                                            <hr />
                                            <h5 className="bold mb-4 text-main">₦2000<span className="text-main light">/month</span></h5>
                                            <p className="light text-light">₦5000 setup fee</p>
                                        </div>
                                    </div>
                                    <div className="plan-card">
                                        <div className="radio">
                                            <input type="radio" name="plan" />
                                        </div>
                                        <div className="text-center plan-details">
                                            <h2 className="mb-10">5 users</h2>
                                            <p className="light uppercase text-light">175 mins call log</p>
                                            <hr />
                                            <h5 className="bold mb-4 text-main">₦2000<span className="text-main light">/month</span></h5>
                                            <p className="light text-light">₦5000 setup fee</p>
                                        </div>
                                    </div>
                                    <div className="plan-card">
                                        <div className="radio">
                                            <input type="radio" name="plan" />
                                        </div>
                                        <div className="text-center plan-details">
                                            <h2 className="mb-10">10 users</h2>
                                            <p className="light uppercase text-light">350 mins call log</p>
                                            <hr />
                                            <h5 className="bold mb-4 text-main">₦2000<span className="text-main light">/month</span></h5>
                                            <p className="light text-light">₦5000 setup fee</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-24">
                                    <div className="plan-amount-text">
                                        <h6 className="text-light">Per month in total, you pay</h6>
                                    </div>
                                    <div className="plan-amount">
                                        <div className="amount-box">
                                            <h5>₦</h5><h5>7,000</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="plan-did">
                                    <FormField
                                        type="select"
                                        className="onboard-select"
                                        labelTitle="Select your DID"
                                        labelTitleRight="What is s DID?"
                                        labelClass="did-label-left"
                                        labelClassRight="did-label-right"
                                    />
                                </div>
                                <div className="plan-payment">
                                    <h3 className="bold">Payment details</h3>
                                    <FormField
                                        labelClass="payment-label"
                                        className="onboard-input br-8 mb-32"
                                        placeholder="Card number"
                                        labelTitle="Card number"
                                    />
                                    <div className="row mb-24">
                                        <FormField
                                            className="onboard-input br-8"
                                            placeholder="Security code"
                                            labelTitle="CVV code"
                                        />
                                        <FormField
                                            className="onboard-input br-8"
                                            placeholder="mm/yy"
                                            labelTitle="Expiration"
                                        />
                                    </div>
                                    <p className="text-light light mb-32">Your payment details are safe and secured</p>
                                    <div className="mb-32">
                                        <img src={paymentbadge} alt="Payment Secured by paystack" />
                                    </div>
                                    <div className="mb-24">
                                        <Link to="/admin/home">
                                            <Button className="br-8 blue-button text-white" padding={"11px 37px"}>Start my Account</Button></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlanSelection;