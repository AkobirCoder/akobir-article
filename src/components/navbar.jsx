import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Logo } from './assets';
import { navigationLinks } from '../constants';
import NavbarLink from './navbar-link';

const Navbar = () => {
    const [toggleNavigation, setToggleNavigation] = useState(false);
    const [activeNav, setActiveNav] = useState('Home');

    const toggleNavigationHandler = () => {
        setToggleNavigation((prevState) => {
            return !prevState;
        });
    }

    const activeNavHandler = (title) => {
        setActiveNav(title);
    }

    const handleClick = () => {
        toggleNavigationHandler();

        activeNavHandler();
    }
    
    return (
        <div className='container'>
            <div className='row d-flex flex-md-row align-items-center py-3 py-md-2'>
                <div className='d-flex col-6 col-md-3 justify-content-start'>
                    <Link className='px-2' to={'/'}>
                        <img src={Logo} className='w-75' alt="Logo" onClick={() => activeNavHandler('Home')} />
                    </Link>
                </div>
                <nav className='d-none d-md-block col-6 col-md-9 py-2'>
                    <div className='row'>
                        <div className='col-12 col-md-6 d-flex align-items-center justify-content-between'>
                            {
                                navigationLinks.map((navLink, index) => {
                                    return (
                                        <NavbarLink 
                                            key={navLink.id} 
                                            {...navLink} 
                                            index={index} 
                                            activeNav={activeNav} 
                                            handleClick={handleClick}
                                         />
                                    );
                                })
                            }
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center justify-content-end'>
                            <Link 
                                to={'/login'} 
                                className='me-3 px-2 text-dark text-decoration-none' 
                                onClick={() => activeNavHandler('')}
                            >
                                Sign in
                            </Link>
                            <Link 
                                to={'/register'} 
                                className='px-2 text-dark text-decoration-none' 
                                onClick={() => activeNavHandler('')}
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className='d-md-none d-flex col-6 justify-content-end position-relative'>
                    <button 
                        type='button' 
                        className='btn btn-outline-primary fs-2 py-0 px-2' 
                        onClick={toggleNavigationHandler}
                    >
                        {(
                            () => {
                                if (toggleNavigation) {
                                    return (
                                        <i className="bi bi-x"></i>
                                    )
                                } else {
                                    return (
                                        <i className="bi bi-list"></i>
                                    )
                                }
                            }
                        )()}
                    </button>
                </div>
                <div 
                    className={`${
                        (() => {
                            if (toggleNavigation) {
                                return 'd-block'
                            } else {
                                return 'd-none'
                            }
                        })()
                    } d-md-none d-block w-100 bg-body-secondary`}
                    style={{minHeight: 'calc(100vh - 72px)', position: 'absolute', top: 72}}
                >
                    <div className='mt-3'>
                        <div className='d-flex flex-column gap-2'>
                            {
                                navigationLinks.map((navLink, index) => {
                                    return (
                                        <NavbarLink 
                                            key={navLink.id} 
                                            {...navLink} 
                                            index={index} 
                                            activeNav={activeNav}
                                            handleClick={handleClick}
                                         />
                                    );
                                })
                            }
                        </div>
                        <div className='d-flex justify-content-center gap-3' style={{marginTop: 200}}>
                            <Link 
                                to={'/login'} 
                                className={`
                                    text-dark 
                                    text-decoration-none 
                                    fw-semibold 
                                    py-2 px-3 
                                    rounded 
                                    bg-dark-subtle
                                `}
                                // onClick={() => activeNavHandler('')}
                                onClick={handleClick}
                            >
                                Sign in
                            </Link>
                            <Link 
                                to={'/register'} 
                                className={`
                                    text-dark 
                                    text-decoration-none 
                                    fw-semibold 
                                    py-2 px-3 
                                    rounded 
                                    bg-dark-subtle
                                `}
                                // onClick={() => activeNavHandler('')}
                                onClick={handleClick}
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;