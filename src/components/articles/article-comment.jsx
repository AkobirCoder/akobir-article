import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ArticleComment = ({index, id, body, author, deleteArticleComment, articleComments}) => {
    const {loggedIn, user} = useSelector((state) => state.auth);

    return (
        <div 
            className={`
                bg-white border rounded shadow-lg p-3 
                ${index === articleComments.length - 1 ? 'mb-0' : 'mb-3'}
            `}
        >
            <div className='d-flex flex-column gap-3'>
                <div className='d-flex justify-content-between p-3 bg-light border rounded'>
                    <div className='d-flex align-items-center gap-2'>
                        <svg
                            className='bg-placeholder-img'
                            width={'30'}
                            height={'30'}
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
                                {author.username[0]}
                            </text>
                        </svg>
                        <Link 
                            to={`/profiles/${author.username}`} 
                            className='text-muted text-decoration-none fw-semibold m-0'
                        >
                            {author.username}
                        </Link>
                    </div>
                    <div className='d-flex align-items-start'>
                    {
                        loggedIn && author.username === user.username 
                            ? (
                                <button 
                                    className='btn btn-danger p-2'
                                    onClick={() => deleteArticleComment(id)}
                                >
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
                                            <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                        </svg>
                                    </div>
                                </button>
                            )
                            : (
                                ''
                            )   
                        }
                    </div>
                </div>
                <div className='p-3 border rounded'>
                    <p className='text-muted m-0'>{body}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleComment;