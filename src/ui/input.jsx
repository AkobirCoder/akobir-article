import React from 'react';

const Input = ({id, type, name, completeName, placeholder, label, value, changeHandlerInput}) => {
    return (
        <div className='form-floating mb-2'>
            <input 
                type={type} 
                name={name}
                autoComplete={`current-${completeName}`} 
                className='form-control' 
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={changeHandlerInput}    
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default Input;