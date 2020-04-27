import React, { Component } from "react";
import classNames from "classnames";


class Button extends Component {

    render() {
        const { children, type, background, text, className, padding, onClick } = this.props;

        return (
            <button
                type={type}
                className={classNames("button", "bold", className)}
                style={{ backgroundColor: background, color: text, padding: padding }}
                onClick={onClick}
            >
                {children}
            </button>
        )
    }
}






export default Button;
