import React from 'react';
import { sidebarItems } from '../constants';

const SidebarItem = ({title, index}) => {
    return (
        <button 
            className={`
                btn btn-outline-primary
                text-start 
                border-0
                rounded-0 
                px-3 py-2 
                ${index === sidebarItems.length - 1 ? 'mb-3' : 'mb-0'}
            `}
        >
            {title}
        </button>
    );
}

export default SidebarItem;