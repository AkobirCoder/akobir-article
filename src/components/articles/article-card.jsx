import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ArticleFavoriteModal } from '../index';

const ArticleCard = ({slug, title, description, favoritesCount, author, favorited, navigateArticleViewHandler, navigateArticleEditHandler, deleteArticle, favoriteArticle}) => {
    const [favorite, setFavorite] = useState(favorited);

    const [showFavoriteArticle, setShowFavoriteArticle] = useState(false); 

    const safeDescription = description || '';
    
    const shortDescription = (safeDescription.length > 50) ? `${safeDescription.slice(0, 50)}...` : safeDescription;

    const safeTitle = title || '';

    const shortTitle = (safeTitle.length > 30) ? `${safeTitle.slice(0, 30)}...` : safeTitle;

    const {loggedIn, user} = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const favoriteHandler = () => {
        setFavorite((prevState) => {
            return !prevState;
        });

        if (user && loggedIn) {
            if (favorite) {
                alert(`You've unfavorited ${author.username.charAt(0).toUpperCase()}${author.username.slice(1)}'s article`);
            } else {
                alert(`You've favorited ${author.username.charAt(0).toUpperCase()}${author.username.slice(1)}'s article`);
            }
        }
    }

    const showFavoriteArticleHandler = () => {
        setShowFavoriteArticle((prevState) => {
            return !prevState;
        });
    }

    const loginHandler = () => {
        navigate('/login');
    }

    return (
        <div className='col'>
            <div className='card shadow-sm h-100'>
                <svg
                    className='bg-placeholder-img card-img-top'
                    width={'100%'}
                    height={'200'}
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    aria-label='Placeholder: Thumbnail'
                    preserveAspectRatio='xMidYMid slice'
                    focusable='false'
                >
                    <title>Placeholder</title>
                    <rect width={'100%'} height={'100%'} fill='#55595c'></rect>
                    <text 
                        x={'50%'} y={'50%'} 
                        fill='#eceeef' 
                        dy={'0.3em'} 
                        textAnchor="middle" dominantBaseline="middle"
                    >
                        Thumbnail
                    </text>
                </svg>
                <div className='card-body'>
                    <h5 className='card-title fs-5 m-0'>{shortTitle}</h5>
                    <p className='card-text mt-3'>
                        {shortDescription}
                    </p>
                </div>
                <div className='card-footer d-flex justify-content-between flex-column gap-3 p-3'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='btn-group w-25'>
                            <button
                                type='button'
                                className='btn btn-sm btn-success'
                                onClick={() => navigateArticleViewHandler(slug)}
                            >
                                <div className='d-flex align-items-center justify-content-center'>
                                    <span className='me-2'>View</span>
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path>
                                        <path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
                                    </svg>
                                </div>
                            </button>
                            {(
                                () => {
                                    if (loggedIn && user.username === author.username) {
                                        return (
                                            <>
                                                <button
                                                    type='button'
                                                    className='btn btn-sm btn-secondary'
                                                    onClick={() => navigateArticleEditHandler(slug)}
                                                >
                                                    <div className='d-flex align-items-center justify-content-center'>
                                                        <span className='me-2'>Edit</span>
                                                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" viewBox="0 0 24 24" >
                                                            <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path>
                                                            <path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <button
                                                    type='button'
                                                    className='btn btn-sm btn-danger'
                                                    onClick={() => deleteArticle(slug)}
                                                >
                                                    <div className='d-flex align-items-center justify-content-center'>
                                                        <span className='me-2'>Delete</span>
                                                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" viewBox="0 0 24 24" >
                                                            <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
                                                            <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            </>
                                        );
                                    } else {
                                        return '';
                                    }
                                }
                            )()}
                            <button
                                type='button'
                                className='btn btn-sm btn-info'
                                onClick={() => {
                                    if (!loggedIn) {
                                        showFavoriteArticleHandler();

                                        return;
                                    }

                                    favoriteArticle(slug, favorited)
                                    favoriteHandler()
                                }}
                            >
                                <div className='d-flex align-items-center justify-content-center'>
                                    <span className='me-2'>Like</span>
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M20 8h-5.61l1.12-3.37c.2-.61.1-1.28-.27-1.8-.38-.52-.98-.83-1.62-.83h-1.61c-.3 0-.58.13-.77.36L6.54 8H4.01c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13.31a2 2 0 0 0 1.87-1.3l2.76-7.35c.04-.11.06-.23.06-.35v-2c0-1.1-.9-2-2-2ZM6 19H4v-9h2zm14-7.18L17.31 19H8V9.36L12.47 4h1.15l-1.56 4.68a1.01 1.01 0 0 0 .95 1.32h7v1.82Z"></path>
                                    </svg>
                                </div>
                            </button>
                            <ArticleFavoriteModal 
                                open={showFavoriteArticle}
                                onClose={showFavoriteArticleHandler}
                                loginHandler={loginHandler}
                            />
                        </div>
                        {
                            favorited ? (
                                <div className='d-flex align-items-center justify-content-between gap-2 bg-body border rounded px-2 py-1'>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <span>{favoritesCount}</span>
                                </div>
                            ) : (
                                <div className='d-flex align-items-center justify-content-between gap-2 bg-body border rounded px-2 py-1'>
                                    <i className="bi bi-star"></i>
                                    <span>{favoritesCount}</span>
                                </div>
                            )
                        }
                    </div>
                    <hr className='m-0' />
                    <div className='d-flex gap-2'>
                        <div 
                            style={{width: 25, height: 25, fontSize: 14}} 
                            className='d-flex align-items-center justify-content-center text-white border-0 rounded-5 bg-secondary'
                        >
                            {author.username[0].toUpperCase()}
                        </div>
                        <Link to={`/profiles/${author.username}`} className='text-muted text-decoration-none fw-semibold text-capitalize'>{author.username}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;