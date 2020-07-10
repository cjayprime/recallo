import React, { Component } from "react";
import classNames from "classnames";

export default class FormField extends Component {
  state = {
    error: "",
  };

  componentDidMount() {
    const { onChange } = this.props;
    
    if(onChange)
    onChange("", "", "Please fill in the form correctly.");
  };

  handleChange = (e) => {
    e.preventDefault();

    let error = null;
    let valid;
    let regex;
    const { type, value, onChange, passed } = this.props;
    if (type === "email") {
      regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      valid = regex.test(value);
      error = "Please enter a valid email.";
    } else if (type === "password") {
      regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      valid = regex.test(value);
      error =
        "Please enter at least a number, a capital letter, and a minimum of 8 characters.";
    } else if (type === "confirm-password") {
      valid = passed;
      error = "Please confirm your password.";
    }

    if (!valid) {
      this.setState({ error });
    } else {
      error = "";
      this.setState({ error: "" });
    }

    if(onChange)
    onChange(e.target.value, e.target.name, error);
  };

  render() {
    const {
      id,
      value,
      name,
      className,
      labelTitle,
      labelClass,
      type,
      checkboxTitle,
      checkboxClass,
      required,
      style,
      placeholder
    } = this.props;

    const { error } = this.state;

    if (type === "checkbox") {
      return (
        <label htmlFor="checkbox" className={checkboxClass}>
          {checkboxTitle}
          <input type={type} />
          <span className="checkmark" />
        </label>
      );
    }else{
      return (
        <div>
          <div>
            <h6 className={classNames("mb-8", "light", labelClass)}>
              <label htmlFor="label" style={{position: 'static'}}>{error || labelTitle}</label>
            </h6>
          </div>
          {
            type === "textarea"
            ? <textarea
                style={style}
                required={required}
                id={id}
                value={value}
                name={name}
                className={className}
                type={type}
                placeholder={placeholder}
                onChange={this.handleChange}
              />
            : <input
                required={required}
                id={id}
                value={value}
                name={name}
                className={className}
                type={type}
                onChange={this.handleChange}
              />

          }
        </div>
      );
    }
  }
}
