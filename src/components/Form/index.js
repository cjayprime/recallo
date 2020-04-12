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
        options,
        // form,
        // maxlength,
        // cols,
        // rows,
        // style
        defaultValue,
        placeholder,
        labelTitle,
        labelClass,
        selectClass
    } = props;

    if (type === "select") {
        return (
            <div>
                <div>
                    <h6 className={classNames("mb-8", "light", labelClass)}><label>{labelTitle}</label></h6>
                </div>
                <div className={className}>
                    <select
                        className={classNames("light text-main", selectClass, className)}
                        name={name}
                        value={value}
                        onChange={onChange}
                    >
                        {/* <option value="">{`Select ${labelTitle.toLowerCase()}`}</option> */}
                        {options}
                    </select>
                </div>
            </div>
        )
    }

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