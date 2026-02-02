import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormLogo } from './assets';
import { Input, registerInputProps } from '../ui';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import {ValidationError} from './index';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const changeHandlerInput = (event) => {
        const {name, value} = event.target;
        
        setFormData((prevState) => {
            return {...prevState, [name]: value}
        });
    }

    // const isFormValid = formData.username.trim() !== '' && formData.email.trim() !== '' && formData.password.trim() !== '';

    const dispatch = useDispatch();

    const {isLoading, loggedIn} = useSelector(state => state.auth);

    const navigate = useNavigate();

    const registerHandler = async (event) => {
        event.preventDefault();

        dispatch(signUserStart());
        
        const {username, email, password} = formData;
        const user = {username, email, password}

        try {
            const response = await AuthService.userRegister(user);

            // console.log(response);

            // console.log(user);

            navigate('/articles');

            dispatch(signUserSuccess(response.user));
        } catch (error) {
            // console.log(error.response.data.errors);
            dispatch(signUserFailure(error.response.data.errors));
        }
        
        setFormData(() => {
            return {
                username: '',
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
                <form className='text-center mt-md-0' onSubmit={registerHandler}>
                    <img className='mb-4' src={FormLogo} alt="Form logo" />
                    <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

                    <ValidationError /> {/* Validation to'g'irlanishi kerak */}

                    {
                        registerInputProps.map((inputProp) => {
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
                                    return 'Sign up';
                                }
                            })()
                        }
                    </button>
                    <p className='mt-3 mb-3 text-muted'>
                        If you have an account, You must login by one click
                        <div className='ms-2'> 
                            <Link to={'/login'}>Sign in</Link>
                        </div>
                    </p>
                    <p className='mt-3 mt-md-5 mb-3 text-muted'>© 2025-2026</p>
                </form>
            </main>
        </div>
    );
}

export default Register;