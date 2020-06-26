import React, { Component } from "react";

import Profile from "./Profile";
import AccountPlan from "./AccountPlan";
import IvrMenu from "./IvrMenu";
import ServiceLevel from "./ServiceLevel";
//import Greetings from "./Greetings";
import BusinessHours from "./BusinessHours";
import SettingLayoutPage from "../../components/AppSettingHeader/SettingLayoutPage";
//import SettingSideBar from "../../components/SideNav/settingsidebar";

class ManageAccount extends Component {
  state = {
    active: "Profile",
    profile: {
      user: {
        name: "",
        email: "",
        password: "",
      },
      business: {
        name: "",
        mobile: "",
        email: "",
        address: "",
        website: "",
        rc: "",
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

  handleChange = (value, name, error) => {
    this.setState({ [name]: value, error });
  };

  setActiveTabs = (tab) => {
    this.setState({
      active: tab,
    });
  };

  render() {
    const tabs = [
      { tab: "Profile" },
      { tab: "Account Plan" },
    //  { tab: "Greetings" },
      { tab: "Business Hours" },
      { tab: "IVR Menu" },
      { tab: "Service Level" },
    ];

    const { active } = this.state;

    return (
      <SettingLayoutPage>
        {/*
        <div>
           <SettingSideBar />
        </div>
        */}
        
        <div className="profile_tab" style={{marginTop:0}}>
        <div style={{marginTop:140}}>         
             <h4 style={{marginLeft:40, color:"grey", fontSize:15, paddingBottom:15}}>SETTINGS</h4>
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
              form={this.state.profile}
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
