import React, { Component } from "react";

import Profile from "./Profile";
import AccountPlan from "./AccountPlan";
import IvrMenu from "./IvrMenu";
import ServiceLevel from "./ServiceLevel";
import BusinessHours from "./BusinessHours";

import SettingLayoutPage from "../../components/AppSettingHeader/SettingLayoutPage";

class ManageAccount extends Component {
  state = {
    active: "Profile",
    profile: {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        oldPassword: "",
        newPassword: "",
        password: "",
        error: ''
      },
      business: {
        name: "",
        mobile: "",
        email: "",
        address: "",
        website: "",
        rc: "",
        error: ''
      },
    },
  };

  styles = {
    tabs: (active) => {
      return {
        height: 5,
        width: "100%",
        backgroundColor: active ? "#0072A3" : "transparent",
        borderRadius: "70px",
        transition: ".2s all ease-in-out",
      };
    },
  };

  color = {
    tabs: (active) => {
      return {
        color: active ? "#336799" : "#777777",
        backgroundColor: active ? "#d7e5f1" : "transparent",
        borderRadius:5,
        width:190
      };
    },
  };
  
  handleChange = (value, name, error, section, subSection) => {
    if(!name) return;
    const state = this.state;
    this.setState({
      [section]: {
        ...state[section],
        [subSection]: {
          ...state[section][subSection],
          [name]: value,
          error,
        }
      }
    });
  };

  setActiveTabs = (tab) => {
    this.setState({
      active: tab,
    });
  };

  componentDidUpdate(prevProps){
    const {
      account: {
        user: { firstname, lastname, email },
        business: { name, did, email: mail, address, website, rc }
      } 
    } = this.props;
    if(prevProps.account.user.firstname !== firstname){
      this.setState({
        profile: {
          user: {
            firstname,
            lastname,
            email,
            oldPassword: "",
            newPassword: "",
            password: "",
          },
          business: {
            name,
            mobile: did,
            email: mail,
            address,
            website,
            rc,
          },
        },
      });
    }
  }

  render() {
    const tabs = [
      { tab: "Profile" },
      { tab: "Account Plan" },
      // { tab: "Greetings" },
      { tab: "Business Hours" },
      { tab: "IVR Menu" },
      { tab: "Service Level" },
    ];
    const { active, profile } = this.state;

    return (
      <SettingLayoutPage {...this.props}>
        <div className="profile_tab" style={{marginTop:0}}>
          <div style={{marginTop:110}}>         
            <h4 className="profile_tab_header">SETTINGS</h4>
          </div>
          {tabs.map((tab) => (
            <div key={tab.tab}>
              <button id="xz"
                type="button"
                className="profile_tablinks"
                onClick={() => this.setActiveTabs(tab.tab)}
                style={this.color.tabs(active === tab.tab)}
              >
                <h5 className="tabText">{tab.tab}</h5>
              </button>
              {/* <div style={this.styles.tabs(active === tab.tab)} />*/}
            </div>
          ))}
        </div>
        <div className="settings">
          {active === "Profile" && (
            <Profile
              {...this.props}
              form={profile}
              handleChange={this.handleChange}
            />
          )}
          {active === "Account Plan" && <AccountPlan />}
          {/*{active === "Greetings" && <Greetings />}*/}
          {active === "Greetings" && <IvrMenu />}
          {active === "Greetings" && <ServiceLevel />}
          {active === "Business Hours" && (
            <BusinessHours handleChange={this.handleChange} />
          )}
        </div>
      </SettingLayoutPage>
    );
  }
}

export default ManageAccount;
