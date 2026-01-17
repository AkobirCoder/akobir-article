import React from 'react';

const Textarea = ({label, placeholder, name, value, changeHandlerInput, height = '100px'}) => {
    return (
        <div className="form-floating mb-2">
            <textarea 
                style={{height: height}}
                className="form-control" 
                id="floatingTextarea2" 
                name={name}
                value={value}
                placeholder={placeholder} 
                onChange={changeHandlerInput}
            ></textarea>
            <label htmlFor="floatingTextarea2">{label}</label>
        </div>
    );
}

export default Textarea;