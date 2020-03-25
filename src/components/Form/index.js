import React from 'react';
import classNames from "classnames";

const FormField = (props) => {
    const {
        id,
        value,
        name,
        className,
        onChange,
        onKeyUp,
        type,
        // options,
        // form,
        // maxlength,
        // cols,
        // rows,
        // style
        defaultValue,
        placeholder,
        labelTitle,
        labelClass
    } = props;
    return (
        <div>
            <div>
                <h6 className={classNames("mb-8", "light", labelClass)}><label>{labelTitle}</label></h6>
            </div>
        <input
            id={id}
            value={value}
            name={name}
            className={className}
            type={type || "text"}
            onChange={onChange}
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
        </div >
    )
}

export default FormField;