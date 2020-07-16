import React, { Component } from "react";

class MenuCard extends Component {
  render() {
    const { children } = this.props;
    const elements = children.map((element, i) => (
      <h6 key={i} className="text-blue light cursor hover-grey">{element}</h6>
    ));

    return <div className="menu-card">{elements}</div>;
  }
}

export default MenuCard;
