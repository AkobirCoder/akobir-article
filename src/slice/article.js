import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from './auth';

const initialState = {
    isLoading: false,
    articles: [],
    feedArticles: [],
    articleComments: [],
    articleDetail: null,
    error: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState: initialState,
    reducers: {
        getArticlesStart: (state) => {
            state.isLoading = true;
        },
        getArticlesSuccess: (state, action) => {
            state.isLoading = false;
            state.articles = action.payload;
        },
        getArticlesFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        getArticleDetailStart: (state) => {
            state.isLoading = true;
        },
        getArticleDetailSuccess: (state, action) => {
            state.isLoading = false;
            state.articleDetail = action.payload;
        },
        getArticleDetailFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        postArticleStart: (state) => {
            state.isLoading = true;
        },
        postArticleSuccess: (state) => {
            state.isLoading = false;
        },
        postArticleFailure: (state) => {
            state.isLoading = false;
            state.error = 'Posting error';
        },

        deleteArticleStart: (state) => {
            state.isLoading = true;
        },
        deleteArticleSuccess: (state) => {
            state.isLoading = false;
        },
        deleteArticleFailure: (state) => {
            state.isLoading = false;
            state.error = 'Deleting error';
        },

        putArticleStart: (state) => {
            state.isLoading = true;
        },
        putArticleSuccess: (state) => {
            state.isLoading = false;
        },
        putArticleFailure: (state) => {
            state.isLoading = false;
            state.error = 'Putting error';
        },

        postArticleFavoriteStart: (state) => {
            state.isLoading = true;
        },
        postArticleFavoriteSuccess: (state) => {
            state.isLoading = false;
        },
        postArticleFavoriteFailure: (state) => {
            state.isLoading = false;
            state.error = 'Favoriting error';
        },

        getArticleCommentsStart: (state) => {
            state.isLoading = true;
        },
        getArticleCommentsSuccess: (state, action) => {
            state.isLoading = false;
            state.articleComments = action.payload;
        },
        getArticleCommentsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        postArticleCommentsStart: (state) => {
            state.isLoading = true;
        },
        postArticleCommentsSuccess: (state) => {
            state.isLoading = false;
        },
        postArticleCommentsFailure: (state) => {
            state.isLoading = false;
        },

        getArticlesFeedStart: (state) => {
            state.isLoading = true;
        },
        getArticlesFeedSuccess: (state, action) => {
            state.isLoading = false;
            state.feedArticles = action.payload;
        },
        getArticlesFeedFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(logoutUser, (state) => {
            state.articles = [];
            state.articleDetail = null;
        });
    },
});

export const {
    getArticlesStart, 
    getArticlesSuccess, 
    getArticlesFailure, 
    getArticleDetailStart, 
    getArticleDetailSuccess, 
    getArticleDetailFailure, 
    postArticleStart, 
    postArticleSuccess, 
    postArticleFailure,
    deleteArticleStart,
    deleteArticleSuccess,
    deleteArticleFailure,
    putArticleStart,
    putArticleSuccess,
    putArticleFailure,
    postArticleFavoriteStart,
    postArticleFavoriteSuccess,
    postArticleFavoriteFailure,
    getArticlesFeedStart,
    getArticlesFeedSuccess,
    getArticlesFeedFailure,
    getArticleCommentsStart,
    getArticleCommentsSuccess,
    getArticleCommentsFailure,
    postArticleCommentsStart,
    postArticleCommentsSuccess,
    postArticleCommentsFailure,
} = articleSlice.actions;

export default articleSlice.reducer;