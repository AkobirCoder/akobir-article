import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, UserForm } from '../ui';
import { userDetailFailure, userDetailStart, userDetailSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import { getItem, setItem } from '../helpers/persistance-storage';
import { useNavigate } from 'react-router-dom';
import { clearProfileExtra, saveProfileExtraFailure, saveProfileExtraStart, saveProfileExtraSuccess } from '../slice/profileExtra';

const User = () => {
    const [formData, setFormData] = useState({
        image: '',
        birthDate: '',
        phone: '',
        field: '',
        bio: '',
        study: '',
        socials: {
            telegram: '',
            instagram: '',
            linkedin: '',
            github: '',
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

    const dispatch = useDispatch();

    const {isLoading, user} = useSelector((state) => state.auth);

    const { profileExtra } = useSelector(state => state.profileExtra);

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

    // const formSubmit = async (event) => {
    //     event.preventDefault();

    //     dispatch(saveProfileExtraStart());

    //     const {birthDate, phone, field, study,
    //         socials: {
    //             telegram,
    //             instagram,
    //             linkedin,
    //             github,
    //         }
    //     } = formData;

    //     const profileExtraInfo = {birthDate, phone, field, study,
    //         socials: {
    //             telegram,
    //             instagram,
    //             linkedin,
    //             github,
    //         }
    //     };

    //     try {
    //         dispatch(saveProfileExtraSuccess(profileExtraInfo));
            
    //         setItem(`profileExtraInfo_${user.username}`, JSON.stringify(profileExtraInfo));
    //     } catch (error) {
    //         dispatch(saveProfileExtraFailure('Local save error'));
    //     }

    //     const {image, bio} = formData;

    //     const userInfo = {image, bio};

    //     dispatch(userDetailStart());

    //     try {
    //         await AuthService.updateUser(userInfo);

    //         const response = await AuthService.getUser();

    //         dispatch(userDetailSuccess(response.user));
    //     } catch (error) {
    //         dispatch(userDetailFailure(error.response.data.errors));
    //     }

    //     setFormData(() => {
    //         return {
    //             image: '',
    //             birthDate: '',
    //             phone: '',
    //             field: '',
    //             bio: '',
    //             study: '',
    //             socials: {
    //                 telegram: '',
    //                 instagram: '',
    //                 linkedin: '',
    //                 github: '',
    //             }
    //         }
    //     });
    // }

    // useEffect(() => {
    //     if(!user) return;

    //     const savedProfileExtraInfo = getItem(`profileExtraInfo_${user.username}`);

    //     if (savedProfileExtraInfo) {
    //         dispatch(saveProfileExtraSuccess(JSON.parse(savedProfileExtraInfo)));
    //     }
    // }, [user, dispatch]);

    

    const formSubmit = async (event) => {
        event.preventDefault();

        dispatch(saveProfileExtraStart());

        try {
            dispatch(saveProfileExtraSuccess({
                ...profileExtra,
                birthDate: formData.birthDate,
                phone: formData.phone,
                field: formData.field,
                study: formData.study,
                socials: {
                    ...profileExtra.socials,
                    ...formData.socials,
                }
            }));

            setItem(
                `profile_extra_${user.username}`,
                JSON.stringify({
                    ...profileExtra,
                    birthDate: formData.birthDate,
                    phone: formData.phone,
                    field: formData.field,
                    study: formData.study,
                    socials: {
                        ...profileExtra.socials,
                        ...formData.socials,
                    }
                })
            );

        } catch (error) {
            dispatch(saveProfileExtraFailure('Local save error'));
        }

        try {
            await AuthService.updateUser({
                image: formData.image,
                bio: formData.bio,
            });

            dispatch(userDetailStart());

            const res = await AuthService.getUser();

            dispatch(userDetailSuccess(res.user));

        } catch (error) {
            dispatch(userDetailFailure(error.response?.data?.errors));
        }

        setFormData(() => {
            return {
                image: '',
                birthDate: '',
                phone: '',
                field: '',
                bio: '',
                study: '',
                socials: {
                    telegram: '',
                    instagram: '',
                    linkedin: '',
                    github: '',
                }
            }
        });
    }

    useEffect(() => {
        if (!user) return;

        const saved = getItem(`profile_extra_${user.username}`);

        if (saved) {
            dispatch(saveProfileExtraSuccess(JSON.parse(saved)));
        } else {
            dispatch(clearProfileExtra());
        }
    }, [user, dispatch]);

    useEffect(() => {
        if (!user || !profileExtra) return;

        setFormData(prev => ({
            ...prev,
            ...profileExtra,
            image: user.image || '',
            bio: user.bio || '',
                socials: {
                ...prev.socials,
                ...profileExtra.socials,
            }
        }));
    }, [user, profileExtra]);

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
                                        <div className='col-12 col-md-5 p-2 p-md-3 border-end'>
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
                                                        <li className='list-group-item'>Field: {profileExtra.field}</li>
                                                        <li className='list-group-item'>Bio: {user.bio}</li>
                                                        <li className='list-group-item'>Age: {profileExtra.birthDate}</li>
                                                        <li className='list-group-item'>Phone number: {profileExtra.phone}</li>
                                                        <li className='list-group-item'>Social link:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-7 p-2 p-md-3'>
                                            <div className='d-flex flex-column'>
                                                <UserForm 
                                                    formData={formData}
                                                    changeHandlerInput={changeHandlerInput} 
                                                    formSubmit={formSubmit}
                                                    isLoading={isLoading}
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