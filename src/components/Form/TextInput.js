import React, { Component } from 'react';
import classNames from "classnames";

export default class TextInput extends Component {

    state = {
        error: ""
    }

    handleChange = e => {
        e.preventDefault();

        var error = null;
        var valid;
        var regex;
        var {type, value, onChange} = this.props;
        if (type === "email") {
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            valid = regex.test(value);
            error = "Please enter a valid email.";
        }else if (type === "password") {
            regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            valid = regex.test(value);
            error = "Please enter at least a number, a capital letter, and a minimum of 8 characters.";
        }else if (type === "text") {

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
            className,
            placeholder,
            labelTitle,
            labelClass,
        } = this.props;

        const {error} = this.state;

        return (
            <div>
                <div>
                    <h6 className={error ? "red" : classNames("mb-8", "light", labelClass)}>
                        <label>
                            {error ? error : labelTitle}
                        </label>
                    </h6>
                </div>
                <input
                    id={id}
                    value={value}
                    name={name}
                    className={className}
                    type={type}
                    onChange={this.handleChange}
                    onKeyUp={this.handleChange}
                    placeholder={placeholder}
                />
            </div>
        )
    }
};