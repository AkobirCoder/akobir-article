import React from 'react';
import { Textarea } from '../../ui/index';
import { useSelector } from 'react-redux';

const ArticleCommentForm = ({formData, changeHandlerInput, formSubmit}) => {
    const {isLoading} = useSelector((state) => state.article);

    return (
        <form onSubmit={formSubmit}>
            <Textarea
                label={'Comment body'}
                placeholder={'Comment body'}
                name={'body'}
                value={formData.body}
                changeHandlerInput={changeHandlerInput}
                height={'150px'}
            />
            <button
                type='submit'
                className='btn btn-success w-100'
                disabled={isLoading}
            >
                {isLoading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}

export default ArticleCommentForm;