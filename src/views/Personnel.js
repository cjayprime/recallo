import React, { Component } from 'react';

import Titlebar from "../components/TitleBar/titlebar";

class Personnel extends Component {
    render() {
        return (
            <div className="screen-padding">
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