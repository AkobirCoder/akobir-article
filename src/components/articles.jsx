import React from 'react';
import ArticleCard from './article-card';
import { useSelector } from 'react-redux';

const Articles = () => {
    const {articles} = useSelector((state) => state.article)

    return (
        <div className='album pb-3'>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                {
                    articles.map((item) => {
                        return (
                            <ArticleCard key={item.id} {...item} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Articles;