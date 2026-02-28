import React from 'react';
import { Modal } from '../../ui/index';
import { ArrowInLeftSquareHalf } from '@boxicons/react';

const ArticleFavoriteModal = ({open, onClose, loginHandler}) => {
    if (!open) return null;

    const btnName = 'Sign in';

    const btnIcon = <ArrowInLeftSquareHalf />;

    const handleLogin = () => {
        loginHandler();
    }

    return (
        <Modal 
            title="Favorite article"
            description="To favorite a new article, you must first log in"
            btnName={btnName}
            btnIcon={btnIcon}
            onClose={onClose}
            onConfirm={handleLogin}
        />
    );
}

export default ArticleFavoriteModal;