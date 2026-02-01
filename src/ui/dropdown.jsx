import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dropdownItems } from '.';
import { useSelector } from 'react-redux';

const Dropdown = ({user, logoutHandler}) => {
    const dropdownItemStyle = 'd-block text-dark text-decoration-none';

    const [activeDropdowmItem, setActiveDropdownItem] = useState('');

    const [activeItem, setActiveItem] = useState(null);

    const activeDropdownItemHandler = () => {
        setActiveDropdownItem();
    }

    const activeItemHandler = () => {
        setActiveItem();
    }

    const {profileExtra} = useSelector((state) => state.profileExtra);

    return (
        <div className="dropdown dropstart">
            <button 
                className="btn p-0" 
                type="button" 
                data-bs-toggle="dropdown" 
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
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
                className={`
                    dropdown-menu dropdown-menu-start 
                    p-3 bg-light shadow-lg 
                    custom-dropdown-menu
                `}
                style={{width: 300}}
            >
                <li 
                    className={`
                        px-3 py-2 custom-dropdown-item rounded-top
                        ${activeItem === 'profile' ? 'custom-dropdown-link' : ''}
                    `}
                    onClick={() => activeItemHandler('profile')}  
                >
                    <Link
                        to={'/user'}
                        className={`d-flex gap-2 align-items-center text-decoration-none`}
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
                        <div>
                            <p className='mb-0 ps-1 pe-2 text-dark'>{user.username}</p>
                            <p>{profileExtra.fullname}</p>
                        </div>
                    </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li 
                    className={`
                        px-3 py-2 custom-dropdown-item 
                        ${activeItem === 'edit' ? 'custom-dropdown-link' : ''}
                    `}
                    onClick={() => activeItemHandler('edit')}
                >
                    <Link className={`${dropdownItemStyle}`} to={'/user-edit'}>
                        Edit profile
                    </Link>
                </li>
                <li 
                    className={`
                        px-3 py-2 custom-dropdown-item 
                        ${activeItem === 'create' ? 'custom-dropdown-link' : ''}
                    `}
                    onClick={() => activeItemHandler('create')}
                >
                    <Link className={`${dropdownItemStyle}`} to={'/create-article'}>
                        Create article
                    </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                {
                    dropdownItems.map((dropdownItem, index) => {
                        return (
                            <li 
                                key={dropdownItem.id} 
                                className={`
                                    px-3 py-2 custom-dropdown-item
                                    ${dropdownItemStyle}
                                    ${index === dropdownItems.length - 1 ? 'mb-0' : 'mb-2'}
                                    ${activeDropdowmItem === dropdownItem.id ? 'custom-dropdown-link' : ''}
                                `}
                                onClick={() => activeDropdownItemHandler(dropdownItem.id)}
                            >
                                <Link className={`${dropdownItemStyle}`} to={'/'}>
                                    {dropdownItem.name}
                                </Link>
                            </li>
                        );
                    })
                }
                <li><hr className="dropdown-divider" /></li>
                <li className=''>
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