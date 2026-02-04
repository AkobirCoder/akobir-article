import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { dropdownItems } from '.';
import { useSelector } from 'react-redux';

const Dropdown = ({user, onLogoutClick}) => {
    const dropdownItemStyle = 'd-block text-dark text-decoration-none';

    const [activeDropdowmItem, setActiveDropdownItem] = useState('');

    const [activeItem, setActiveItem] = useState(null);

    const activeDropdownItemHandler = (id) => {
        setActiveDropdownItem(id);
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
                    style={{width: 40, height: 40, backgroundImage: 'var(--bs-gradient)'}}
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
                    p-3 bg-body-tertiary shadow-lg 
                    custom-dropdown-menu
                `}
                style={{width: 300}}
            >
                <li 
                    className={`
                        px-3 py-2 rounded-top
                        custom-dropdown-item custom-dropdown-link  
                    `}
                >
                    <div
                        className={`d-flex gap-3 align-items-center`}
                    >
                        <div
                            style={{width: 35, height: 35, backgroundImage: 'var(--bs-gradient)'}}
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
                        <div>
                            <p style={{fontWeight: 600}} className='mb-0 text-dark'>{user.username}</p>
                            {
                                profileExtra.fullname
                                ? (
                                    <>
                                        <p style={{fontSize: 13}} className='mb-0 text-dark'>
                                            {profileExtra.fullname}
                                        </p>
                                    </>
                                )
                                : ('')
                            }
                            
                        </div>
                    </div>
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
                            <NavLink 
                                to={dropdownItem.path}
                                key={dropdownItem.id} 
                                className={({isActive}) => `
                                    px-3 py-2 custom-dropdown-item
                                    ${dropdownItemStyle}
                                    ${index === dropdownItems.length - 1 ? 'mb-0' : 'mb-2'}
                                    ${isActive ? 'custom-dropdown-link' : ''}
                                `}
                                onClick={() => activeDropdownItemHandler(dropdownItem.id)}
                            >
                                {dropdownItem.name}
                            </NavLink>
                        );
                    })
                }
                <li><hr className="dropdown-divider mb-3" /></li>
                <li className=''>
                    <button 
                        type='button'
                        className='btn btn-outline-danger w-100'
                        onClick={onLogoutClick}
                        data-bs-dismiss='dropdown'
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;