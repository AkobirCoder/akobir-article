import React from 'react';
import {Link} from 'react-router-dom';
import { Logo } from './assets';

const Navbar = () => {
    return (
        <div className='container'>
            <div className='row d-flex flex-column flex-md-row align-items-center py-2'>
                <div className='col-4'>
                    <Link className='px-2' to={'/'}>
                        <img src={Logo} width={150} height={75} alt="Logo" />
                    </Link>
                </div>
                <nav className='col-8 py-2'>
                    <div className='row'>
                        <div className='col-6 d-flex justify-content-evenly'>
                            <Link className='text-decoration-none'>home</Link>
                            <Link className='text-decoration-none'>home</Link>
                            <Link className='text-decoration-none'>home</Link>
                            <Link className='text-decoration-none'>home</Link>
                            <Link className='text-decoration-none'>home</Link>
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