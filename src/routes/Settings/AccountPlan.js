import React from "react";

import Button from "../../components/Button/button";

const AccountPlan = (props) => {
  return (
    <>
      <div className="screen-padding mt-80">
        <div className="row mb-24">
          <div className="col-28">
            <div className="overview blue-hover text-center br-8">
              <div className="pt-40 mb-40">
                <h6 className="bold pb-32 deep-blue">BASIC</h6>
                <p className="price text-main pb-8">
                  ₦2000<sub className="text-main light">/month</sub>
                </p>
                <h6 className="light text-light">₦5000 setup fee</h6>
              </div>
              <hr />
              <div className="pt-32 mb-40">
                <h4 className="light text-light pb-8 mb-32">
                  {" "}
                  <span>2 users</span>
                  <br />
                  <br />
                  <span>100 mins</span>
                </h4>
                <Button
                  className="br-30"
                  padding="12px 34px"
                  background="var(--text-color)"
                  text="#fff"
                >
                  <h6 className="bold">Subcribe</h6>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-28">
            <div className="overview blue-hover text-center br-8">
              <div className="pt-40 mb-40">
                <h6 className="bold pb-32 deep-blue">STANDARD</h6>
                <p className="price text-main pb-8">
                  ₦5000<sub className="text-main light">/month</sub>
                </p>
                <h6 className="light text-light">₦10000 setup fee</h6>
              </div>
              <hr />
              <div className="pt-32 mb-40">
                <h4 className="light text-light pb-8 mb-32">
                  {" "}
                  <span>5 users</span>
                  <br />
                  <br />
                  <span>175 mins</span>
                </h4>
                <Button
                  className="br-30"
                  padding="12px 34px"
                  background="var(--text-color)"
                  text="#fff"
                >
                  <h6 className="bold">Subcribe</h6>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-28">
            <div className="overview blue-hover text-center br-8">
              <div className="pt-40 mb-40">
                <h6 className="bold pb-32 deep-blue">PREMIUM</h6>
                <p className="price text-main pb-8">
                  ₦10000<sub className="text-main light">/month</sub>
                </p>
                <h6 className="light text-light">₦20000 setup fee</h6>
              </div>
              <hr />
              <div className="pt-32 mb-40">
                <h4 className="light text-light pb-8 mb-32">
                  {" "}
                  <span>10 users</span>
                  <br />
                  <br />
                  <span>350 mins</span>
                </h4>
                <Button
                  className="br-30"
                  padding="12px 34px"
                  background="var(--text-color)"
                  text="#fff"
                >
                  <h6 className="bold">Subcribe</h6>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
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
      </div>
    </>
  );
};

export default AccountPlan;
