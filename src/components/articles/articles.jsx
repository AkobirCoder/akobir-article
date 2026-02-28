import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArticleCard } from '../index';
import { Loader } from '../../ui/index';
import {
    deleteArticleFailure, 
    deleteArticleStart, 
    deleteArticleSuccess, 
    getArticlesStart, 
    getArticlesSuccess, 
    postArticleFavoriteFailure, 
    postArticleFavoriteStart,
    postArticleFavoriteSuccess
} from '../../slice/article';
import ArticleService from '../../service/article';

const Articles = () => {
    const dispatch = useDispatch();

    const {loggedIn} = useSelector((state) => state.auth);

    const {articles, isLoading, articlesCount} = useSelector((state) => state.article);

    const navigate = useNavigate();

    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);

    const currentPage = Number(searchParams.get('page')) || 1;

    const author = searchParams.get('author');

    const pageSize = loggedIn ? 18 : 20;

    const navigateArticleViewHandler = (item) => {
        navigate(`/view-article/${item}`);
    }

    const navigateArticleEditHandler = (item) => {
        navigate(`/edit-article/${item}`);
    }

    const getArticles = async (page) => {
        dispatch(getArticlesStart());

        try {
            const offset = (page - 1) * pageSize;

            const response = author
            ? await ArticleService.getArticlesByAuthor(author, pageSize, offset)
            : await ArticleService.getArticles(pageSize, offset);

            dispatch(getArticlesSuccess(response));
        } catch (error) {
            console.log(error);
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

            getArticles();
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

            getArticles();
        } catch (error) {
            dispatch(postArticleFavoriteFailure());
        }
    }

    useEffect(() => {
        getArticles(currentPage);
    }, [author, currentPage, pageSize]);

    return (
        <>
            {(
                () => {
                    if (isLoading) {
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
                                    <h1 className='text-white fw-normal'>
                                        {
                                            author 
                                            ? `${author.charAt(0).toUpperCase()}${author.slice(1)}'s articles` 
                                            : 'Our latest articles'
                                        }
                                    </h1>
                                    <p className='text-white lh-5'>
                                        {
                                            author
                                            ? ''
                                            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero iste natus maxime delectus tempora sapiente explicabo facilis nostrum eius. Voluptatum dignissimos cupiditate aut alias ullam, blanditiis magni dolores optio?   '
                                        }
                                    </p>
                                </div>
                                <div className={`
                                    row ${loggedIn 
                                    ? 'row-cols-1 row-cols-md-3' 
                                    : 'row-cols-1 row-cols-md-4'} 
                                    g-3`}
                                >
                                    {
                                        articles.map((item) => {
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
                                <ul className="pagination justify-content-center mt-4">

                                    {/* ← Previous */}
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => {
                                                if (currentPage === 1) return;
                                                const params = new URLSearchParams(location.search);
                                                params.set('page', currentPage - 1);
                                                navigate(`?${params.toString()}`);
                                            }}
                                        >
                                            &laquo;
                                        </button>
                                    </li>

                                    {/* numbers */}
                                    {visiblePages.map((pageNum) => (
                                        <li
                                            key={pageNum}
                                            className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => {
                                                    const params = new URLSearchParams(location.search);
                                                    params.set('page', pageNum);
                                                    navigate(`?${params.toString()}`);
                                                }}
                                            >
                                                {pageNum}
                                            </button>
                                        </li>
                                    ))}

                                    {/* → Next */}
                                    <li
                                        className={`page-item ${
                                            currentPage === totalPages ? 'disabled' : ''
                                        }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => {
                                                if (currentPage === totalPages) return;
                                                const params = new URLSearchParams(location.search);
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

export default Articles;