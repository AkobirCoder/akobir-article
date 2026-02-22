import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArticleService from '../../service/article';
import { 
    postArticleFailure, 
    postArticleStart, 
    postArticleSuccess 
} from '../../slice/article';
import { ArticleForm, Loader } from '../../ui/index';

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

    const {isLoading, loggedIn} = useSelector((state) => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            navigate('/login');
        }
    },[loggedIn, navigate]);

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

        setFormData(() => {
            return {
                title: '',
                description: '',
                body: '',
            }
        });
    }

    const btnName = 'Create';

    return (
        <>
            {(
                () => {
                    if (!isLoading && !loggedIn) {
                        return (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <Loader />
                            </div>
                        ); 
                    } else {
                        return (
                            <div className='row g-0 d-flex align-items-center justify-content-center' style={{minHeight: '100%'}}>
                                <div className='col-11 col-md-8'>
                                    <h1 className='fs-2 text-center'>Create article</h1>
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
                }
            )()}
        </>
    );
}

export default CreateArticle;