import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({user, logoutHandler}) => {
    return (
        <div className="dropdown dropstart">
            <button className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div
                    style={{width: 30, height: 30}}
                    className={`
                        d-flex align-items-center justify-content-center
                        bg-primary rounded-5
                        text-decoration-none text-white
                    `}
                >
                    {
                        user.username.split(' ').map((item) => {
                            return item[0];
                        }).join('').toUpperCase()
                    }
                </div>
            </button>
            <ul 
                className="dropdown-menu dropdown-menu-start custom-dropdown-menu"
                style={{width: 250}}
            >
                <li className='px-3 py-2'>
                    <Link
                        to={'/user'}
                        className='d-flex gap-2 align-items-center text-decoration-none'
                    >
                        <div
                            style={{width: 30, height: 30}}
                            className={`
                                d-flex align-items-center justify-content-center
                                bg-primary-subtle rounded-5 border border-primary
                                text-decoration-none text-dark
                            `} 
                        >
                            {
                                user.username.split(' ').map((item) => {
                                    return item[0];
                                }).join('').toUpperCase()
                            }
                        </div>
                        <p className='mb-0 ps-1 pe-2 text-dark'>{user.username}</p>
                    </Link>
                </li>
                <li className='px-3 py-2'>
                    <Link className='ps-1 pe-2 text-dark text-decoration-none' to={'/create-article'}>
                        Create article
                    </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li className='px-3 py-2'>
                    <button 
                        className='btn btn-outline-danger w-100' 
                        onClick={logoutHandler}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;