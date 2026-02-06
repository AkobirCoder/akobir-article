import React from 'react';
import { Modal } from '../ui';
import { ArrowInLeftSquareHalf } from '@boxicons/react';

const CreateArticleModal = ({open, onClose, signInHandler}) => {
    if (!open) return null;

    const btnName = 'Sign in';

    const btnIcon = <ArrowInLeftSquareHalf />;

    const handleSignIn = () => {
        signInHandler();
    }

    return (
        <Modal 
            title="Create Article"
            description="To create a new article, you must first log in"
            btnName={btnName}
            btnIcon={btnIcon}
            onClose={onClose}
            onConfirm={handleSignIn}
        />
    );
}

export default CreateArticleModal;