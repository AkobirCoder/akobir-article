import React, { useState } from 'react';
import { FormLogo } from './assets';
import { Input, registerInputProps } from '../ui';

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

    return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <main className='form-signin col-10 col-md-4'>
                <form className='text-center'>
                    <img className='mb-4' src={FormLogo} alt="Form logo" />
                    <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

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

                    {/* <div className='form-check mt-3 mb-3'>
                        <label>
                            <input type="checkbox" className='form-check-input' value={'remember-me'} /> Remember me
                        </label>
                    </div> */}

                    <button type='submit' className='w-100 btn btn-lg btn-primary'>Sign up</button>
                    <p className='mt-5 mb-3 text-muted'>© 2025-2026</p>
                </form>
            </main>
        </div>
    );
}

export default Register;