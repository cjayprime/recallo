import React, { Component } from 'react';


import Titlebar from "../components/titlebar/titlebar";
import MenuBar from "../components/menuBar/menuBar";



class Calls extends Component {
    render() {


        return (
            <div>
                <Titlebar
                    heading={"Calls"}
                    buttons={{
                        left: "View voicenotes",
                        right: "Profile Category"
                    }}
                />
                <MenuBar/>
            </div>
        )
    }
}

export default Calls;