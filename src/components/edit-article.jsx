import React, { useEffect, useState } from 'react';
import { ArticleForm } from '../ui';
import { useDispatch } from 'react-redux';
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from '../slice/article';
import ArticleService from '../service/article';
import { useParams } from 'react-router-dom';

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
    }, [])

    const formSubmit = () => {
        // edit service yozilishi kerak...
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