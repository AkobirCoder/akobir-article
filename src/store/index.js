import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from '../slice/auth';
import ArticleReducer from '../slice/article';
import ProfileExtraReducer from '../slice/profileExtra';

export default configureStore({
    reducer: {
        auth: AuthReducer,
        article: ArticleReducer,
        profileExtra: ProfileExtraReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});