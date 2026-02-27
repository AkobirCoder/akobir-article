import React from 'react';
import { Textarea } from '../../ui/index';
import { useSelector } from 'react-redux';

const ArticleCommentForm = ({formData, changeHandlerInput, formSubmit}) => {
    const {isLoading} = useSelector((state) => state.article);

    return (
        <form onSubmit={formSubmit}>
            <Textarea
                label={'Comment'}
                placeholder={'Comment'}
                name={'commentBody'}
                value={formData.commentBody}
                changeHandlerInput={changeHandlerInput}
                height={'150px'}
            />
            <button
                type='submit'
                className='btn btn-success w-25'
                disabled={isLoading}
            >
                {isLoading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}

export default ArticleCommentForm;