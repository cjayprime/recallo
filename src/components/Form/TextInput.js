import React, { Component } from "react";
import classNames from "classnames";

export default class TextInput extends Component {
  state = {
    error: "",
  };

  componentDidMount() {
    const { onChange } = this.props;
    onChange("", "", "Please fill in the form correctly.");
  }

  handleChange = (e) => {
    e.preventDefault();

    let error = null;
    let valid;
    let regex;
    const { type, value, onChange } = this.props;
    if (type === "email") {
      regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      valid = regex.test(value);
      error = "Please enter a valid email.";
    } else if (type === "password") {
      regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      valid = regex.test(value);
      error =
        "Please enter at least a number, a capital letter, and a minimum of 8 characters.";
    }
    // else if (type === "text") {
    // }

    if (!valid) {
      this.setState({ error });
    } else {
      error = "";
      this.setState({ error: "" });
    }

    onChange(e.target.value, e.target.name, error);
  };

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

    const { error } = this.state;

    return (
      <div>
        <h6 className={error ? "red" : classNames("mb-8", "light", labelClass)}>
          <label style={{position: "static"}} htmlFor="label">{error || labelTitle}</label>
        </h6>
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
    );
  }
}
