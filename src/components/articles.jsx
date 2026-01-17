import React from 'react';
import ArticleCard from './article-card';
import { useSelector } from 'react-redux';
import { Loader } from '../ui';
import { useNavigate } from 'react-router-dom';

const Articles = () => {
    const {articles, isLoading} = useSelector((state) => state.article);

    const navigate = useNavigate();

    const navigateHandler = (item) => {
        navigate(`/article/${item}`);
    }

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
                                                <ArticleCard key={item.id} {...item} navigateHandler={navigateHandler} />
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