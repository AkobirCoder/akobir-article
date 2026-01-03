import React from 'react';
import {NavLink} from 'react-router-dom';

const NavbarLink = ({title, path, activeNavHandler}) => {
    return (
        <>
            <NavLink 
                to={path}
                className={({isActive}) => `
                    text-dark 
                    text-decoration-none 
                    py-2 px-3 
                    rounded-top 
                    ${isActive ? 'custom-nav-link' : ''}
                `}
                onClick={() => activeNavHandler(title)}
            >
                {title}
            </NavLink>
        </>
    );
}

export default NavbarLink;