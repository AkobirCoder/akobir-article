import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormLogo } from '../assets/index';
import { contactUsInputProps, Input, Textarea } from '../../ui/index';
import { 
    contactMessageFailure, 
    contactMessageStart, 
    contactMessageSuccess 
} from '../../slice/contact';
import ContactService from '../../service/contact';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '+998',
        message: '',
    });

    const [status, setStatus] = useState(null);

    const messages = {
        loading: 'Loading...',
        success: 'Thans for contacting with us',
        failure: 'Something went wrong',
    }

    const changeHandlerInput = (event) => {
        const {name, value} = event.target;

        setFormData((prevState) => {
            return {
                ...prevState, [name]: value,
            }
        });
    }

    const dispatch = useDispatch();

    const formSubmit = async (event) => {
        event.preventDefault();

        setStatus(null);

        dispatch(contactMessageStart());

        const {fullname, email, phone, message} = formData;

        const contactData = {fullname, email, phone, message}

        // try {
        //     await fetch('http://localhost:8000/send-message', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(contactData),
        //     });

        //     setTimeout(() => {
        //         setFormData(() => {
        //             return {
        //                 fullname: '',
        //                 email: '',
        //                 phone: '+998',
        //                 message: '',
        //             }
        //         });

        //         setStatus('success');
        //     }, 1000);
            
        // } catch (error) {
        //     setTimeout(() => {
        //         setStatus('failure');
        //     }, 1000);
        // }

        try {
            const response = await ContactService.sendMessage(contactData);

            dispatch(contactMessageSuccess(response));

            setTimeout(() => {
                setFormData(() => {
                    return {
                        fullname: '',
                        email: '',
                        phone: '+998',
                        message: '',
                    }
                });

                setStatus('success');
            }, 500);
        } catch (error) {
            dispatch(contactMessageFailure(error?.response?.data?.errors || 'Request failed'));

            setTimeout(() => {
                setStatus('failure');
            }, 1000);
        }
    }
    
    return (
        <div className='row g-0 d-flex align-items-center justify-content-center' style={{minHeight: '100%'}}>
            <div className='col-12 col-md-10'>
                {status === 'success' && (
                    <div 
                        className="alert alert-success alert-dismissible fade show" 
                        role="alert"
                    >
                        {messages.success}
                        <button 
                            type="button" 
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => setStatus(null)}
                        ></button>
                    </div>
                )}
                {status === 'failure' && (
                    <div 
                        className="alert alert-danger alert-dismissible fade show" 
                        role="alert"
                    >
                        {messages.failure}
                        <button 
                            type="button" 
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => setStatus(null)}
                        ></button>
                    </div>
                )}
                <div className='row g-0 g-md-5 d-flex justify-content-center'>
                    <div className='col-12 col-md-8'>
                        <form className='text-center' onSubmit={formSubmit}>
                            <img className='mb-4' src={FormLogo} alt="Contact us logo" />
                            <h1 className='h3 mb-3 fw-semibold'>Contact Us</h1>
                            {
                                contactUsInputProps.map((inputProp, index) => {
                                    return (
                                        <Input
                                            mark={'contact-us-form-input'}
                                            key={inputProp.id}
                                            {...inputProp}
                                            value={formData[inputProp.name]}
                                            changeHandlerInput={changeHandlerInput}
                                        />
                                    );
                                })
                            }
                            <Textarea
                                label={'Message'}
                                placeholder={'Message'}
                                name={'message'}
                                value={formData.message}
                                height={'150px'}
                                changeHandlerInput={changeHandlerInput}
                            />
                            <button type='submit' className='btn btn-success w-100'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;