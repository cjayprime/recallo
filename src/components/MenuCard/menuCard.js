import React, { Component } from "react";

class MenuCard extends Component{
    render() {


        const elements = this.props.children.map(
            element =>
                <h6 className="text-blue light cursor hover-grey">{element}</h6>
        );


        return(
            <div className="menu-card">
                {elements}
            </div>
        )
    }
}

export default MenuCard;