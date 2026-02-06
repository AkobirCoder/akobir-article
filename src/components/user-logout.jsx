import React from 'react';
import {Modal} from '../ui';
import { ArrowOutRightSquareHalf } from '@boxicons/react';

const UserLogout = ({open, onClose, logoutHandler}) => {
    if (!open) return null;

    const btnName = 'Sign out';

    const btnIcon = <ArrowOutRightSquareHalf />

    const handleLogout = () => {
        logoutHandler();
    }

    return (
        <Modal 
            title={'Confirm logout'}
            description={'Are you sure you want to logout?'}
            btnName={btnName} 
            btnIcon={btnIcon}
            onClose={onClose} 
            onConfirm={handleLogout}
        />
    );
}

export default UserLogout;