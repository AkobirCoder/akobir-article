import React from 'react';
import {Link} from 'react-router-dom';

const NavbarLink = ({title, path, index}) => {
    return (
        <>
            <Link to={path} className='text-dark text-decoration-none py-2 px-3 rounded-top custom-nav-link'>
                {title}
            </Link>
        </>
    );
}

export default NavbarLink;