import React, { Component } from 'react'
import Titlebar from "../components/titlebar/titlebar";

class Personnel extends Component {
    render() {
        return (
            <div>
                <Titlebar
                    heading={"Personnel"}
                    buttons={{
                        left: "Departments",
                        right: "Add personnel"
                    }}
                />
            </div>
        )
    }
}

export default Personnel;