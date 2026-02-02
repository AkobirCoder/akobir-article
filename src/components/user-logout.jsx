import React from 'react';
import {Modal} from '../ui';

const UserLogout = ({open, onClose, logoutHandler}) => {
    const btnName = 'Logout';

    if (!open) return null;

    return (
        <Modal btnName={btnName} onClose={onClose} logoutHandler={logoutHandler} />
    );
}

export default UserLogout;