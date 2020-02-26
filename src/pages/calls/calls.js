import React from "react";
import './calls.css';


import Titlebar from "../../components/titlebar/titlebar";

function Calls() {

    return (
        <div className="container">
            <div className="sidebar">
                <p>sidebar</p>
            </div>
            <div className="content">
                <Titlebar/>
            </div>
        </div>
    )
}


export default Calls;