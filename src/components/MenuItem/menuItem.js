import React, { Component } from "react";

import "./menuItem.css";
import MenuCard from "../MenuCard/menuCard";

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {
      showMenuCard: false,
    };
  }

  show(e) {
    e.preventDefault()
    const { showMenuCard } = this.state;
    this.setState({
      showMenuCard: !showMenuCard,
    });
  }

  render() {
    const { item } = this.props;
    const { showMenuCard } = this.state;
    return (
      <div className="menu-item mr-25">
        <h6 className="text-blue hover cursor" onClick={() => this.show()}>
          {item.title}
          <span className="arrow-down ml-5" />
        </h6>
        {showMenuCard ? (
          <MenuCard>{item.values}</MenuCard>
        ) : null}
      </div>
    );
  }
}

export default MenuItem;
