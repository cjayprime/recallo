import React, { Component } from "react"
import classNames from "classnames"

import "./input.css";

export default class AuthInput extends Component {
  state = {
    error: "",
  }

  componentDidMount() {
    const { onChange } = this.props
    onChange("", "", "Please fill in the form correctly.")
  }

  handleChange = (e) => {
    e.preventDefault()

    let error = null
    let valid
    let regex
    const { type, value, onChange, passed } = this.props
    if (type === "email") {
      regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      valid = regex.test(value)
      error = "Please enter a valid email."
    } else if (type === "password") {
      regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
      valid = regex.test(value)
      error =
        "Please enter at least a number, a capital letter, and a minimum of 8 characters."
    } else if (type === "confirm-password") {
      valid = passed
      error = "Please confirm your password."
    }
    // else if (type === "tel") {
    //   // We need `class-validator` npm library
    // } else if (type === "text") {
    // }

    if (!valid) {
      this.setState({ error })
    } else {
      error = ""
      this.setState({ error: "" })
    }

    onChange(e.target.value, e.target.name, error)
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
    } = this.props;

    const { error } = this.state;

    return (
      <div className={classNames("form-group", className)}>
        <input
          id={id}
          value={value}
          name={name}
          className="auth-input"
          type={type === "confirm-password" ? "password" : type}
          onChange={this.handleChange}
          onKeyUp={this.handleChange}
          placeholder={placeholder}
        />
        <label htmlFor={id}>
          <h6
            className={error ? "red" : "mb-8 light auth-label"}>
            {error ? error : labelTitle}
          >
            {error || labelTitle}
          </h6>
        </label>
      </div>
    )
  }
};
