import React, { Component } from 'react';
import classNames from "classnames";

export default class AuthInput extends Component {

    state = {
        error: ""
    }

    handleChange = e => {
        e.preventDefault();

        var error = null;
        var valid;
        var regex;
        var { type, value, onChange } = this.props;
        if (type === "email") {
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            valid = regex.test(value);
            error = "Please enter a valid email.";
        } else if (type === "password") {
            regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            valid = regex.test(value);
            error = "Please enter at least a number, a capital letter, and a minimum of 8 characters.";
        } else if (type === "text") {

        }

        if (!valid) {
            this.setState({ error });
        } else {
            error = "";
            this.setState({ error: "" });
        }
        //console.log(error, valid)
        onChange(e.target.value, e.target.name, error);
    }

    render() {
        const {
            id,
            type,
            value,
            name,
            inputClass,
            className,
            placeholder,
            labelTitle,
            labelClass,
        } = this.props;

        const { error } = this.state;

        return (
            <div className={className}>
                <input
                    id={id}
                    value={value}
                    name={name}
                    className={inputClass}
                    type={type}
                    onChange={this.handleChange}
                    onKeyUp={this.handleChange}
                    placeholder={placeholder}
                />
                <label>
                    <h6 className={error ? "red" : classNames("mb-8", "light", labelClass)}>
                        {error ? error : labelTitle}
                    </h6>
                </label>
            </div>
        )
    }
};