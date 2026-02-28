import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserFollowingItem } from '../index'; 
import ArticleService from '../../service/article';
import { 
    getFollowingUserFailure, 
    getFollowingUserStart, 
    getFollowingUserSuccess 
} from '../../slice/following';
import { getItem } from '../../helpers/persistance-storage';
import { Loader } from '../../ui/index';

const UserFollowing = () => {
    const dispatch = useDispatch();

    const {users, isLoading} = useSelector((state) => state.following);

    const navigate = useNavigate();

    useEffect(() => {
        const token = getItem('token');

        if (!token) {
            navigate('/');
        }

        const getUserFollowing = async () => {
            dispatch(getFollowingUserStart());

            try {
                const response = await ArticleService.getFollowingUsers();

                dispatch(getFollowingUserSuccess(response));
            } catch (error) {
                dispatch(getFollowingUserFailure(error.response.data.errors));
            }
        }

        getUserFollowing();
    }, [navigate, dispatch]);

    return (
        <>
            {(
                () => {
                    if (isLoading) {
                        return (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <Loader />
                            </div>
                        );
                    } else {
                        return (
                            <div className='overflow-auto bg-body-tertiary border rounded p-3 user-following' style={{maxHeight: '100%'}}>
                                <div className='row g-0 d-flex justify-content-center'>
                                    {
                                        users.map((userItem, index) => {
                                            return (
                                                <UserFollowingItem
                                                    key={userItem.username}
                                                    {...userItem}
                                                    index={index}
                                                    users={users}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    }
                }
            )()}
        </>
    );
}

export default UserFollowing;