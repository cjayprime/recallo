import React, { Component } from "react";
import Paystack from "react-paystack";

import logo from "../../../assets/img/appLogo.png";
import Button from "../../../components/Button/button";
import paymentbadge from "../../../assets/img/paymentbadge.png";

class PlanSelection extends Component {

  state = {
    plan: "monthly",
    paystack: false
  }

  componentDidMount(){

    const { plans } = this.props;

    [
      'payment-plans',
      'payment-addition',
      'did'
    ].map(category => {
      plans(category, 
        (param) => {
          if(category === "payment-plans"){
            const {plans} = param;
            if(plans && plans.length > 0){
              this.set(
                'planID',
                plans[0]._id
              );
            }
          }else if(category === "payment-addition"){
            const {ref} = param;
            if(ref){
              this.set(
                'reference',
                ref
              );
            }
          }else if(category === "did"){
            const {dids} = param;
            if(dids && dids.length > 0){
              this.set(
                'did',
                dids[0].did
              )
            }
          }
        });
    });

  }

  continue = () => {
    const { nextStep } = this.props;
    console.log('COMPLETE!!!')
    nextStep();
  };

  close = () => this.setState({paystack: false});

  set = (name, value) => {
    const { handleChange } = this.props;
    handleChange(value, name, '');
  }

  render() {
    const {
      form: {
        did,
        planID,
      },
      account: {
        payment: {reference, publickey, amount, plans, dids},
        business: {email}
      }
    } = this.props;
    
    return (
      <>
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
                In a few steps, your account will be up and running. <br /> <br />{" "}
                Let's get started.
              </h5>
            </div>
            <div className="onboard-info">
              <div className="onboard-title">
                <h2 className="light text-main">Plan Selection</h2>
                <div className="row-direction align-center">
                  <p className="text-main bold mr-8">3 of 3</p>
                  <div className="row-direction">
                    <p className="plan-bar-1" />
                    <p className="plan-bar-2" />
                    <p className="plan-bar-3" />
                  </div>
                </div>
              </div>
              <hr />
              <form>
                <div className="plan">
                  <div className="row mb-16">
                    <h3 className="bold">Select a Plan</h3>
                    <h5 className="bold">
                      <span
                        className={"mr-12 " + (this.state.plan === "monthly" ? "text-blue" : "text-light")}
                        style={{cursor: "pointer"}}
                        onClick={() => this.setState({plan: "monthly"})}
                      >
                        Monthly
                      </span>
                      <span
                        className={"mr-12 " + (this.state.plan === "yearly" ? "text-blue" : "text-light")}
                        style={{cursor: "pointer"}}
                        onClick={() => this.setState({plan: "yearly"})}
                      >
                        Yearly
                      </span>
                    </h5>
                  </div>
                  <div className="plan-row">
                    {
                      plans.map((plan, i) => {
                        if(plan.plan_type === this.state.plan)
                        return (
                          <div className="plan-card" key={i}>
                            <div className="radio">
                              <input
                                type="radio"
                                name="plan"
                                checked={!planID || planID === plan._id}
                                onChange={() => this.set('planID', plan._id)}
                              />
                            </div>
                            <div className="text-center plan-details">
                              <h2 className="mb-10">{plan.agents} users</h2>
                              <p className="light uppercase text-light">
                                {plan.mins_call_log} mins call log
                              </p>
                              <hr />
                              <h5 className="bold mb-4 text-main">
                                ₦{plan.amount_per_month}<span className="text-main light">/month</span>
                              </h5>
                              <p className="light text-light">₦{plan.setup_fee} setup fee</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="mt-24">
                    <div className="plan-amount-text">
                      <h6 className="text-light">Per month in total, you pay</h6>
                    </div>
                    <div className="plan-amount">
                      <div className="amount-box">
                        <h5>₦</h5>
                        <h5>
                          {
                            plans.reduce((prev, current) => {
                              if(current.plan_type === this.state.plan)
                              return prev + current.amount_per_month + current.setup_fee;

                              return prev;
                            }, 0)
                          }
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="plan-did">
                    <select
                      className="onboard-select"
                      onChange={(e) => this.set('did', e.target.value)}
                    >
                      {
                        dids.map((prop, i) => (
                          <option key={i} value={did.did}>
                            {prop.did}
                          </option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="plan-payment">
                    {/*<h3 className="bold">Payment details</h3>
                    <FormField
                      labelClass="payment-label"
                      className="onboard-input br-8 mb-32"
                      placeholder="Card number"
                      labelTitle="Card number"
                      type="text"
                      value={email}
                      onChange={handleChange}
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
                    </div>*/}
                    <p className="text-light light mb-32">
                      Your payment details are safe and secured
                    </p>
                    <div className="mb-32">
                      <img src={paymentbadge} alt="Payment Secured by paystack" />
                    </div>
                    <div className="mb-24">
                      <Button
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          this.setState({paystack: true});
                        }}
                        className="br-8 blue-button text-white"
                        padding="11px 37px"
                      >
                        Start my Account
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {
          this.state.paystack === true &&
          <>
            <div style={{width: '100%', height: '100%', left: 0, top: 0, position: 'fixed', background: '#000', opacity: 0.5, zIndex: 100000000000}}
              onClick={this.close}
            />
            <div style={{width: '25%', height: '50%', left: '37.5%', top: '25%', position: 'fixed', background: '#FFF', zIndex: 100000000000, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Paystack
                text="Make 100 naira Payment"
                className="payButton"
                callback={this.continue}
                close={this.close}
                disabled={true}
                embed={true}
                reference={reference}
                email={email}
                amount={parseFloat(amount) * 100}
                paystackkey={publickey}
                tag="button"
              />
            </div>
          </>
        }
      </>
    );
  }
}

export default PlanSelection;
