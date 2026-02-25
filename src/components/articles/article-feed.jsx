import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../ui/index';
import { 
    deleteArticleFailure, 
    deleteArticleStart, 
    deleteArticleSuccess, 
    getArticlesFeedFailure, 
    getArticlesFeedStart, 
    getArticlesFeedSuccess, 
    postArticleFavoriteFailure, 
    postArticleFavoriteStart, 
    postArticleFavoriteSuccess 
} from '../../slice/article';
import ArticleService from '../../service/article';
import { getItem } from '../../helpers/persistance-storage';
import { ArticleCard } from '../index';

const ArticleFeed = () => {
    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.auth);

    const {isLoading, feedArticles} = useSelector((state) => state.article);

    const navigate = useNavigate();

    const navigateArticleViewHandler = (item) => {
        navigate(`/view-article/${item}`);
    }

    const navigateArticleEditHandler = (item) => {
        navigate(`/edit-article/${item}`);
    }

    const getFeedArticles = async () => {
        dispatch(getArticlesFeedStart());

        try {
            const response = await ArticleService.getFeedArticles();

            dispatch(getArticlesFeedSuccess(response.articles));
        } catch (error) {
            dispatch(getArticlesFeedFailure(error.response.data.errors));
        }
    }

    const deleteArticle = async (slug) => {
        dispatch(deleteArticleStart());

        try {
            const response = await ArticleService.deleteArticle(slug);

            dispatch(deleteArticleSuccess(response));

            getFeedArticles();
        } catch (error) {
            dispatch(deleteArticleFailure());

            // console.log(error);
        }
    }

    const favoriteArticle = async (slug, isFavorited) => {
        dispatch(postArticleFavoriteStart());

        try {
            const response = isFavorited
            ? await ArticleService.deleteArticleFavorite(slug)
            : await ArticleService.postArticleFavorite(slug);

            dispatch(postArticleFavoriteSuccess(response));

            getFeedArticles();
        } catch (error) {
            dispatch(postArticleFavoriteFailure());
        }
    }

    useEffect(() => {
        const token = getItem('token');

        if (!token) {
            navigate('/login');
        }

        getFeedArticles();
    }, [navigate]);

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
                                <div 
                                    style={{backgroundImage: 'var(--bs-gradient)'}}
                                    className='d-flex d-md-block justify-content-center bg-primary rounded border-bottom-0 p-4 p-md-5 mb-3'
                                >
                                    <h1 className='text-white fw-normal'>My subscriptions articles</h1>
                                </div>
                                <div className='row row-cols-1 row-cols-md-3 g-3'>
                                    {
                                        feedArticles.map((item) => {
                                            return (
                                                <ArticleCard 
                                                    key={item.id}
                                                    {...item}
                                                    navigateArticleViewHandler={navigateArticleViewHandler} 
                                                    navigateArticleEditHandler={navigateArticleEditHandler}
                                                    deleteArticle={deleteArticle} 
                                                    favoriteArticle={favoriteArticle}
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

export default ArticleFeed;