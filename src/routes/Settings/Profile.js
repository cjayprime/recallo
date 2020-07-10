import React, { Component } from "react";

import Button from "../../components/Button/button";
import TextInput from "../../components/Form/TextInput";

import Notification from "../../utils/notification";

class Profile extends Component {
  submit = (e, to) => {
    e.preventDefault();
    const { update, changePassword, form: {user, business} } = this.props;

    if(to === "user"){

      const {firstname, lastname, error} = user;
      const data = {firstname, lastname};
      const dataKeys = Object.keys(data);
      if (
        !error &&
        dataKeys.filter((state) => !!data[state]).length === dataKeys.length
      ) {
        update('edit/personal', {
          first_name: firstname,
          last_name: lastname,
          // mobile: mobile
        });
      } else {
        Notification.error(
          error || "Please fill in the form correctly."
        );
      }

    }else if(to === "business"){

      const {name, email, address, rc, website, mobile, error} = business;
      const data = {name, email/*, address, rc, website*/, mobile};
      const dataKeys = Object.keys(data);
      if (
        !error &&
        dataKeys.filter((state) => !!data[state]).length === dataKeys.length
      ) {
        update('edit/business', {
          business_name: name,
          business_email: email,
          business_address: address,
          business_rc: rc,
          business_website: website,
          did: mobile
          // message:"this is a sample message"
        });
      } else {
        Notification.error(
          error || "Please fill in the form correctly."
        );
      }

    }else if(to === "password"){

      const {oldPassword, newPassword, password, error} = user;
      const data = {oldPassword, newPassword, password};
      const dataKeys = Object.keys(data);
      if (
        !error &&
        dataKeys.filter((state) => !!data[state]).length === dataKeys.length
      ) {
        changePassword({
          current_password: user.oldPassword,
          new_password: user.newPassword,
          cnew_password: user.password
        });
      } else {
        Notification.error(
          error || "Please fill in the form correctly."
        );
      }

    }
  };

