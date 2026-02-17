import React from 'react';
import { ArrowInLeftSquareHalf } from '@boxicons/react';
import { Modal } from '../../ui/index';

const CreateArticleModal = ({open, onClose, loginHandler}) => {
    if (!open) return null;

    const btnName = 'Sign in';

    const btnIcon = <ArrowInLeftSquareHalf />;

    const handleLogin = () => {
        loginHandler();
    }

    return (
        <Modal 
            title="Create Article"
            description="To create a new article, you must first log in"
            btnName={btnName}
            btnIcon={btnIcon}
            onClose={onClose}
            onConfirm={handleLogin}
        />
    );
}

export default CreateArticleModal;