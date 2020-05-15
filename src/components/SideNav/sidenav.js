import React, { Component } from "react"
import { Link } from "react-router-dom"

import Button from "../Button/button"
import Header from "../Header/header"

import "./sidenav.css"

class Sidenav extends Component {
  signout = () => {
    const { history, signout } = this.props
    signout({ history })
  }

  render() {
    const { routes, header, account } = this.props
    console.log("hey", account)

    return (
      <aside className="sidenav">
        {header && <Header className="sidenav-header" />}
        <div className="sidenav-body">
          <div className="details">
            <div className="business-logo mb-23">
              <h1 className="logo-text">AM</h1>
            </div>
            <h3 className="text-blue bold mb-8">
              {/* AutoMedics Africa Limited */}
            </h3>
            <p className="light text-light">2 agents license</p>
            <Link to="/admin/settings" className="mt-24">
              <Button
                className="br-30 account-button orange-hover"
                padding="12px 20px"
              >
                <h6 className="bold">Manage your Recallo Account</h6>
              </Button>
            </Link>
          </div>
          <ul className="sidenav-list">
            {routes.private.sidebar.map((prop, key) => {
              if (prop.redirect) return null
              return (
                <Link
                  key={key}
                  className="sidenav-list-link"
                  to={prop.layout + prop.path}
                >
                  <li className="sidenav-list-item">
                    <img src={prop.icon} className="sidenav-list-icon" alt="" />
                    <h5>{prop.name}</h5>
                  </li>
                </Link>
              )
            })}
          </ul>
          <hr />
          <h6 className="logout text-blue light" onClick={this.signout}>
            Logout
          </h6>
        </div>
      </aside>
    )
  }
}

export default Sidenav
