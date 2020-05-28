import React from "react";

const Select = function (props) {
  const { value, className, onChange, name, options } = props;

  return (
    <div>
      <select
        className={className}
        value={value}
        onChange={onChange}
        name={name}
      >
        <option>
          <h6 className="bold">{options}</h6>
        </option>
      </select>
    </div>
  );
};

export default Select;
