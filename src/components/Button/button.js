import React, { Component } from "react";
import classNames from "classnames";

import './button.css';


class Button extends Component{

    render() {
        const { children, background, text, className, padding } = this.props;

        return(
            <button
                className={classNames("button", "bold", className)}
                style={{ backgroundColor: background, color: text, padding: padding }}
                onClick={this.props.click}
            >
                {children}
            </button>
        )
    }
}






export default Button;
