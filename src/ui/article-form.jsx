import React from 'react';
import {Input, Textarea} from './index';
import { useSelector } from 'react-redux';

const ArticleForm = ({formData, changeHandlerInput, formSubmit, btnName}) => {
    const {isLoading} = useSelector((state) => state.article);

    return (
        <form onSubmit={formSubmit}>
            <Input 
                margin={'mb-2'}
                label={'Title'} 
                placeholder={'Title'} 
                name={'title'} 
                value={formData.title} 
                changeHandlerInput={changeHandlerInput} 
            />
            <Textarea 
                label={'Description'} 
                placeholder={'Description'} 
                name={'description'} 
                value={formData.description} 
                changeHandlerInput={changeHandlerInput} 
            />
            <Textarea 
                label={'Body'} 
                placeholder={'Body'} 
                name={'body'} 
                value={formData.body} 
                changeHandlerInput={changeHandlerInput} 
                height={'250px'} 
                />
            <button type='submit' className='w-100 btn btn-lg btn-primary' disabled={isLoading}>
                {(
                    () => {
                        if (isLoading) {
                            return 'Loading...';
                        } else {
                            return btnName;
                        }
                    }
                )()}
            </button>
        </form>
    );
}

export default ArticleForm;