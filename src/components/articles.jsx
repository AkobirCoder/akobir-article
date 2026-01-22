import React, { useEffect } from 'react';
import ArticleCard from './article-card';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../ui';
import { useNavigate } from 'react-router-dom';
import { deleteArticleFailure, deleteArticleStart, deleteArticleSuccess, getArticlesStart, getArticleSuccess } from '../slice/article';
import ArticleService from '../service/article';

const Articles = () => {
    const dispatch = useDispatch();

    const {articles, isLoading} = useSelector((state) => state.article);

    const navigate = useNavigate();

    const navigateArticleViewHandler = (item) => {
        navigate(`/view-article/${item}`);
    }

    const navigateArticleEditHandler = (item) => {
        navigate(`/edit-article/${item}`);
    }

    const getArticles = async () => {
        dispatch(getArticlesStart());

        try {
            const response = await ArticleService.getArticles();

            dispatch(getArticleSuccess(response.articles));
        } catch (error) {
            console.log(error);
        }
    }

    const deleteArticle = async (slug) => {
        dispatch(deleteArticleStart());

        try {
            const response = await ArticleService.deleteArticle(slug);

            dispatch(deleteArticleSuccess(response));

            getArticles();
        } catch (error) {
            dispatch(deleteArticleFailure());

            // console.log(error);
        }
    }

    useEffect(() => {
        getArticles();
    }, []);

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
                                                    deleteArticle={deleteArticle} />
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

export default Articles;