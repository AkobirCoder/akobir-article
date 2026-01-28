import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, UserForm } from '../ui';
import { userDetailFailure, userDetailStart, userDetailSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import { getItem } from '../helpers/persistance-storage';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [formData, setFormData] = useState({
        image: '',
<<<<<<< HEAD
        birthDate: '',
=======
        birthYear: '',
>>>>>>> 13a2f5abc137d40a58da1d9d239256ea19bcebfe
        phone: '',
        field: '',
        description: '',
        study: '',
        socials: {
            telegram: '',
            instagram: '',
            linkedin: '',
<<<<<<< HEAD
            github: '',
=======
>>>>>>> 13a2f5abc137d40a58da1d9d239256ea19bcebfe
        }
    });

    const changeHandlerInput = (event) => {
        const {name, value} = event.target;

        if (name.startsWith('socials.')) {
            const key = name.split('.')[1];

            setFormData((prevState) => {
                return {
                    ...prevState, 
                    socials: {
                        ...prevState.socials, [key]: value,
                    }
                }
            });
        } else {
            setFormData((prevState) => {
                return {...prevState, [name]: value}
            });
        }
    }

<<<<<<< HEAD
    const formSubmit = () => {

    }

=======
>>>>>>> 13a2f5abc137d40a58da1d9d239256ea19bcebfe
    const dispatch = useDispatch();

    const {isLoading, user} = useSelector((state) => state.auth);
    const {articles} = useSelector((state) => state.article);

    const navigate = useNavigate();

    useEffect(() => {
        const token = getItem('token');

        if (!token) {
            navigate('/login');
        }

        const getUserProfile = async () => {
            dispatch(userDetailStart());

            try {
                const response = await AuthService.getUser();

                dispatch(userDetailSuccess(response.user));
            } catch (error) {
                dispatch(userDetailFailure(error.response.data.errors));
            }
        }

        getUserProfile();
    }, [dispatch, navigate]);

    return (
        <>
            {(
                () => {
                    if (!user) {
                        return (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <Loader />
                            </div>
                        );
                    } else {
                        return (
                            <div className='row d-flex' style={{minHeight: '100%'}}>
                                <div className='col-12'>
                                    <div className='row g-0 bg-light-subtle rounded border border-light-subtle'>
                                        <div 
                                            className='col-12 bg-primary rounded-top border-bottom-0 p-4 p-md-5' 
                                            style={{backgroundImage: 'var(--bs-gradient)'}}
                                        >
                                            <h1 className='text-white fw-normal fs-4 fs-md-1'>Profile header background</h1>
                                        </div>
                                        <div className='col-12 col-md-4 p-2 p-md-3 border-end'>
                                            <div className='d-flex flex-column pt-3 pt-md-5'>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    {(
                                                        () => {
                                                            if (user.image) {
                                                                return (
                                                                    <img src={user.image} alt="User" />
                                                                );
                                                            } else {
                                                                return (
                                                                    <svg
                                                                        className='bg-placeholder-img'
                                                                        width={'150'}
                                                                        height={'150'}
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        role='img'
                                                                        aria-label='Placeholder: Thumbnail'
                                                                        preserveAspectRatio='xMidYMid slice'
                                                                        focusable='false'
                                                                        style={{borderRadius: '50%'}}
                                                                    >
                                                                        <title>Placeholder</title>
                                                                        <rect width={'100%'} height={'100%'} fill='#0091ff'></rect>
                                                                        <text 
                                                                            x={'50%'} y={'50%'} 
                                                                            fill='#fff' 
                                                                            className='fs-2 text-uppercase p-0 m-0'
                                                                            textAnchor="middle" dominantBaseline="middle"
                                                                        >
                                                                            {user.username[0]}
                                                                        </text>
                                                                    </svg>
                                                                );
                                                            }
                                                        }
                                                    )()}
                                                </div>
                                                <div className='pt-2 pt-md-3 px-md-3'>
                                                    <h4 className='fs-3 fw-normal text-capitalize px-3'>{user.username}</h4>
                                                    <ul className='list-group list-group-flush'>
                                                        <li className='list-group-item'>Email: {user.email}</li>
                                                        <li className='list-group-item'>Field:</li>
                                                        <li className='list-group-item'>Age:</li>
                                                        <li className='list-group-item'>Phone number:</li>
                                                        <li className='list-group-item'>Social link:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-8 p-2 p-md-3'>
                                            <div className='d-flex flex-column pt-3 pt-md-5'>
                                                <UserForm 
                                                    formData={formData}
                                                    changeHandlerInput={changeHandlerInput} 
<<<<<<< HEAD
                                                    formSubmit={formSubmit}
=======
>>>>>>> 13a2f5abc137d40a58da1d9d239256ea19bcebfe
                                                    isLoading={isLoading}
                                                    articles={articles}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            )()}
        </>
    );
}

export default User;