import React, { Component } from "react";

import Button from "../../components/Button/button";
import TextInput from "../../components/Form/TextInput";

class Profile extends Component {
  render() {
    const { form, handleChange } = this.props;
    const { user, business } = form;
    return (
      <>
        <div className="screen-padding mt-80">
          <div className="overview br-16 plr-32 pb-32 mb-32">
            <form>
              <div className="row mb-23">
                <h4 className="bold pt-32">Personal information</h4>
                <div className="pt-23">
                  <Button
                    className="br-30 save orange-hover"
                    padding="12px 32px"
                  >
                    <h6>Save</h6>
                  </Button>
                </div>
              </div>
              <div className="column-direction col-8">
                <div className="mb-16">
                  <TextInput
                    labelTitle="First name"
                    labelClass="profile-label"
                    placeholder="Uche"
                    onChange={handleChange}
                    name="name"
                    value={user.name}
                    className="br-8 profile-input p-12"
                  />
                </div>
                <TextInput
                  labelTitle="Email address"
                  type="email"
                  value={user.email}
                  name="email"
                  onChange={handleChange}
                  labelClass="profile-label"
                  placeholder="ucherufus@gmail.com"
                  className="mb-16 br-8 profile-input p-12"
                />
                <div className="row-direction">
                  <TextInput
                    labelTitle="password"
                    type="password"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                    labelClass="profile-label"
                    placeholder="******"
                    className="mb-16 br-8 profile-input p-12"
                  />
                  <Button className="br-8 pass-btn" padding="12px 12px">
                    <h6>Change password</h6>
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="overview br-16 plr-32 pb-32">
            <form>
              <div className="row mb-23">
                <h4 className="bold pt-32">Business information</h4>
                <div className="pt-23">
                  <Button
                    className="br-30 save orange-hover"
                    padding="12px 30px"
                  >
                    <h6>Save</h6>
                  </Button>
                </div>
              </div>
              <div className="row">
                <div className="column-direction col-8">
                  <div className="row mb-16">
                    <div className="col-7">
                      <TextInput
                        labelTitle="Business name"
                        labelClass="profile-label"
                        placeholder="AutoMedics Africa Limited"
                        className="br-8 profile-input p-12"
                        name="name"
                        onChange={handleChange}
                        value={business.name}
                      />
                    </div>
                    <div className="col-7">
                      <TextInput
                        labelTitle="Business phone number"
                        labelClass="profile-label"
                        placeholder="Rufus"
                        className="br-8 profile-input p-12"
                        name="mobile"
                        onChange={handleChange}
                        value={business.mobile}
                      />
                    </div>
                  </div>
                  <TextInput
                    labelTitle="Business email address"
                    labelClass="profile-label"
                    placeholder="ucherufus@gmail.com"
                    className="mb-16 br-8 profile-input p-12"
                    name="email"
                    onChange={handleChange}
                    value={business.email}
                  />
                  <TextInput
                    labelTitle="Business address"
                    labelClass="profile-label"
                    placeholder="ucherufus@gmail.com"
                    className="mb-16 br-8 profile-input p-12"
                    name="address"
                    onChange={handleChange}
                    value={business.address}
                  />
                  <div className="row mb-16">
                    <div className="col-7">
                      <TextInput
                        labelTitle="Business RC"
                        labelClass="profile-label"
                        placeholder="Rufus"
                        className="br-8 profile-input p-12"
                        name="rc"
                        onChange={handleChange}
                        value={business.rc}
                      />
                    </div>
                    <div className="col-7">
                      <TextInput
                        labelTitle="Business website"
                        labelClass="profile-label"
                        placeholder="Rufus"
                        className="br-8 profile-input p-12"
                        name="website"
                        onChange={handleChange}
                        value={business.website}
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
    );
  }
}

export default Profile;
