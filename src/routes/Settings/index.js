import React, { Component } from "react"

import Profile from "./Profile"
import AccountPlan from "./AccountPlan"
import Greetings from "./Greetings"
import BusinessHours from "./BusinessHours"

class ManageAccount extends Component {
  state = {
    active: "Profile",
    profile: {
      user: {
        name: "",
        email: "",
        password: ""
      },
      business: {
        name: "",
        mobile: "",
        email: "",
        address: "",
        website: "",
        rc: ""
      }
    }
  }

  handleChange = (value, name, error) => {
    this.setState({ [name]: value, error })
  }

  styles = {
    tabs: (active) => {
      return {
        height: 5,
        width: "100%",
        backgroundColor: active ? "#0072A3" : "transparent",
        borderRadius: "70px",
        transition: ".2s all ease-in-out",
      }
    },
  }

  color = {
    tabs: (active) => {
      return {
        color: active ? "#336799" : "#777777",
      }
    },
  }

  setActiveTabs = (tab) => {
    this.setState({
      active: tab,
    })
  }

  render() {
    const tabs = [
      { tab: "Profile" },
      { tab: "Account Plan" },
      { tab: "Greetings" },
      { tab: "Business Hours" },
    ]

    const { active } = this.state

    return (
      <>
        <div className="profile_tab">
          {tabs.map((tab) => (
            <div key={tab.tab}>
              <button
                type="button"
                className="profile_tablinks"
                onClick={() => this.setActiveTabs(tab.tab)}
                style={this.color.tabs(active === tab.tab)}
              >
                <h5 className="bold">{tab.tab}</h5>
              </button>
              <div style={this.styles.tabs(active === tab.tab)} />
            </div>
          ))}
        </div>

        <div className="settings">
          {this.state.active === "Profile" && <Profile form={this.state.profile} handleChange={this.handleChange} />}
          {this.state.active === "Account Plan" && <AccountPlan />}
          {this.state.active === "Greetings" && <Greetings />}
          {this.state.active === "Business Hours" && <BusinessHours handleChange={this.handleChange} />}
        </div>
      </>
    )
  }
}

export default ManageAccount
