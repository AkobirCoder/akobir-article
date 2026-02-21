import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserFollowingItem } from '../index'; 
import { getArticlesFailure, getArticlesStart, getArticlesSuccess, } from '../../slice/article';
import ArticleService from '../../service/article';

const UserFollowing = () => {
    const dispatch = useDispatch();

    const {articles} = useSelector((state) => state.article);

    useEffect(() => {
        const getUserFollowing = async () => {
            dispatch(getArticlesStart());

            try {
                const response = await ArticleService.getFollowingArticles();

                dispatch(getArticlesSuccess(response));
            } catch (error) {
                dispatch(getArticlesFailure());
            }
        }

        getUserFollowing();
    }, [dispatch]);

    return (
        <div className='row'>
            {
                articles?.map((articleItem) => {
                    return (
                        <UserFollowingItem 
                            key={articleItem.username} 
                            {...articleItem}
                        />
                    );
                })
            }
        </div>
    );
}

export default UserFollowing;