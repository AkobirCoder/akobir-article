import React, { useState } from 'react';
import { CreateArticleForm } from './index';
import ArticleService from '../service/article';
import { useDispatch } from 'react-redux';
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article';
import { useNavigate } from 'react-router-dom';

const CreateArticle = () => {
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

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const formSubmit = async (event) => {
        event.preventDefault();

        dispatch(postArticleStart());

        const {title, description, body} = formData;

        const article = {title, description, body}

        try {
            const response = await ArticleService.postArticle(article);

            // console.log(response);

            dispatch(postArticleSuccess(response));

            navigate('/articles');
        } catch (error) {
            dispatch(postArticleFailure());
        }
    }

    return (
        <div className='row d-flex align-items-center justify-content-center' style={{minHeight: '100%'}}>
            <div className='col-11 col-md-8'>
                <h1 className='fs-2 text-center'>Create article</h1>
                <CreateArticleForm 
                    formData={formData} 
                    changeHandlerInput={changeHandlerInput} 
                    formSubmit={formSubmit} 
                />
            </div>
        </div>
    );
}

export default CreateArticle;