import React, { Component } from 'react';
import classNames from "classnames";

export default class FormField extends Component {

    render() {
        const {
            id,
            value,
            name,
            className,
            title,
            labelClass,
            onChange,
            type,
            checkboxTitle,
            checkboxClass
        } = this.props;
        if (type === "checkbox") {
            return (
                <label className={checkboxClass}>{checkboxTitle}
                    <input type={type} />
                    <span className="checkmark"></span>
                </label>
            )
        }
        return (
            <div>
                <div>
                    <h6 className={classNames("mb-8", "light", labelClass)}><label>{title}</label></h6>
                </div>
                <input
                    id={id}
                    value={value}
                    name={name}
                    className={className}
                    type={type}
                    onChange={onChange}
                />
            </div >
        )
    }
}