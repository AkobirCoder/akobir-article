import React, { useState } from 'react';
// import { Input, Textarea } from '../ui';
import { CreateArticleForm } from './index';

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

    return (
        <div className='row d-flex align-items-center justify-content-center' style={{minHeight: '100%'}}>
            <div className='col-11 col-md-8'>
                <h1 className='fs-2 text-center'>Create article</h1>
                <CreateArticleForm formData={formData} changeHandlerInput={changeHandlerInput} />
            </div>
        </div>
    );
}

export default CreateArticle;