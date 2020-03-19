import React, { Component } from "react";
import './button.css';


const Button = ({children, background, text}) => (

    <button className="button" style={{backgroundColor: background, color: text}} >
        {children}
    </button>
);






export default Button;
