import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, UserForm } from '../ui';
import { getItem, setItem } from '../helpers/persistance-storage';
import { putProfileExtraFailure, putProfileExtraStart, putProfileExtraSuccess } from '../slice/profileExtra';
import { putUserFailure, putUserStart, putUserSuccess, userDetailFailure, userDetailStart, userDetailSuccess } from '../slice/auth';
import AuthService from '../service/auth';

const UserEdit = () => {
    const [formData, setFormData] = useState({
        image: '',
        username: '',
        fullname: '',
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

    const {profileExtra} = useSelector((state) => state.profileExtra);

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
    }, [navigate, dispatch]);

    useEffect(() => {
        if (!user || !profileExtra) return;

        setFormData((prevState) => {
            return {
                ...prevState,
                ...profileExtra,
                username: user.username || '',
                image: user.image || '',
                bio: user.bio || '',
                socials: {
                    ...prevState.socials,
                    ...profileExtra.socials,
                }
            }
        });
    }, [user, profileExtra]);

    const formSubmit = async (event) => {
        event.preventDefault();

        dispatch(putProfileExtraStart());

        const {fullname, birthDate, phone, field, study, 
            socials: {
                telegram, instagram, linkedin, github,
            },
        } = formData;

        const profileExtraInfo = {fullname, birthDate, phone, field, study, 
            socials: {
                telegram, instagram, linkedin, github,
            },
        };

        try {
            dispatch(putProfileExtraSuccess(profileExtraInfo));

            setItem(
                `profile_extra_info_${user.id}`,
                JSON.stringify(profileExtraInfo),
            );
        } catch (error) {
            dispatch(putProfileExtraFailure('Local saving error'));
        }

        dispatch(putUserStart());

        const {image, username, bio} = formData;

        const userInfo = {image, username, bio};

        try {
            const response = await AuthService.putUser(userInfo);

            dispatch(putUserSuccess(response.user));
        } catch (error) {
            dispatch(putUserFailure(error.response.data.errors));
        }
    }

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
                            <UserForm 
                                formData={formData}
                                changeHandlerInput={changeHandlerInput} 
                                formSubmit={formSubmit}
                                isLoading={isLoading}
                            />
                        );
                    }
                }
            )()}
        </>
    );
}

export default UserEdit;