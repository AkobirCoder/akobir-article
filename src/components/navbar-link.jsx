import React from 'react';
import {Link} from 'react-router-dom';

const NavbarLink = ({activeNav, title, path, handleClick}) => {
    return (
        <>
            <Link 
                to={path}
                className={ `
                    text-dark 
                    text-decoration-none 
                    py-2 px-3 
                    rounded-top 
                    nav-link-item
                    ${activeNav === title ? 'custom-nav-link' : ''}
                `}
                onClick={() => handleClick(title)}
            >
                {title}
            </Link>
        </>
    );
}

export default NavbarLink;