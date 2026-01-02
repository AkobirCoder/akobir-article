import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container'>
            <div className='row d-flex flex-column flex-md-row align-items-center py-2'>
                <div className='col-4'>
                    <Link className='px-2' to={'/'}>
                        Navbar
                    </Link>
                </div>
                <nav className='col-8 py-2'>
                    <div className='row'>
                        <div className='col-6 d-flex justify-content-evenly'>
                            <Link className=''>home</Link>
                            <Link className=''>home</Link>
                            <Link className=''>home</Link>
                            <Link className=''>home</Link>
                            <Link className=''>home</Link>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <Link to={'/login'} className='me-3 px-2 text-dark text-decoration-none'>
                                Login
                            </Link>
                            <Link to={'/register'} className='px-2 text-dark text-decoration-none'>
                                Register
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;