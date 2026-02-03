import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormLogo } from './assets';
import { Input, loginInputProps } from '../ui';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import {ValidationError} from './index';

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

            navigate('/articles');
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors));
        }
        
        setFormData(() => {
            return {
                email: '',
                password: '',
            }
        });
    }

    useEffect(() => {
        if (loggedIn) {
            navigate('/articles');
        }
    }, [loggedIn, navigate]);

    return (
        <div className='row d-flex justify-content-center align-items-center' style={{minHeight: '100%'}}>
            <main className='form-signin col-11 col-md-4'>
                <form className='text-center mt-md-0' onSubmit={loginHandler}>
                    <img className='mb-4' src={FormLogo} alt="Form logo" />
                    <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
                    
                    <ValidationError /> {/* Validation to'g'irlanishi kerak */}

                    {
                        loginInputProps.map((inputProp) => {
                            return (
                                <div key={inputProp.id} className='mb-2'>
                                    <Input
                                        key={inputProp.id}
                                        {...inputProp}
                                        value={formData[inputProp.name]}
                                        changeHandlerInput={changeHandlerInput}
                                    />
                                </div>
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
                    <p className='mt-3 mb-3 text-muted'>
                        If you haven't an account, You must register by one click
                        <span className='ms-2'> 
                            <Link to={'/register'}>Sign up</Link>
                        </span>
                    </p>
                    <p className='mt-3 mt-md-5 mb-3 text-muted'>© 2025-2026</p>
                </form>
            </main>
        </div>
    );
}

export default Login;