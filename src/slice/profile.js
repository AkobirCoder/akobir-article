import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from './auth';

const initialState = {
    isLoading: false,
    followLoading: false,
    profile: null,
    error: null,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        getProfileStart: (state) => {
            state.isLoading = true;
        },
        getProfileSuccess: (state, action) => {
            state.isLoading = false;
            state.profile = action.payload;
        },
        getProfileFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        postFollowProfileStart: (state) => {
            state.isLoading = true;
            state.followLoading = true;
        },
        postFollowProfileSuccess: (state, action) => {
            state.isLoading = false;
            state.followLoading = false;
            state.profile = action.payload;
        },
        postFollowProfileFailure: (state, action) => {
            state.isLoading = false;
            state.followLoading = false;
            state.error = action.payload;
        },

        deleteFollowProfileStart: (state) => {
            state.isLoading = true;
            state.followLoading = true;
        },
        deleteFollowProfileSuccess: (state, action) => {
            state.isLoading = false;
            state.followLoading = false;
            state.profile = action.payload;
        },
        deleteFollowProfileFailure: (state, action) => {
            state.isLoading = false;
            state.followLoading = false;
            state.error = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(logoutUser, (state) => {
            state.profile = null;
        });
    },
});

export const {
    getProfileStart,
    getProfileSuccess,
    getProfileFailure,
    postFollowProfileStart,
    postFollowProfileSuccess,
    postFollowProfileFailure,
    deleteFollowProfileStart,
    deleteFollowProfileSuccess,
    deleteFollowProfileFailure
} = profileSlice.actions;

export default profileSlice.reducer;