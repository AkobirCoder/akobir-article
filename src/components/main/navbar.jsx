import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormLogo } from '../assets/index';
import { navigationLinks } from '../../constants/index';
import { Appearance, CreateArticleModal, NavbarLink, UserLogoutModal } from '../index';
import { removeItem } from '../../helpers/persistance-storage';
import { logoutUser } from '../../slice/auth';
import { Dropdown } from '../../ui/index';

const Navbar = () => {
    const [toggleNavigation, setToggleNavigation] = useState(false);
    
    const [activeNav, setActiveNav] = useState('Home');

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const [showCreateArticleModal, setShowCreateArticleModal] = useState(false);

    const toggleNavigationHandler = () => {
        setToggleNavigation((prevState) => {
            return !prevState;
        });
    }

    const activeNavHandler = (title) => {
        setActiveNav(title);
    }

    const handleClick = (title) => {
        toggleNavigationHandler();

        activeNavHandler(title);
    }

    const showLogoutModalHandler = () => {
        setShowLogoutModal((prevState) => {
            return !prevState;
        });
    }

    const showCreateArticleModalHandler = () => {
        setShowCreateArticleModal((prevState) => {
            return !prevState;
        });
    }

    const dispatch = useDispatch();

    const {loggedIn, user} = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const logoutHandler = () => {
        setShowLogoutModal(false);

        dispatch(logoutUser());

        removeItem('token');

        navigate('/login');
    }

    const loginHandler = () => {
        navigate('/login');
    }
    
    return (
        <div className='container-fluid px-3 py-2'>
            <div className='row g-0 d-flex flex-md-row align-items-center'>
                <div className='d-flex col-6 col-md-4 justify-content-start'>
                    <Link 
                        className='d-flex align-items-center text-decoration-none' 
                        to={'/'}>
                        <img
                            src={FormLogo}  
                            alt="Logo" 
                            onClick={() => activeNavHandler('Home')} 
                        />
                        <span className='text-body fw-bold fs-3 ms-1'>Article</span>
                    </Link>
                </div>
                <nav className='d-none d-md-block col-6 col-md-8 py-2'>
                    <div className='row g-0'>
                        <div className='col-12 col-md-6 d-flex align-items-center justify-content-evenly'>
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
                        <div className='col-12 col-md-6 d-flex align-items-center justify-content-end gap-2'>
                            <Appearance />
                            {(
                                () => {
                                    if (loggedIn) {
                                        return (
                                            <div className='d-flex align-items-center me-2'>
                                                <Dropdown 
                                                    user={user}
                                                    onLogoutClick={showLogoutModalHandler}
                                                />
                                                <UserLogoutModal
                                                    open={showLogoutModal}
                                                    onClose={showLogoutModalHandler}
                                                    logoutHandler={logoutHandler} 
                                                />
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <>
                                                <button 
                                                    type='button'
                                                    className='px-2 text-body text-decoration-none border-0 bg-transparent' 
                                                    onClick={showCreateArticleModalHandler}
                                                >
                                                    Create
                                                </button>
                                                <CreateArticleModal
                                                    open={showCreateArticleModal} 
                                                    onClose={showCreateArticleModalHandler} 
                                                    loginHandler={loginHandler}
                                                />
                                                <Link 
                                                    to={'/login'} 
                                                    className='px-2 text-body text-decoration-none' 
                                                    onClick={() => activeNavHandler('')}
                                                >
                                                    Sign in
                                                </Link>
                                                <Link 
                                                    to={'/register'} 
                                                    className='px-2 text-body text-decoration-none' 
                                                    onClick={() => activeNavHandler('')}
                                                >
                                                    Sign up
                                                </Link>
                                            </>
                                        );
                                    }
                                }
                            )()}
                        </div>
                    </div>
                </nav>
                <div className='d-md-none d-flex col-6 justify-content-end position-relative'>
                    <button 
                        type='button' 
                        className='btn btn-outline-primary fs-4 py-0 px-2' 
                        onClick={toggleNavigationHandler}
                    >
                        {(
                            () => {
                                if (toggleNavigation) {
                                    return (
                                        <i className="bi bi-x"></i>
                                    );
                                } else {
                                    return (
                                        <i className="bi bi-list"></i>
                                    );
                                }
                            }
                        )()}
                    </button>
                    {
                        loggedIn ? (
                            <div className='d-flex align-items-center ms-2'>
                                <Dropdown 
                                    user={user}
                                    onLogoutClick={showLogoutModalHandler}
                                />
                                <UserLogoutModal
                                    open={showLogoutModal}
                                    onClose={showLogoutModalHandler}
                                    logoutHandler={logoutHandler} 
                                />
                            </div>
                        ) : ('')
                    }
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
                    } d-md-none d-block w-100 z-3 bg-body-secondary p-3`}
                    style={{height: 'calc(100vh - 68px)', position: 'absolute', top: 68, left: 0}}
                >
                    <div className=''>
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
                            <Appearance />
                        </div>
                        <div className='d-flex justify-content-center gap-3 signin-signup-mobile-link'>
                            {(
                                () => {
                                    if (loggedIn) {
                                        return (
                                            <>
                                                <button
                                                    className='btn btn-danger'
                                                    onClick={showLogoutModalHandler}
                                                >
                                                    Sign out
                                                </button>
                                                <UserLogoutModal 
                                                    open={showLogoutModal}
                                                    onClose={showLogoutModalHandler}
                                                    logoutHandler={logoutHandler} 
                                                />
                                            </>
                                        );
                                    } else {
                                        return (
                                            <>
                                                <Link 
                                                    to={'/login'} 
                                                    className={`
                                                        text-body 
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
                                                        text-body 
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
                                            </>
                                        );
                                    }
                                }
                            )()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;