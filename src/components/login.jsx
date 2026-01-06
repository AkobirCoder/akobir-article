import React, { useState } from 'react';
import { FormLogo } from './assets';
import { Input, loginInputProps } from '../ui';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserStart } from '../slice/auth';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const changeHandlerInput = (event) => {
        const {name, value} = event.target;

        setFormData((prevState) => {
            return {...prevState, [name]: value}
        });
    }

    const dispatch = useDispatch();

    const {isLoading} = useSelector((state) => state.auth);

    const loginHandler = (event) => {
        event.preventDefault();

        dispatch(loginUserStart());

        setFormData({
            email: '',
            password: '',
        });
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <main className='form-signin col-10 col-md-4'>
                <form className='text-center mt-3 mt-md-0' onSubmit={loginHandler}>
                    <img className='mb-4' src={FormLogo} alt="Form logo" />
                    <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
                    
                    {
                        loginInputProps.map((inputProp) => {
                            return (
                                <Input 
                                    key={inputProp.id} 
                                    {...inputProp}
                                    value={formData[inputProp.name]}
                                    changeHandlerInput={changeHandlerInput}
                                />
                            );
                        })
                    }

                    <button 
                        type='submit' 
                        className='w-100 btn btn-lg btn-primary' 
                        disabled={isLoading}
                    >
                        {
                            (() => {
                                if (isLoading) {
                                    return 'Loading...';
                                } else {
                                    return 'Sign in';
                                }
                            })()
                        }    
                    </button>
                    <p className='mt-3 mt-md-5 mb-3 text-muted'>© 2025-2026</p>
                </form>
            </main>
        </div>
    );
}

export default Login;