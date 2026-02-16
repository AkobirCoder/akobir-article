import React from 'react';

const Input = ({mark, id, type, name, completeName, placeholder, margin, label, value, changeHandlerInput}) => {
    return (
        <div 
            className={`form-floating ${(
                () => {
                    switch (mark) {
                        case 'user-form-input':
                            return 'col-12 col-md-6 mb-2 mb-md-0';
                    
                        case 'article-form-input':
                            return 'mb-2';

                        case 'sign-up-form-input':
                            return 'mb-2';
                        default:
                            return;
                    }
                }
            )()}`}
        >
            <input 
                type={type} 
                name={name}
                autoComplete={`current-${completeName}`} 
                className={`form-control ${margin}`} 
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