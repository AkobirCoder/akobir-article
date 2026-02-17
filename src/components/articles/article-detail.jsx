import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { ArrowToRight } from '@boxicons/react';
import { 
    getArticleDetailFailure, 
    getArticleDetailStart, 
    getArticleDetailSuccess 
} from '../../slice/article';
import ArticleService from '../../service/article';
import { Loader } from '../../ui/index';

const ArticleDetail = () => {
    const {slug} = useParams();

    const dispatch = useDispatch();

    const {loggedIn} = useSelector((state) => state.auth);

    const {articleDetail} = useSelector((state) => state.article);

    const navigate = useNavigate();

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart());
            
            try {
                const response = await ArticleService.getArticleDetail(slug);
                
                dispatch(getArticleDetailSuccess(response.article));

                // console.log(response.article);
            } catch (error) {
                dispatch(getArticleDetailFailure());
            }
        }

        getArticleDetail();
    }, [slug, dispatch]);

    const navigateArticles = () => {
        navigate('/articles');
    }

    const navigateUserArticles = () => {
        if (loggedIn) {
            navigate('/my-articles');
        } else {
            navigate('/login');
        }
    }

    return (
        <>
            {(
                () => {
                    if (!articleDetail) {
                        return (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <Loader />
                            </div>
                        );
                    }  else {
                        return (
                            <div className="p-3 p-md-5 bg-body-tertiary rounded-3"> 
                                <div className="container-fluid py-3 py-md-4"> 
                                    <h1 className="display-md-5 fw-semibold">{articleDetail.title}</h1> 
                                    <p className="col-md-8 fs-md-5 mb-0 mb-md-3">{articleDetail.description}</p>
                                    <div className='d-flex justify-content-start gap-5 mt-3 mt-md-4'>
                                        <div>
                                            <p className='text-muted'>
                                                <span className='fw-semibold'>Created date: </span>
                                                {moment(articleDetail.createdAt).format('Do MMM, YYYY')}
                                            </p>
                                            <p className='text-muted'>
                                                <span className='fw-semibold'>Updated date: </span>
                                                {moment(articleDetail.updatedAt).format('Do MMM, YYYY')}
                                            </p>
                                        </div>
                                        <div className='text-capitalize text-muted'>
                                            <p><span className='fw-semibold'>Author: </span>{articleDetail.author.username}</p>
                                        </div>
                                    </div>
                                    <div className='col col-md-8 d-flex'>
                                        <div className='row g-0 border rounded overflow-hidden flex-column-reverse flex-md-row mb-4 shadow-lg h-md-250 position-relative'>
                                            <div className='col-12 col-sm-8 p-3 p-md-4 d-flex flex-column position-static'>
                                                <strong className='d-inline-block mb-2 text-primary text-uppercase'>
                                                    {articleDetail.author.username}
                                                </strong>
                                                <p className='card-text mb-auto'>
                                                    {articleDetail.author.bio}
                                                </p>
                                            </div>
                                            <div className='col-12 col-sm-4'>
                                                <svg
                                                    className='bg-placeholder-img'
                                                    width={'100%'}
                                                    height={'100%'}
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
                                                        fill='#fff' 
                                                        className='fs-2 text-uppercase p-0 m-0'
                                                        textAnchor="middle" dominantBaseline="middle"
                                                    >
                                                        {articleDetail.author.username[0]}
                                                    </text>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign: 'justify'}}>{articleDetail.body}</div>
                                    <div className='row mt-4 mt-md-5'>
                                        <div className='col-12 col-md-3 mb-2 mb-md-0'>
                                            <button 
                                                style={{backgroundImage: 'var(--bs-gradient)'}}
                                                className='btn btn-primary w-100' 
                                                onClick={navigateArticles}
                                            >
                                                <span className='me-2'>Back to articles</span>
                                                <ArrowToRight />
                                            </button>
                                        </div>
                                        <div className='col-12 col-md-3'>
                                            <button 
                                                style={{backgroundImage: 'var(--bs-gradient)'}}
                                                className='btn btn-secondary w-100' 
                                                onClick={navigateUserArticles}
                                            >
                                                <span className='me-2'>Back to my articles</span>
                                                <ArrowToRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            )()}
        </>
    );
}

export default ArticleDetail;