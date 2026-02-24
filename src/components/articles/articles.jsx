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

    const {articles, isLoading} = useSelector((state) => state.article);

    const navigate = useNavigate();

    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);

    const author = searchParams.get('author');

    const navigateArticleViewHandler = (item) => {
        navigate(`/view-article/${item}`);
    }

    const navigateArticleEditHandler = (item) => {
        navigate(`/edit-article/${item}`);
    }

    const getArticles = async () => {
        dispatch(getArticlesStart());

        try {
            const response = await ArticleService.getArticles(author);

            dispatch(getArticlesSuccess(response.articles));
        } catch (error) {
            console.log(error);
        }
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
        getArticles();
    }, []);

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
                                            ? `${author.charAt().toUpperCase()}${author.slice(1, author.length)}'s articles` 
                                            : 'Our latest articles'
                                        }
                                    </h1>
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
                            </div>
                        );
                    }
                }
            )()}
        </>
    );
}

export default Articles;