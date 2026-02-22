import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserFollowingItem } from '../index'; 
// import { getArticlesFailure, getArticlesStart, getArticlesSuccess, } from '../../slice/article';
import ArticleService from '../../service/article';
import { getFollowingUserFailure, getFollowingUserStart, getFollowingUserSuccess } from '../../slice/following';

const UserFollowing = () => {
    const dispatch = useDispatch();

    // const {articles} = useSelector((state) => state.article);

    const {users} = useSelector((state) => state.following);

    useEffect(() => {
        const getUserFollowing = async () => {
            dispatch(getFollowingUserStart());

            try {
                const response = await ArticleService.getFollowingUsers();

                dispatch(getFollowingUserSuccess(response));
            } catch (error) {
                dispatch(getFollowingUserFailure);
            }
        }

        getUserFollowing();
    }, [dispatch]);

    return (
        <div className='row'>
            {
                users.map((userItem) => {
                    return (
                        <UserFollowingItem 
                            key={userItem.username} 
                            {...userItem}
                        />
                    );
                })
            }
        </div>
    );
}

export default UserFollowing;