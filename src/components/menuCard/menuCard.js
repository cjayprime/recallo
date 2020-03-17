import React, { Component } from "react";

class MenuCard extends Component{
    render() {

        const elements = ['one', 'two', 'three'];


        return(
            <div className="menu-card">
                <h6 className="text-blue light cursor hover-grey">{this.props.children}</h6>
                {elements.map((value, index) => {
                    return <h6 key={index}>{value}</h6>
                })}
            </div>
        )
    }
}

export default MenuCard;