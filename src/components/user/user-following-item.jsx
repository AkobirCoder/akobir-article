import React, { useState } from 'react';

const UserFollowingItem = ({image, username, bio, index, users}) => {
    const [showMoreBio, setShowMoreBio] = useState(false);

    const safeBio = bio || '';

    const isLongBio = safeBio.length > 50;

    const shortBio = isLongBio ? `${safeBio.slice(0, 50)}...` : safeBio;

    const displayBioHandler = () => {
        setShowMoreBio((prevState) => {
            return !prevState;
        });
    }

    return (
        <div 
            className={`
                col-12 col-md-7 p-3 bg-white border rounded shadow-lg 
                ${index === users.length - 1 ? 'mb-0' : 'mb-3'}
            `}
        >
            <div className='row g-0'>
                <div className='col-12 col-md-1 d-flex align-items-start justify-content-start'>
                    {
                        image ? (
                            <img src={image} alt="User" />
                        ) : (
                            <svg
                                className='bg-placeholder-img'
                                width={'50'}
                                height={'50'}
                                xmlns='http://www.w3.org/2000/svg'
                                role='img'
                                aria-label='Placeholder: Thumbnail'
                                preserveAspectRatio='xMidYMid slice'
                                focusable='false'
                                style={{borderRadius: '50%'}}
                            >
                                <title>Placeholder</title>
                                <rect width={'100%'} height={'100%'} fill='#55595C'></rect>
                                <text
                                    x={'50%'} y={'50%'}
                                    fill='#fff'
                                    className='text-uppercase p-0 m-0'
                                    textAnchor="middle" dominantBaseline="middle"
                                >
                                    {username[0]}
                                </text>
                            </svg>
                        )
                    }
                </div>
                <div className='col-12 col-md-10'>
                    <p className='fw-semibold text-capitalize m-0'>{username}</p>
                    <p className='m-0'>
                        {
                            safeBio
                            ? (
                                    !showMoreBio ? (
                                    shortBio
                                ) : (
                                    safeBio
                                )
                            )
                            : (
                                <span className='text-muted'>No data</span>
                            )
                        }
                        {
                            (safeBio).length > 50 && (
                                <span 
                                    style={{cursor: 'pointer'}} 
                                    className='text-primary bio-toggle ms-2' 
                                    onClick={displayBioHandler}
                                >
                                    {showMoreBio ? 'Less' : 'More'}
                                </span>
                            ) 
                        }
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default UserFollowingItem;