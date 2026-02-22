import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from './auth';

const initialState = {
    isLoading: false,
    users: [],
    error: null,
}

export const followingSlice = createSlice({
    name: 'following',
    initialState: initialState,
    reducers: {
        getFollowingUserStart: (state) => {
            state.isLoading = true;
        },
        getFollowingUserSuccess: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        getFollowingUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(logoutUser, (state) => {
            state.users = [];
        });
    }
});

export const {
    getFollowingUserStart,
    getFollowingUserSuccess,
    getFollowingUserFailure
} = followingSlice.actions;

export default followingSlice.reducer;