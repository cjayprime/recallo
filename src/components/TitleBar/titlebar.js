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
                    <Button
                        background={"#F5F6FA"} text={"var(--text-color)"} padding={"12px 25px"}
                        className="mr-16 br-30"
                        click={this.showModal}
                    >
                        {this.props.buttons.left}
                    </Button>
                    <Button
                        background={"var(--text-color)"} text={"#fff"} padding={"12px 25px"}
                        className="br-30">
                        {this.props.buttons.right}
                    </Button>
                </div>
            </div>
        )
    }
}

export default Titlebar;
