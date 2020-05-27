import React, { Component } from "react"

import "./menuItem.css"
import MenuCard from "../MenuCard/menuCard"

class MenuItem extends Component {
  constructor() {
    super()
    this.state = {
      showMenuCard: false,
    }
  }

  show() {
    this.setState({
      showMenuCard: !this.state.showMenuCard,
    })
  }

  render() {
    return (
      <div className="menu-item mr-25">
        <h6 className="text-blue hover cursor" onClick={() => this.show()}>
          {this.props.item.title}
          <span className="arrow-down ml-5" />
        </h6>
        {this.state.showMenuCard ? (
          <MenuCard>{this.props.item.values}</MenuCard>
        ) : null}
      </div>
    )
  }
}

export default MenuItem
