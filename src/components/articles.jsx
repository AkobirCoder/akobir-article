import React from 'react';
import ArticleCard from './article-card';
import { useSelector } from 'react-redux';
import { Loader } from '../ui';

const Articles = () => {
    const {articles, isLoading} = useSelector((state) => state.article);

    return (
        <div className='album pb-3'>
            <>
                {(
                    () => {
                        if (isLoading) {
                            return (
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Loader />
                                </div>
                            );
                        } else {
                            return (
                                <div className='row row-cols-1 row-cols-md-3 g-3'>
                                    {
                                        articles.map((item) => {
                                            return (
                                                <ArticleCard key={item.id} {...item} />
                                            );
                                        })
                                    }
                                </div>
                            );
                        }
                    }
                )()}
            </>
            
            
        </div>
    );
}

export default Articles;