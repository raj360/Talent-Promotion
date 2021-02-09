import React from 'react'
import "./textInputStyles.scss";
export const SelectInput = ({handleChange,options,name}) => {
  return (
    <div className="group">
      <p className="form-input">Category</p>
      <select className="form-input" name="testing" onChange={handleChange} >
        <option disabled defaultValue>Select Category</option>
        {
          options.map(option => (<option key={option.id} value={option.id}>{option.name}</option>))
        }
      </select>
    </div>
  )
}
