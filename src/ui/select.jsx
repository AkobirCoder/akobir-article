import React from 'react';

const Select = ({id, type, name, placeholder, label, value, changeHandlerInput}) => {
    return (
        <div className='form-floating mb-2'>
            <select     
                type={type} 
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={changeHandlerInput}  
                className="form-select" 
            >
                <option value="he/him">he/him</option>
                <option value="she/her">she/her</option>
            </select>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default Select;