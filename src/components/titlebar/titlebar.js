import React, { Component } from "react";
import './titlebar.css';
import Button from "../button/button";

class Titlebar extends Component{

    render() {
        return(
            <div className="titlebar">
                <div className="title">
                    <h2>Calls</h2>
                </div>
                <div>
                    <Button background={"#F5F6FA"} text={"var(--text-color)"} >View voicenotes</Button>
                    <Button background={"var(--text-color)"} text={"#fff"}>Profile category</Button>
                </div>
            </div>
        )
    }
}

export default Titlebar;
