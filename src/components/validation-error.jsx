import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

const ValidationError = () => {
    const {error} = useSelector(state => state.auth);

    // console.log(error);

    const errorMessage = useCallback(() => {
        return Object.keys(error).map((name) => {
            const message = error[name].join(', ');

            return `${name} - ${message}`;
        }) 
    }, [error]);

    // console.log(error !== null && errorMessage());

    return (
        error !== null && errorMessage().map((error, index) => {
            return (
                <div 
                    key={error} 
                    className={`
                        alert alert-danger p-1 
                        ${index === errorMessage.length - 1 ? 'mb-3' : 'mb-1'}
                    `} 
                    role="alert"
                >
                    {`${index + 1})`} {error}
                </div>
            );
        })
    );
}

export default ValidationError;