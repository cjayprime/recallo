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
    };

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
        ];

        return (
            <>
                <div className="screen-padding container">
                    <div className="row mb-32">
                        <div className="col-12">
                            <div className="overview br-30 row-direction p-24">
                                <div className="overview__action-button">
                                    {tabs.map(tab => (
                                        <div style={styles.tabs(this.state.active === tab.tab)}
                                            onClick={() => this.setActiveTabs(tab.tab)} key={tab.tab}>
                                            <button
                                                style={{
                                                    color: this.state.active === tab.tab ? "#33C534" : "#336799",
                                                    transition: ".2s all ease-in-out",
                                                }}
                                            >
                                                {tab.tab}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <hr className="vertical-hr ml-35" />
                                <div className="overview__action-view custom-col-5">
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
                                <div>
                                    <h2>GRAPH</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="custom-col-3">
                            <div className="overview p-24 br-15">
                                <h4 className="text-main bold mb-24">License info</h4>
                                <span className="bold text-light">Type</span>
                                <h6 className="light text-main mt-4">2 agents license</h6>
                                <h6 className="bold text-blue mt-5 mb-24">Manage license</h6>
                                <hr className="mb-24" />
                                <div className="myProgress mb-12">
                                    <div className="bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                                        style={{ width: "23%" }} />
                                </div>
                                <h6 className="text-light ">23 mins remaining</h6>
                            </div>
                        </div>
                        <div className="custom-col-3">
                            <div className="overview p-24">
                                <div className="row-direction mb-24 align-center">
                                    <h4 className="text-main bold mr-5">Average time:</h4>
                                    <h4 className="text-blue bold hover cursor">call <span className="arrow-down ml-3" /></h4>
                                </div>
                                <span className="bold text-light">Call</span>
                                <div className="overview-call">
                                    <p className="overview-number mr-5">4.3</p>
                                    <sub className="overview-number-sub">min</sub>
                                </div>
                                <hr />
                                <p className="overview-percent">+0.4%</p>
                            </div>
                        </div>
                        <div className="custom-col-6">
                            <div className="overview p-24">
                                <div className="row">
                                    <div className="custom-col-6">
                                        <h4 className="text-main bold mb-24">Personnel</h4>
                                        <span className="bold text-light">Total number</span>
                                        <div className="row overview-call">
                                            <p className="overview-number">14</p>
                                            <p className="bold text-blue cursor">View Personnel</p>
                                        </div>
                                        <hr className="mb-24" />
                                        <h5 className="text-light light">4 departments</h5>
                                    </div>
                                    <div className="custom-col-6 pl-38">
                                        <h5 className="text-blue bold hover cursor mb-12">Mondays<span className="arrow-down ml-5" /></h5>
                                        <span className="bold text-light">On duty</span>
                                        <ul className="mt-5">
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
            cursor: "pointer",
            marginBottom: 5
        }
    }
};

export default Home;