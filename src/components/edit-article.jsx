import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { 
    getArticleDetailFailure, 
    getArticleDetailStart, 
    getArticleDetailSuccess, 
    putArticleFailure, 
    putArticleStart, 
    putArticleSuccess 
} from '../slice/article';
import ArticleService from '../service/article';
import { ArticleForm } from '../ui';

const EditArticle = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        body: '',
    });

    const changeHandlerInput = (event) => {
        const {name, value} = event.target;

        setFormData((prevState) => {
            return {...prevState, [name]: value}
        });
    }

    const {slug} = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart());
        
            try {
                const response = await ArticleService.getArticleDetail(slug); // bunday qilishdan asosiy maqsad articleDetaildagi ma'lumotlarni olib formaga qiymat sifatida berish va bu ma'lumotlar har bir article slugi orqali bo'ladi.

                setFormData(() => {
                    return {
                        title: response.article.title,
                        description: response.article.description,
                        body: response.article.body,
                    }
                });

                dispatch(getArticleDetailSuccess(response.article))
            } catch (error) {
                dispatch(getArticleDetailFailure());
            }
        }

        getArticleDetail();
    }, [slug, dispatch]);

    const formSubmit = async (event) => {
        event.preventDefault();

        dispatch(putArticleStart());

        const {title, description, body} = formData;

        const article = {title, description, body}

        try {
            const response = await ArticleService.editArticle(slug, article);

            dispatch(putArticleSuccess(response));

            navigate('/articles');
        } catch (error) {
            dispatch(putArticleFailure());
        }
    }

    const btnName = 'Edit';
 
    return (
        <div className='row d-flex align-items-center justify-content-center' style={{minHeight: '100%'}}>
            <div className='col-11 col-md-8'>
                <h1 className='fs-2 text-center'>Edit article</h1>
                <ArticleForm
                    formData={formData} 
                    changeHandlerInput={changeHandlerInput} 
                    formSubmit={formSubmit} 
                    btnName={btnName}
                />
            </div>
        </div>
    );
}

export default EditArticle;