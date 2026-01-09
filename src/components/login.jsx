import React, { useEffect, useState } from 'react';
import { FormLogo } from './assets';
import { Input, loginInputProps } from '../ui';
import { useDispatch, useSelector } from 'react-redux';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import {ValidationError} from './index';
import { useNavigate } from 'react-router-dom';

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

    // const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

    const dispatch = useDispatch();

    const {isLoading, loggedIn} = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const loginHandler = async (event) => {
        event.preventDefault();

        dispatch(signUserStart());

        const {email, password} = formData;
        const user = {email, password}

        try {
            const response = await AuthService.userLogin(user);

            dispatch(signUserSuccess(response.user));

            navigate('/');
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors));
        }
        
        setFormData({
            email: '',
            password: '',
        });
    }

    useEffect(() => {
        if (loggedIn) {
            navigate('/');
        }
    }, [loggedIn, navigate]); // protect route ni to'g'irlanishi kerak

    return (
        <div className='row d-flex justify-content-center align-items-center h-100'>
            <main className='form-signin col-10 col-md-4'>
                <form className='text-center mt-md-0' onSubmit={loginHandler}>
                    <img className='mb-4' src={FormLogo} alt="Form logo" />
                    <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
                    
                    <ValidationError /> {/* Validation to'g'irlanishi kerak */}

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
                        // disabled={!isFormValid || isLoading}
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