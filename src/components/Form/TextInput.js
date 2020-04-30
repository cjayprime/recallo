import React, { Component } from 'react';
import classNames from "classnames";

class TextInput extends Component {

    state = {
        error: ""
    }

    handleChange = e => {
        e.preventDefault();
        var error = null;
        var text = "";
        var valid;
        var re
        if (this.props.type === "email" && !!this.props.email) {
            re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            valid = re.test(this.props.value);
            if (!valid) {
                this.setState({ error: "Please enter a valid email" });
                error = true;
            } else {
                this.setState({ error: "" });
                error = false;
            }
        }
        if (this.props.type === "password" && !!this.props.password) {
            re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            valid = re.test(this.props.value);
            if (!valid) {
                this.setState({ error: "At least a number, a capital letter, and a minimum of 8 characters." });
                error = true;
            } else {
                this.setState({ error: "" });
                error = false;
            }
        }
        if (this.props.type === "text" && this.props) {

        }
        this.props.onChange(error === true ? text : "")
    }

    render() {
        const { id,
            value,
            name,
            className,
            onKeyUp,
            placeholder,
            onChange,
            labelTitle,
            labelClass,
            form,
            type } = this.props;
        return (
            <div>
                <div>
                    <h6 className={form.error ? "red" : classNames("mb-8", "light", labelClass)}><label>{labelTitle}</label></h6>
                </div>
                <input
                    id={id}
                    value={value}
                    name={name}
                    className={className}
                    type={type || "text"}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    placeholder={placeholder}
                />
            </div>
        )
    }
}

export default TextInput;