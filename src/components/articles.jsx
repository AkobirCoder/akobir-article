import React, { useEffect } from 'react';
import ArticleCard from './article-card';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../ui';
import { useNavigate } from 'react-router-dom';
import { getArticlesStart, getArticleSuccess } from '../slice/article';
import ArticleService from '../service/article';

const Articles = () => {
    const dispatch = useDispatch();

    const {articles, isLoading} = useSelector((state) => state.article);

    const navigate = useNavigate();

    const navigateHandler = (item) => {
        navigate(`/article/${item}`);
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
        try {
            await ArticleService.deleteArticle(slug);

            getArticles();
        } catch (error) {
            console.log(error);
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
                                                <ArticleCard key={item.id} {...item} navigateHandler={navigateHandler} deleteArticle={deleteArticle} />
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