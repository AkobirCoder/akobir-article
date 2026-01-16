import React from 'react';

const ArticleCard = ({title, description, author}) => {
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
                    <h5 className='card-title fs-5 m-0'>{title}</h5>
                    <p className='card-text mb-3'>
                        {description} {/* Descriptionni qisqartirish (...) qilib */}
                    </p>
                </div>
                <div className='card-footer d-flex align-items-center justify-content-between'>
                    <div className='btn-group'>
                        <button type='button' className='btn btn-sm btn-outline-success'>
                            View
                        </button>
                        <button type='button' className='btn btn-sm btn-outline-secondary'>
                            Edit
                        </button>
                        <button type='button' className='btn btn-sm btn-outline-danger'>
                            Delete
                        </button>
                    </div>
                    <small className='text-muted fw-semibold text-capitalize'>{author.username}</small>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;