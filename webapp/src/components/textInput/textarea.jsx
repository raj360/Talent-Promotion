import React from "react";

import "./textInputStyles.scss";

const Textarea = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <textarea
      className="text-input"
      onChange={handleChange}
      {...otherProps}
      rows="2"
      cols="35"
    />
    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""}
                form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default Textarea;
