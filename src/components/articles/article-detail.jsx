    import React, { useEffect, useState } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { useNavigate, useParams } from 'react-router-dom';
    import moment from 'moment';
    import { ArrowToRight } from '@boxicons/react';
    import { 
        deleteArticleCommentsFailure,
        deleteArticleCommentsStart,
        deleteArticleCommentsSuccess,
        getArticleCommentsFailure,
        getArticleCommentsStart,
        getArticleCommentsSuccess,
        getArticleDetailFailure, 
        getArticleDetailStart, 
        getArticleDetailSuccess, 
        postArticleCommentsFailure, 
        postArticleCommentsStart,
        postArticleCommentsSuccess
    } from '../../slice/article';
    import ArticleService from '../../service/article';
    import { Loader } from '../../ui/index';
    import { ArticleComment, ArticleCommentForm } from '../index';

    const ArticleDetail = () => {
        const [formData, setFormData] = useState({
            commentBody: '',
        });

        const changeHandlerInput = (event) => {
            const {name, value} = event.target;

            setFormData((prevState) => {
                return {
                    ...prevState, [name]: value
                }
            });
        }
        
        const {slug} = useParams();

        const dispatch = useDispatch();

        const {loggedIn, user} = useSelector((state) => state.auth);

        const {articleDetail, isLoading, articleComments} = useSelector((state) => state.article);

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

            const getArticleComment = async () => {
                dispatch(getArticleCommentsStart());

                try {
                    const response = await ArticleService.getArticleComment(slug);

                    dispatch(getArticleCommentsSuccess(response.comments));
                } catch (error) {
                    dispatch(getArticleCommentsFailure(error.response.data.errors));
                }
            }

            getArticleComment();
        }, [slug, dispatch]);

        const formSubmit = async (event) => {
            event.preventDefault();

            dispatch(postArticleCommentsStart());

            const {commentBody} = formData;

            const comment = {body: commentBody}

            try {
                const response = await ArticleService.postArticleComment(slug, comment);

                dispatch(postArticleCommentsSuccess(response));

                const commentsRes = await ArticleService.getArticleComment(slug);

                dispatch(getArticleCommentsSuccess(commentsRes.comments));
            } catch (error) {
                dispatch(postArticleCommentsFailure(error.response.data.errors));
            }

            setFormData(() => {
                return {
                    commentBody: '',
                }
            });
        }

        const deleteArticleComment = async (commentId) => {
            dispatch(deleteArticleCommentsStart());

            try {
                const response = await ArticleService.deleteArticleComment(slug, commentId);

                dispatch(deleteArticleCommentsSuccess(response));

                const commentsRes = await ArticleService.getArticleComment(slug);

                dispatch(getArticleCommentsSuccess(commentsRes.comments));
            } catch (error) {
                dispatch(deleteArticleCommentsFailure(error.response.data.errors));
            }
        }

        const navigateArticles = () => {
            navigate('/articles');
        }

        const navigateUserArticles = () => {
            if (loggedIn) {
                navigate(`/articles?author=${articleDetail.author.username}`);
            } else {
                navigate('/login');
            }
        }

        return (
            <>
                {(
                    () => {
                        if (isLoading || !articleDetail) {
                            return (
                                <div className='d-flex align-items-center justify-content-center h-100'>
                                    <Loader />
                                </div>
                            );
                        }  else {
                            return (
                                <div className="p-3 p-md-5 bg-body-tertiary border rounded"> 
                                    <div className="container-fluid"> 
                                        <div className='offset-md-1'>
                                            <h1 className="display-md-5 fw-semibold">{articleDetail.title}</h1>
                                            <p className="col-md-8 fs-md-5 mb-0 mb-md-3">{articleDetail.description}</p>
                                        </div>
                                        <div className='d-flex justify-content-start offset-md-1 gap-5 mt-3 mt-md-4'>
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
                                        <div className='col-12 col-md-10 d-flex offset-md-1'>
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
                                        <div 
                                            style={{textAlign: 'justify'}} 
                                            className='col-12 col-md-10 bg-white p-3 offset-md-1 rounded shadow-lg'
                                        >
                                            {articleDetail.body}
                                        </div>
                                        <div className='row g-0 my-4 offset-md-1'>
                                            <div className='col-12 col-md-3 mb-2 mb-md-0 me-md-3'>
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
                                                    <span className='me-2'>Go to articles</span>
                                                    <ArrowToRight />
                                                </button>
                                            </div>
                                        </div>
                                        <hr className='m-0' />
                                        <div className='row g-0 mt-4'>
                                            <div className='col-12 col-md-7 offset-md-1'>
                                                <h4>Post comment here</h4>
                                            </div>
                                            <div className='col-12 col-md-7 offset-md-1'>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequatur perferendis eligendi earum fugiat facere sunt expedita sint ut molestiae.</p>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <div className='col-12 col-md-10'>
                                                    <ArticleCommentForm
                                                        formData={formData}
                                                        changeHandlerInput={changeHandlerInput}
                                                        formSubmit={formSubmit}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row g-0 mt-3 d-flex justify-content-center'>
                                            <div 
                                                style={{maxHeight: '100vh'}}
                                                className={`
                                                    col-12 col-md-10 
                                                    bg-secondary-subtle rounded 
                                                    p-3 py-md-4 px-md-5 
                                                    overflow-auto comments
                                                `}
                                            >
                                                {
                                                    articleComments.length === 0
                                                    ? (
                                                        <p style={{fontStyle: 'italic'}} className='text-muted m-0'>
                                                            No comment haven't posted yet
                                                        </p>
                                                    )
                                                    : (
                                                        articleComments.slice().reverse().map((articleComment, index) => {
                                                            return (
                                                                <ArticleComment
                                                                    key={articleComment.id}
                                                                    {...articleComment}
                                                                    index={index}
                                                                    deleteArticleComment={deleteArticleComment}
                                                                    user={user}
                                                                    articleComments={articleComments}
                                                                />
                                                            );
                                                        })
                                                    )
                                                }
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