import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../ui';
import { userDetailFailure, userDetailStart, userDetailSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import { getItem } from '../helpers/persistance-storage';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const dispatch = useDispatch();

    const {isLoading, user} = useSelector((state) => state.auth);

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
                            <div>
                                <div>{user.username}</div>
                                <button type='button' disabled={isLoading} className='btn btn-success'>Save</button>
                            </div>
                        );
                    }
                }
            )()}
        </>
    );
}

export default User;