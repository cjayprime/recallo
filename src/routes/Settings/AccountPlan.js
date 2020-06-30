import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button/button";
import FormField from "../../components/Form";



const AccountPlan = () => {
  return (
    <>
   
      <div id="settingscreenDiv" className="screen-padding container background-grey">
        <div style={{backgroundColor:"white", paddingBottom:100, borderRadius:10}}>
        <div className="row mb-64" id="settingContainer">
          <div className="MonthlySub">
            <div className="plan-header">
            <h4>Account Plan</h4><br/><br/>
            <h6 className="mt-4 light">Recallo Premium</h6>

            </div>
          <div className="overview br-15 p-24 mb-56" id="planDiv">
              <h4 className="bold text-main mb-24">
                Your current subscription
              </h4>
              <div className="row mb-40">
              <div className="subcription-details">
                <h6 className="Title-tag" id="Title-tag">Started</h6>
                  <h6 className="Title-tag" id="Title-tag">End</h6>
                </div>
                <div className="subcription-details">
                <h6 className="mt-4 light">10th Feb, 2020</h6><br/>
                  <h6 className="mt-4 light">10th Feb, 2020</h6>
                </div>
                <div className="subcription-details">
                  <h6 className="Title-tag" id="Title-tag">Call allowance</h6>
                </div>
                <div className="subcription-details">
                  <h6 className="mt-4 light">100 mins</h6>
                </div>

                <div className="subcription-details">
                </div>
                <div className="subcription-details">
                </div>

                <div>
                <p className="label-style">Active</p>

                </div>
              </div>
             
              <hr className="mb-23" />
              <div className="row">
                <div>
                  <div className="myProgress mb-10">
                    <div
                      className="bar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "23%" }}
                    />
                  </div>
                  <h6 className="text-light ">23 mins remaining</h6>
                </div>
                <div>
                  <Button
                    className="br-30 bc-blue"
                    padding="12px 34px"
                    background="#fff"
                  >
                    <h6 className="bold text-blue">Buy more minutes</h6>
                  </Button>
                </div>
              </div>
            </div>
            

            
          </div>
          
        </div>

        <div className="row mb-64" style={{marginTop:380}}>
          <div className="MonthlySub">
          <div className="plan-header">
            <div className="row mb-40">
              <div className="subcription-details">
                <h6 className="Title-tag" id="Title-tag">Subscription</h6>
                </div>
                <div className="subcription-details">
                </div>

                <div className="subcription-details">
                <span className="planTag">Montly</span>
                <span className="planTag">Yearly</span>
                </div>
                
                <div className="subcription-details">
                </div>
                <div className="subcription-details">
                </div>
              </div>
            </div>
          </div>
          
        </div>

       <div className="MonthlySub2">
        <div className="row mb-24" id="settingContainer">
          <div className="col-28">
            <div className="overview blue-hover text-center" id="zz">
              <div className="pt-30 mb-30">
                <h6 className="bold pb-32 deep-blue">BASIC</h6>
                <hr /><br/><br/>
                <p className="price text-main" id="planPrice">
                  <sup>₦</sup>
                  2,000<sub>/mo</sub>
                </p>
              </div>
              <hr style={{marginTop:-10}}/>
              <div className="pt-32 mb-40">
                <h4 className="light text-light pb-0 mb-32" style={{marginTop:-20}}>
               
                  <span className="planText1">Setup fee</span>
                  
                  <span className="planText2">#5,000</span>
                </h4>
                <hr />
                <h4 className="light text-light pb-8 mb-32">
               
                    <span className="planText3">Users</span>
                    
                    <span className="planText4">2</span>
                  </h4>
             <hr />
                <br/><br/>
                <Button
                  className="br-30"
                  padding="12px 44px"
                  background="var(--text-color)"
                  text="#fff"
                >
                  <h6 id="buttonText" className="bold">Subcribe</h6>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="col-28">
            <div className="overview blue-hover text-center" id="zz">
              <div className="pt-30 mb-30">
                <h6 className="bold pb-32 deep-blue">STANDARD</h6>
                <hr /><br/><br/>
                <p className="price text-main" id="planPrice">
                  <sup>₦</sup>
                  5,000<sub>/mo</sub>
                </p>
              </div>
              <hr style={{marginTop:-10}}/>
              <div className="pt-32 mb-40">
                <h4 className="light text-light pb-0 mb-32" style={{marginTop:-20}}>
               
                  <span className="planText1">Setup fee</span>
                  
                  <span className="planText2">#10,000</span>
                </h4>
                <hr />
                <h4 className="light text-light pb-8 mb-32">
               
                    <span className="planText3">Users</span>
                    
                    <span className="planText4">5</span>
                  </h4>
             <hr />
                <br/><br/>
                <Button
                  className="br-30"
                  padding="12px 44px"
                  background="var(--text-color)"
                  text="#fff"
                >
                  <h6 id="buttonText" className="bold">Subcribe</h6>
                </Button>
              </div>
            </div>
          </div>
        
          <div className="col-28">
            <div className="overview blue-hover text-center" id="zz">
              <div className="pt-30 mb-30">
                <h6 className="bold pb-32 deep-blue">PREMIUM</h6>
                <hr /><br/><br/>
                <p className="price text-main" id="planPrice">
                  <sup>₦</sup>
                  10,000<sub>/mo</sub>
                </p>
              </div>
              <hr style={{marginTop:-10}}/>
              <div className="pt-32 mb-40">
                <h4 className="light text-light pb-0 mb-32" style={{marginTop:-20}}>
               
                  <span className="planText1">Setup fee</span>
                  
                  <span className="planText2">#20,000</span>
                </h4>
                <hr />
                <h4 className="light text-light pb-8 mb-32">
                  
                  <span className="planText3">Users</span>
                  
                  <span className="planText4">10</span>
                </h4>
             <hr />
                <br/><br/>
                <Button
                  className="br-30"
                  padding="12px 44px"
                  background="var(--text-color)"
                  text="#fff"
                >
                  <h6 id="buttonText" className="bold">Subcribe</h6>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="col-28">
            <div className="overview blue-hover text-center br-8">
              <div>
              
                <h6 className="planCoupon">Got Coupons?</h6>

                <form>
                    <div className="row">
                        <input
                        className="planInput"
                          type="text"
                          placeholder="Enter Coupon"
                        />
                        <Button className="planButton" padding="9px 12px">
                            <h6>APPLY</h6>
                          </Button>
                  </div><br/><br/><br/>
                  <hr/>

                </form>
              </div>
           
            </div>
          </div>
        
        </div>
        </div>
      {/*
        <div className="MonthlySub2">
          <div className="col-64">
            <div className="overview br-15 p-24 mb-56">
              <h4 className="bold text-main mb-24">
                Your current subscription
              </h4>
              <div className="row mb-40">
                <div className="subcription-details">
                  <p className="text-light bold">Account plan</p>
                  <h6 className="mt-4 light">Basic</h6>
                </div>
                <div className="subcription-details">
                  <p className="text-light bold">Started</p>
                  <h6 className="mt-4 light">10th Feb, 2020</h6>
                </div>
                <div className="subcription-details">
                  <p className="text-light bold">Ends</p>
                  <h6 className="mt-4 light">10th Mar, 2020</h6>
                </div>
                <div className="subcription-details">
                  <p className="text-light bold">Features</p>
                  <h6 className="mt-4 light">100 mins (2 users)</h6>
                </div>
              </div>
             
              <hr className="mb-23" />
              <div className="row">
                <div>
                  <div className="myProgress mb-10">
                    <div
                      className="bar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "23%" }}
                    />
                  </div>
                  <h6 className="text-light ">23 mins remaining</h6>
                </div>
                <div>
                  <Button
                    className="br-30 bc-blue"
                    padding="12px 24px"
                    background="#fff"
                  >
                    <h6 className="bold text-blue">Upgrade plan</h6>
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="light text-light mb-12">
                Your subscription will automatically renew on 10th Mar, 2020 and
                you will be charged ₦2000
              </h5>
              <Button
                padding="12px 30px"
                background="#eeeeee"
                className="text-blue br-30 bn"
              >
                <h6>Proceed to cancel now</h6>
              </Button>
            </div>
          </div>
        </div>
      */}
        </div>
      </div>
    </>
  );
};

export default AccountPlan;
