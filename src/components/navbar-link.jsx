import React from 'react';
import {NavLink} from 'react-router-dom';

const NavbarLink = ({activeNav, title, path, handleClick}) => {
    return (
        <>
            <NavLink
                to={path}
                className={({isActive}) => `
                    text-dark 
                    text-decoration-none 
                    py-2 px-3 
                    rounded-top 
                    nav-link-item
                    ${isActive ? 'custom-nav-link' : ''}
                `}
                onClick={() => handleClick(title)}
            >
                {title}
            </NavLink>
        </>
    );
}

export default NavbarLink;