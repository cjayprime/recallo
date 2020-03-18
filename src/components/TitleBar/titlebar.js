import React, { Component } from "react";

import './titlebar.css';
import Button from "../Button/button";

class Titlebar extends Component{

    render() {
        return(
            <div className="title-bar">
                <div className="title">
                    <h2>{this.props.heading}</h2>
                </div>
                <div>
                    <Button background={"#F5F6FA"} text={"var(--text-color)"} >{this.props.buttons.left}</Button>
                    <Button background={"var(--text-color)"} text={"#fff"}>{this.props.buttons.right}</Button>
                </div>
            </div>
        )
    }
}

export default Titlebar;
