import React, { Component } from "react"

import AppHeader from "../../components/AppHeader"
import ContactSupport from "./ContactSupport"

import routes from "../routes"

class ContactSupportComponent extends Component {
  render() {
    return (
      <>
        <AppHeader {...this.props} routes={routes} />
        <ContactSupport />
      </>
    )
  }
}

export default ContactSupportComponent
