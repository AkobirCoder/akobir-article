import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../../ui/index';
import { getProfileFailure, getProfileStart, getProfileSuccess } from '../../slice/profile';
import ProfileService from '../../service/profile';

const Profile = () => {
    const {username} = useParams();

    const dispatch = useDispatch();

    const {profile, isLoading} = useSelector((state) => state.profile);

    useEffect(() => {
        const getProfile = async () => {
            dispatch(getProfileStart());

            try {
                const response = await ProfileService.getProfile(username);

                dispatch(getProfileSuccess(response.profile));
            } catch (error) {
                dispatch(getProfileFailure(error.response.data.errors));
            }
        }

        getProfile();
    }, [username, dispatch]);

    return (
        <>
            {(
                () => {
                    if (isLoading || !profile) {
                        return (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <Loader />
                            </div>
                        );
                    } else {
                        return (
                            <div>
                                {profile.username}
                            </div>
                        );
                    }
                }
            )()}
        </>
    );
}

export default Profile;