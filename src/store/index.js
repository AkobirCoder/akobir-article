import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../slice/auth';
import ArticleReducer from '../slice/article';
import ProfileReducer from '../slice/profile';
import FollowingReducer from '../slice/following';
import ProfileExtraReducer from '../slice/profileExtra';
import ContactReducer from '../slice/contact';

export default configureStore({
    reducer: {
        auth: AuthReducer,
        article: ArticleReducer,
        profile: ProfileReducer,
        following: FollowingReducer,
        profileExtra: ProfileExtraReducer,
        contact: ContactReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});