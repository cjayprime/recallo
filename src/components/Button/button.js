import React, { Component } from "react";
import classNames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";

class Button extends Component {

    render() {
        const { children, type, error, background, isLoading, text, className, padding, onClick } = this.props;

        return (
            <>
                {error && (
                    <p style={{ color: "red", textAlign: "center", marginTop: 20 }}>
                        {error || "some of the inputs are not valid"}
                    </p>
                )}
                <div className="row">
                    <div>                <button
                        type={type}
                        className={classNames("button", "bold", className)}
                        style={{ backgroundColor: background, color: text, padding: padding }}
                        onClick={onClick}
                    >
                        {!isLoading && <span>{children}</span>}
                    </button></div>
                    <div style={{ color: "grey" }}>{isLoading && <CircularProgress size={20} color="inherit" />}</div>
                </div>
            </>
        )
    }
}






export default Button;
