import React from 'react';
import { Input, Textarea } from '../ui';

const CreateArticleForm = ({formData, changeHandlerInput}) => {
    return (
        <form>
            <Input label={'Title'} placeholder={'Title'} name={'title'} value={formData.title} changeHandlerInput={changeHandlerInput} />
            <Textarea label={'Description'} placeholder={'Description'} name={'description'} value={formData.description} changeHandlerInput={changeHandlerInput} />
            <Textarea label={'Body'} placeholder={'Body'} name={'body'} value={formData.body} changeHandlerInput={changeHandlerInput} height={'250px'} />
            <button type='submit' className='w-100 btn btn-lg btn-primary'>Create</button>
        </form>
    );
}

export default CreateArticleForm;