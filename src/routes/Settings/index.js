import React, { Component } from 'react';

import Profile from "./Profile";
import AccountPlan from "./AccountPlan";

class ManageAccount extends Component {
    state = {
        active: "Profile"
    }

    setActiveTabs = tab => {
        this.setState({
            active: tab
        });
    };

    render() {

        const tabs = [
            { tab: "Profile" },
            { tab: "Account Plan" },
            { tab: "Greetings" },
            { tab: "Business Hours" }
        ];

        return (
            <>
                <div className="profile_tab">
                    {tabs.map(tab => (
                        <div key={tab.tab}>
                            <button
                                className="profile_tablinks"
                                onClick={() => this.setActiveTabs(tab.tab)}
                                style={color.tabs(this.state.active === tab.tab)}
                            >
                                <h5 className="bold">{tab.tab}</h5>
                            </button>
                            <div style={styles.tabs(this.state.active === tab.tab)}></div>
                        </div>
                    ))}
                </div>

                <div className="settings">
                    {this.state.active === "Profile" && (
                        <Profile />
                    )}
                    {this.state.active === "Account Plan" && (
                        <AccountPlan />
                    )}
                </div>
            </>
        )
    }
}

const styles = {
    tabs: active => {
        return {
            height: 5,
            width: "100%",
            backgroundColor: active ? "#0072A3" : "transparent",
            borderRadius: "70px",
            transition: ".2s all ease-in-out",
        };
    }
};

const color = {
    tabs: active => {
        return {
            color: active ? "#336799" : "#777777"
        }
    }
}

export default ManageAccount;