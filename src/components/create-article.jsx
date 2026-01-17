import React, { useState } from 'react';
import { Input, Textarea } from '../ui';

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
                <form>
                    <Input label={'Title'} placeholder={'Title'} name={'title'} value={formData.title} changeHandlerInput={changeHandlerInput} />
                    <Textarea label={'Description'} placeholder={'Description'} name={'description'} value={formData.description} changeHandlerInput={changeHandlerInput} />
                    <Textarea label={'Body'} placeholder={'Body'} name={'body'} value={formData.body} changeHandlerInput={changeHandlerInput} height={'250px'} />
                    <button type='submit' className='w-100 btn btn-lg btn-primary'>Create</button>
                </form>
            </div>
        </div>
    );
}

export default CreateArticle;