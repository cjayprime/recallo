import React, { Component } from "react";

import AppSettingHeader from "./index";
import routes from "../../routes/routes";

class SettingLayoutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{ width: "100%", height: "auto" }}>
        <AppSettingHeader {...this.props} routes={routes} />
        <div className="container">{children}</div>
      </div>
    );
  }
}

export default SettingLayoutPage;