  render() {
    const { form: {user, business}, handleChange } = this.props;
    return (
      <>
        <div id="settingscreenDiv" className="screen-padding container background-grey">
          <div className="overview br-16 plr-32 mb-32" style={{height:635}} >
            <form>
              <div className="row mb-23" id="settingContainer">
                <h4 className="pt-32">Personal information</h4>
              </div>
              <div className="column-direction col-8">
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">First Name</p>
                    </div>
                    <div className="col-7">
                      <TextInput
                        labelClass="profile-label"
                        placeholder="Uche"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'user')}
                        name="firstname"
                        value={user.firstname}
                        className="br-8 profile-input p-12"
                      />
                    </div>
                  </div>
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Last Name</p>
                    </div>
                    <div className="col-7">
                      <TextInput
                        labelClass="profile-label"
                        placeholder="Uche"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'user')}
                        name="lastname"
                        value={user.lastname}
                        className="br-8 profile-input p-12"
                      />
                    </div>
                  </div>
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Email address</p>
                    </div>
                    <div className="col-7" id="profileFormInput">
                      <TextInput
                        type="email"
                        value={user.email}
                        name="email"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'user')}
                        labelClass="profile-label"
                        placeholder="ucherufus@gmail.com"
                        className="mb-16 br-8 profile-input p-12"
                      />
                    </div>
                  </div>
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Old Password</p>
                    </div>
                    <div className="col-7" style={{width:230}}>
                      <TextInput
                        type="password"
                        value={user.oldPassword}
                        name="oldPassword"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'user')}
                        labelClass="profile-label"
                        placeholder="******"
                        /*labelTitle="Old"*/
                        className="mb-16 br-8 profile-input p-12"
                      />
             
                    </div>
                  </div>
              
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">New Password</p>
                    </div>
                    <div className="col-7" style={{width:230}}>
                      <TextInput
                        type="password"
                        value={user.newPassword}
                        name="newPassword"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'user')}
                        labelClass="profile-label"
                        placeholder="******"
                        /*labelTitle="New"*/
                        className="mb-16 br-8 profile-input p-12"
                      />
                   
                    </div>
                  
                  </div>
              
               
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Confirm New Password</p>
                    </div>
                    <div className="col-7" style={{width:230}}>
                      <TextInput
                        type="password"
                        value={user.password}
                        name="password"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'user')}
                        labelClass="profile-label"
                        placeholder="******"
                       /* labelTitle="New (Repeat)"*/
                        className="mb-16 br-8 profile-input p-12"
                      />
                   
                    </div>
                    <div className="col-7" style={{marginLeft:515, marginTop:7, position:"absolute"}}>
                      <Button
                        padding="12px 25px"
                        className="text-blue bc-blue br-8 upload-button"
                        onClick={(e) => this.submit(e, 'password')}
                      >
                        <span>Change password</span>
                      </Button>
                    </div>
                  </div>
              
              </div>
              <hr style={{width:1045, marginLeft:-30}}/>
              <div className="pt-23">
                <Button
                  className="br-30 save"
                  padding="12px 50px"
                  onClick={(e) => this.submit(e, 'user')}
                >
                  <h6>Save</h6>
                </Button>
              </div>
            </form>
          </div>
          <div className="overview br-16 plr-32 mb-32" style={{height:595, marginTop: -40}}>
            <form>
              <div className="row mb-23" id="settingContainer">
                <h4 className="pt-32">Business information</h4>
              </div>
              <div className="row">
                <div className="column-direction col-8">
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Business Name</p>
                    </div>
                    <div className="col-7">
                      <TextInput
                        labelClass="profile-label"
                        placeholder="AutoMedics Africa Limited"
                        className="br-8 profile-input p-12"
                        name="name"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'business')}
                        value={business.name}
                      />
                    </div>
                  </div>
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Business Phone Number</p>
                    </div>
                    <div className="col-7" >
                      <TextInput
                        labelClass="profile-label"
                        placeholder="Rufus"
                        className="br-8 profile-input p-12"
                        name="mobile"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'business')}
                        value={business.mobile}
                      />
                    </div>
                  </div>
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Business Email Address</p>
                    </div>
                    <div className="col-7" id="profileFormInput">
                      <TextInput
                        labelClass="profile-label"
                        placeholder="ucherufus@gmail.com"
                        className="mb-16 br-8 profile-input p-12"
                        name="email"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'business')}
                        value={business.email}
                      />
                    </div>
                  </div>
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Business Address</p>
                    </div>
                    <div className="col-7" id="profileFormInput">
                      <TextInput
                        labelClass="profile-label"
                        placeholder="ucherufus@gmail.com"
                        className="mb-16 br-8 profile-input p-12"
                        name="address"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'business')}
                        value={business.address}
                      />
                    </div>
                  </div>
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Business RC</p>
                    </div>
                    <div className="col-7" id="profileFormInput">
                      <TextInput
                        labelClass="profile-label"
                        placeholder="Rufus"
                        className="br-8 profile-input p-12"
                        name="rc"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'business')}
                        value={business.rc}
                      />
                    </div>
                  </div>
                  <div className="row mb-16">
                    <div className="col-7">
                      <p className="formLabel">Business Website</p>
                    </div>
                    <div className="col-7">
                      <TextInput
                        labelClass="profile-label"
                        placeholder="Rufus"
                        className="br-8 profile-input p-12"
                        name="website"
                        onChange={(value, name, error) => handleChange(value, name, error, 'profile', 'business')}
                        value={business.website}
                      />
                    </div>
                  </div>
                  <hr style={{width:1045, marginLeft:-30}}/>
                  <div className="pt-23">
                    <Button
                      className="br-30 save"
                      padding="12px 50px"
                      onClick={(e) => this.submit(e, 'business')}
                    >
                      <h6>Save</h6>
                    </Button>
                  </div>
                </div>
                <div id="sidebussLogo" className="col-9 column-direction background-grey align-center justify-center">
                  <div className="business-logo mb-24" style={{marginTop:20}}>
                    <p className="logo-text">AM</p>
                  </div>
                  <h6 className="text-light mb-16">Upload business logo</h6>
                  <Button
                    padding="12px"
                    className="text-blue bc-blue br-8 upload-button"
                  >
                    <span> Upload image</span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
}

export default Profile;
