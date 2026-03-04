import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader } from '../../ui/index';
import { 
    deleteArticleFailure, 
    deleteArticleStart, 
    deleteArticleSuccess, 
    getArticlesFeedFailure, 
    getArticlesFeedStart, 
    getArticlesFeedSuccess, 
    postArticleFavoriteFailure, 
    postArticleFavoriteStart, 
    postArticleFavoriteSuccess 
} from '../../slice/article';
import ArticleService from '../../service/article';
import { getItem } from '../../helpers/persistance-storage';
import { ArticleCard } from '../index';

const ArticleFeed = () => {
    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.auth);

    const {loggedIn} = useSelector((state) => state.auth);

    const {isLoading, feedArticles, articlesCount} = useSelector((state) => state.article);

    const navigate = useNavigate();

    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const currentPage = Number(params.get('page') || 1);

    const pageSize = loggedIn ? 18 : 20;

    const navigateArticleViewHandler = (item) => {
        navigate(`/view-article/${item}`);
    }

    const navigateArticleEditHandler = (item) => {
        navigate(`/edit-article/${item}`);
    }

    const getFeedArticles = async (page) => {
        dispatch(getArticlesFeedStart());

        try {
            const offset = (page - 1) * pageSize;

            const response = await ArticleService.getFeedArticles(pageSize, offset);

            dispatch(getArticlesFeedSuccess(response));
        } catch (error) {
            dispatch(getArticlesFeedFailure(error.response.data.errors));
        }
    }

    const totalPages = Math.ceil(articlesCount / pageSize);

    const maxVisible = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));

    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
        endPage = totalPages;

        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    const visiblePages = [];

    for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
    }

    const deleteArticle = async (slug) => {
        dispatch(deleteArticleStart());

        try {
            const response = await ArticleService.deleteArticle(slug);

            dispatch(deleteArticleSuccess(response));

            getFeedArticles(currentPage);
        } catch (error) {
            dispatch(deleteArticleFailure());

            // console.log(error);
        }
    }

    const favoriteArticle = async (slug, isFavorited) => {
        dispatch(postArticleFavoriteStart());

        try {
            const response = isFavorited
            ? await ArticleService.deleteArticleFavorite(slug)
            : await ArticleService.postArticleFavorite(slug);

            dispatch(postArticleFavoriteSuccess(response));

            getFeedArticles(currentPage);
        } catch (error) {
            dispatch(postArticleFavoriteFailure());
        }
    }

    useEffect(() => {
        const token = getItem('token');

        if (!token) {
            navigate('/login');
        }

        getFeedArticles(currentPage);
    }, [navigate, currentPage, pageSize]);

    return (
        <>
            {(
                () => {
                    if (!user || isLoading) {
                        return (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <Loader />
                            </div>
                        );
                    } else {
                        return (
                            <div className='album'>
                                <div 
                                    style={{backgroundImage: 'var(--bs-gradient)'}}
                                    className='d-flex d-md-block justify-content-center bg-primary rounded border-bottom-0 p-4 p-md-5 mb-3'
                                >
                                    <h1 className='text-white fw-semibold fs-3 m-0'>My subscriptions articles</h1>
                                </div>
                                <div className='row row-cols-1 row-cols-md-3 g-3'>
                                    {
                                        feedArticles.map((item) => {
                                            return (
                                                <ArticleCard 
                                                    key={item.id}
                                                    {...item}
                                                    navigateArticleViewHandler={navigateArticleViewHandler} 
                                                    navigateArticleEditHandler={navigateArticleEditHandler}
                                                    deleteArticle={deleteArticle} 
                                                    favoriteArticle={favoriteArticle}
                                                />
                                            );
                                        })
                                    }
                                </div>
                                <ul className='pagination justify-content-center mt-4'>
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button
                                            className='page-link'
                                            onClick={() => {
                                                if (currentPage === 1) return;

                                                params.set('page', currentPage - 1);

                                                navigate(`?${params.toString()}`);
                                            }}
                                        >
                                            &laquo;
                                        </button>
                                    </li>
                                    {
                                        visiblePages.map((pageNum) => {
                                            return (
                                                <li
                                                    key={pageNum} 
                                                    className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
                                                >
                                                    <button
                                                        className='page-link'
                                                        onClick={() => {
                                                            params.set('page', pageNum);

                                                            navigate(`?${params.toString()}`);
                                                        }}
                                                    >
                                                        {pageNum}
                                                    </button>
                                                </li>
                                            );
                                        })
                                    }
                                    <li
                                        className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                                    >   
                                        <button 
                                            className='page-link'
                                            onClick={() => {
                                                if (currentPage === totalPages) return;

                                                params.set('page', currentPage + 1);

                                                navigate(`?${params.toString()}`);
                                            }}
                                        >
                                            &raquo;
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        );
                    }
                }
            )()}
        </>
    );
}

export default ArticleFeed;