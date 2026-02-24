import React from 'react';
import { useSelector } from 'react-redux';

const ArticleCard = ({title, description, author, slug, navigateArticleViewHandler, navigateArticleEditHandler, deleteArticle}) => {
    const {loggedIn, user} = useSelector((state) => state.auth);

    const safeDescription = description || '';

    const isLongDescription = safeDescription.length > 50;
    
    const shortDescription = isLongDescription ? `${safeDescription.slice(0, 50)}...` : safeDescription;

    const safeTitle = title || '';

    const shortTitle = (safeTitle.length > 30) ? `${safeTitle.slice(0, 30)}...` : safeTitle;

    return (
        <div className='col'>
            <div className='card shadow-sm article-card h-100'>
                <svg
                    className='bg-placeholder-img card-img-top'
                    width={'100%'}
                    height={'200'}
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    aria-label='Placeholder: Thumbnail'
                    preserveAspectRatio='xMidYMid slice'
                    focusable='fale'
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
                <div className='card-footer d-flex align-items-center justify-content-between p-3'>
                    <div className='btn-group'>
                        <button 
                            type='button' 
                            className='btn btn-sm btn-outline-success' 
                            onClick={() => navigateArticleViewHandler(slug)}
                        >
                            View
                        </button>
                        {(
                            () => {
                                if (loggedIn && user.username === author.username) {
                                    return (
                                        <>
                                            <button 
                                                type='button' 
                                                className='btn btn-sm btn-outline-secondary' 
                                                onClick={() => navigateArticleEditHandler(slug)}
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                type='button' 
                                                className='btn btn-sm btn-outline-danger' 
                                                onClick={() => deleteArticle(slug)}
                                            >
                                                Delete
                                            </button>
                                        </>
                                    );
                                } else {
                                    return '';
                                }
                            }
                        )()}
                    </div>
                    <div className='d-flex gap-2'>
                        <div 
                            style={{width: 25, height: 25, fontSize: 14}} 
                            className='d-flex align-items-center justify-content-center text-white border-0 rounded-5 bg-secondary'
                        >
                            {/* <img src={author.image} alt="Author" /> */}
                            {author.username[0].toUpperCase()}
                        </div>
                        <small className='text-muted fw-semibold text-capitalize'>{author.username}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;