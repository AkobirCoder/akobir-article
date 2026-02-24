import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from './auth';

const initialState = {
    isLoading: false,
    articles: [],
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
            state.error = 'Deleting error'
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
            // state.articles = action.payload;
        },
        postArticleFavoriteFailure: (state) => {
            state.isLoading = false;
            // state.error = action.payload;
            state.error = 'Favoriting error';
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
} = articleSlice.actions;

export default articleSlice.reducer;