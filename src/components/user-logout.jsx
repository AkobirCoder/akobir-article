import React from 'react';
import {Modal} from '../ui';
import { ArrowOutRightSquareHalf } from '@boxicons/react';

const UserLogout = ({open, onClose, logoutHandler}) => {
    if (!open) return null;

    const btnName = 'Logout';

    const btnIcon = <ArrowOutRightSquareHalf />

    return (
        <Modal 
            title={'Confirm logout'}
            description={'Are you sure you want to logout?'}
            btnName={btnName} 
            btnIcon={btnIcon}
            onClose={onClose} 
            logoutHandler={logoutHandler} 
        />
    );
}

export default UserLogout;