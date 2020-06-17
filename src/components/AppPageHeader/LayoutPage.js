import React, { Component } from "react";

import AppPageHeader from "./index";
import routes from "../../routes/routes";

class LayoutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{ width: "100%", height: "auto" }}>
        <AppPageHeader {...this.props} routes={routes} />
        <div className="container">{children}</div>
      </div>
    );
  }
}

export default LayoutPage;
