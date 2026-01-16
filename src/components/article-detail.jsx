import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from '../slice/article';
import ArticleService from '../service/article';

const ArticleDetail = () => {
    const {slug} = useParams();

    const dispatch = useDispatch();

    const getArticleDetail = async () => {
        dispatch(getArticleDetailStart());
        
        try {
            const response = await ArticleService.getArticleDetail(slug);
            
            dispatch(getArticleDetailSuccess(response.article));

            // console.log(response.article);
        } catch (error) {
            dispatch(getArticleDetailFailure());
        }
    }

    useEffect(() => {
        getArticleDetail();
    }, [slug]);

    return (
        <div>ArticleDetail - id: {slug}</div>
    );
}

export default ArticleDetail;