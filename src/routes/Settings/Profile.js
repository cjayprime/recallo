import React from "react"

import Button from "../../components/Button/button"
import FormField from "../../components/Form"

const Profile = (props) => {
  return (
    <>
      <div className="screen-padding mt-80">
        <div className="overview br-16 plr-32 pb-32 mb-32">
          <form>
            <div className="row mb-23">
              <h4 className="bold pt-32">Personal information</h4>
              <div className="pt-23">
                <Button className="br-30 save orange-hover" padding="12px 32px">
                  <h6>Save</h6>
                </Button>
              </div>
            </div>
            <div className="column-direction col-8">
              <div className="row mb-16">
                <div className="col-7">
                  <FormField
                    labelTitle="First name"
                    labelClass="profile-label"
                    placeholder="Uche"
                    className="br-8 profile-input p-12"
                  />
                </div>
                <div className="col-7">
                  <FormField
                    labelTitle="Last name"
                    labelClass="profile-label"
                    placeholder="Rufus"
                    className="br-8 profile-input p-12"
                  />
                </div>
              </div>
              <FormField
                labelTitle="Email address"
                labelClass="profile-label"
                placeholder="ucherufus@gmail.com"
                className="mb-16 br-8 profile-input p-12"
              />
            </div>
          </form>
        </div>
        <div className="overview br-16 plr-32 pb-32">
          <form>
            <div className="row mb-23">
              <h4 className="bold pt-32">Business information</h4>
              <div className="pt-23">
                <Button className="br-30 save orange-hover" padding="12px 30px">
                  <h6>Save</h6>
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="column-direction col-8">
                <div className="row mb-16">
                  <div className="col-7">
                    <FormField
                      labelTitle="Business name"
                      labelClass="profile-label"
                      placeholder="AutoMedics Africa Limited"
                      className="br-8 profile-input p-12"
                    />
                  </div>
                  <div className="col-7">
                    <FormField
                      labelTitle="Business phone number"
                      labelClass="profile-label"
                      placeholder="Rufus"
                      className="br-8 profile-input p-12"
                    />
                  </div>
                </div>
                <FormField
                  labelTitle="Business email address"
                  labelClass="profile-label"
                  placeholder="ucherufus@gmail.com"
                  className="mb-16 br-8 profile-input p-12"
                />
                <FormField
                  labelTitle="Business address"
                  labelClass="profile-label"
                  placeholder="ucherufus@gmail.com"
                  className="mb-16 br-8 profile-input p-12"
                />
                <div className="row mb-16">
                  <div className="col-7">
                    <FormField
                      labelTitle="Business RC"
                      labelClass="profile-label"
                      placeholder="Rufus"
                      className="br-8 profile-input p-12"
                    />
                  </div>
                  <div className="col-7">
                    <FormField
                      labelTitle="Business website"
                      labelClass="profile-label"
                      placeholder="Rufus"
                      className="br-8 profile-input p-12"
                    />
                  </div>
                </div>
              </div>
              <hr className="vertical-hr ml-35" />
              <div className="col-9 column-direction align-center justify-center">
                <div className="business-logo mb-24">
                  <p className="logo-text">AM</p>
                </div>
                <h6 className="text-light mb-16">Upload business logo</h6>
                <Button
                  padding="12px"
                  className="text-blue bc-blue br-8 upload-button"
                >
                  Upload image
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile
