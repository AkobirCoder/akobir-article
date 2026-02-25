import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
    ArrowOutRightSquareHalf, 
    Article, 
    Bell, 
    BookmarkAlt, 
    Brush, 
    ClipboardPlus, 
    Edit, 
    User 
} from '@boxicons/react';
import { dropdownItems } from './index';

const Dropdown = ({user, onLogoutClick}) => {
    const dropdownItemStyle = 'd-block text-muted text-decoration-none rounded';

    const {profileExtra} = useSelector((state) => state.profileExtra);

    const iconsMap = {
        User: User,
        Article: Article,
        Bell: Bell,
        Brush: Brush,
        BookmarkAlt: BookmarkAlt,
    }

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
                        px-3 py-2 rounded
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
                {
                    dropdownItems.map((dropdownItem, index) => {
                        const Icon = iconsMap[dropdownItem.icon];

                        return (
                            <NavLink 
                                to={dropdownItem.path}
                                key={dropdownItem.id} 
                                className={({isActive}) => `
                                    d-flex align-items-center
                                    px-2 py-1 custom-dropdown-item
                                    ${dropdownItemStyle}
                                    ${index === dropdownItems.length - 1 ? 'mb-0' : 'mb-1'}
                                    ${isActive ? 'custom-dropdown-link' : ''}
                                `}
                            >  
                                <Icon />
                                <span className='ms-2'>{dropdownItem.name}</span>
                            </NavLink>
                        );
                    })
                }
                <li><hr className="dropdown-divider" /></li>
                <NavLink 
                    to={'/user-edit'}
                    className={({isActive}) => `
                        d-flex align-items-center
                        px-2 py-1 mb-1 custom-dropdown-item
                        ${dropdownItemStyle}
                        ${isActive ? 'custom-dropdown-link' : ''}
                    `}
                >
                    <Edit />
                    <span className='ms-2'>Edit profile</span>
                </NavLink>
                <NavLink 
                    to={'/create-article'}
                    className={({isActive}) => `
                        d-flex align-items-center
                        px-2 py-1 custom-dropdown-item
                        ${dropdownItemStyle}
                        ${isActive ? 'custom-dropdown-link' : ''}
                    `} 
                >
                    <ClipboardPlus />
                    <span className='ms-2'>Create article</span>
                </NavLink>
                <li><hr className="dropdown-divider mb-3" /></li>
                <li className=''>
                    <button 
                        type='button'
                        className='d-flex align-items-center btn btn-outline-danger px-2 text-start border-0 w-100'
                        onClick={onLogoutClick}
                        data-bs-dismiss='dropdown'
                    >
                        <ArrowOutRightSquareHalf />
                        <span className='ms-2'>Sign out</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;