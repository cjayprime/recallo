import React, { Component } from 'react';

import TotalCalls from "./TotalCalls";
import TotalCallsAnswered from "./TotalCallsAnswered";
import ProfileVoiceNotes from "./ProfileVoicenotes";
import VoiceNotes from "./VoiceNotes";
import DroppedCalls from "./DroppedCalls";
import MissedCalls from "./MissedCalls";

class Home extends Component {

    state = {
        active: "Total calls"
    }

    setActiveTabs = tab => {
        this.setState({
            active: tab
        });
    };

    render() {

        var tabs = [
            { tab: "Total calls" },
            { tab: "Total calls answered" },
            { tab: "Profile voicenotes" },
            { tab: "Voicenotes" },
            { tab: "Dropped calls" },
            { tab: "Missed calls" }
        ]

        return (
            <>
                <div className="home container">
                    <div className="row">
                        <div className="col-12">
                            <div className="overview">
                                <div className="overview__action-button column-direction">
                                    {tabs.map(tab => (
                                        <div style={styles.tabs(this.state.active === tab.tab)}
                                            onClick={() => this.setActiveTabs(tab.tab)} key={tab.tab}>
                                            <button
                                                style={{
                                                    color: this.state.active === tab.tab ? "#33C534" : "#336799",
                                                    transition: ".2s all ease-in-out"
                                                }}
                                            >
                                                {tab.tab}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <hr className="vertical-hr" />
                                <div className="overview__action-view">
                                    {this.state.active === "Total calls" && (
                                        <TotalCalls />
                                    )}
                                    {this.state.active === "Total calls answered" && (
                                        <TotalCallsAnswered />
                                    )}
                                    {this.state.active === "Profile voicenotes" && (
                                        <ProfileVoiceNotes />
                                    )}
                                    {this.state.active === "Voicenotes" && (
                                        <VoiceNotes />
                                    )}
                                    {this.state.active === "Dropped calls" && (
                                        <DroppedCalls />
                                    )}
                                    {this.state.active === "Missed calls" && (
                                        <MissedCalls />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row min-overview--body">
                        <div className="custom-col-3">
                            <div className="min-overview">
                                <h5 className="title-license mb-24">Lincense info</h5>
                                <span>Type</span>
                                <p className="dark-license">2 agents license</p>
                                <p className="overview-action blue--text">Manage license</p>
                                <hr />
                                <div className="myProgress">
                                    <div className="bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                                        style={{ width: "23%" }}></div>
                                </div>
                                <p className="overview-bold">23 mins remaining</p>
                            </div>
                        </div>
                        <div className="custom-col-3">
                            <div className="min-overview">
                                <div className="row-direction mb-24">
                                    <h5 className="title-license">Average time:</h5>
                                    <p className="title-license--blue">Call</p>
                                </div>
                                <span>Call</span>
                                <p className="overview-number">4.3<sub>min</sub></p>
                                <hr />
                                <p className="overview-percent">+0.4%</p>
                            </div>
                        </div>
                        <div className="custom-col-6">
                            <div className="min-overview">
                                <div className="row-direction">
                                    <div>
                                        <h5 className="title-license mb-24">Personal</h5>
                                        <span>Total number</span>
                                        <div className="split">
                                            <p className="overview-number">14</p>
                                            <p className="overview-action blue--text pt-23 pl-38">View Personnel</p>
                                        </div>
                                        <hr />
                                        <p className="overview-bold">4 departments</p>
                                    </div>
                                    <div className="overview-days">
                                        <h5 className="title-license--blue" style={{ marginLeft: 0 }}>Mondays</h5>
                                        <span>On duty</span>
                                        <ul>
                                            <li>Kehinde Yusuf</li>
                                            <li>Tokunbo Popoola</li>
                                            <li>Tracy Badmus</li>
                                            <li>Lucky Wellington</li>
                                            <li>Grace Adu</li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const styles = {
    tabs: active => {
        return {
            backgroundColor: active ? "#EBF9EA" : "transparent",
            borderRadius: "28px",
            transition: ".2s all ease-in-out",
            cursor: "pointer"
        }
    }
}

export default Home;