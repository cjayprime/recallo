import React from "react";
import classNames from "classnames";

import './button.css';


const Button = ({ children, background, text, className, padding }) => (
    <button className={classNames("button",className)} style={{ backgroundColor: background, color: text, padding: padding }}>
        {children}
    </button>
);

export default Button;
