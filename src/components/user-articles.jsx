import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../helpers/persistance-storage';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../ui';
import { 
    deleteArticleFailure, 
    deleteArticleStart, 
    deleteArticleSuccess, 
    getArticleFailure, 
    getArticlesStart, 
    getArticleSuccess 
} from '../slice/article';
import ArticleService from '../service/article';
import ArticleCard from './article-card';

const UserArticles = () => {
    const dispatch = useDispatch();

    const {user, isLoading} = useSelector((state) => state.auth);

    const {articles} = useSelector((state) => state.article);

    const navigate = useNavigate();

    const navigateArticleViewHandler = (item) => {
        navigate(`/view-article/${item}`);
    }

    const navigateArticleEditHandler = (item) => {
        navigate(`/edit-article/${item}`);
    }

    const getUserArticles = async () => {
        dispatch(getArticlesStart());

        try {
            const response = await ArticleService.getArticles();

            const userArticles = response.articles.filter((article) => {
                return article.author.username === user.username;
            });

            dispatch(getArticleSuccess(userArticles));
        } catch (error) {
            dispatch(getArticleFailure());
        }
    }

    const deleteUserArticle = async (slug) => {
        dispatch(deleteArticleStart());

        try {
            const response = await ArticleService.deleteArticle(slug);

            dispatch(deleteArticleSuccess(response));

            getUserArticles();
        } catch (error) {
            dispatch(deleteArticleFailure());
        }
    } 

    useEffect(() => {
        const token = getItem('token');

        if (!token) {
            navigate('/login');

            return;
        }

        if (user) {
            getUserArticles();
        }
    }, [user]);

    return (
        <>
            {(
                () => {
                    if (!user || isLoading) {
                        return (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <Loader />
                            </div>
                        );
                    } else {
                        return (
                            <div className='album'>
                                <div className='row row-cols-1 row-cols-md-3 g-3'>
                                    {
                                        articles.map((item) => {
                                            return (
                                                <ArticleCard 
                                                    key={item.id}
                                                    {...item}
                                                    navigateArticleViewHandler={navigateArticleViewHandler}
                                                    navigateArticleEditHandler={navigateArticleEditHandler}
                                                    deleteArticle={deleteUserArticle}
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

export default UserArticles;