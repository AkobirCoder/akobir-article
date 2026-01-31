import {createSlice} from '@reduxjs/toolkit';
import { setItem } from '../helpers/persistance-storage';

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        signUserStart: (state) => {
            state.isLoading = true;
        },
        signUserSuccess: (state, action) => {
            state.loggedIn = true;
            state.isLoading = false;
            state.user = action.payload;
            setItem('token', action.payload.token);
        },
        signUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        
        userDetailStart: (state) => {
            state.isLoading = true;
        },
        userDetailSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        userDetailFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        
        logoutUser: (state) => {
            state.user = null;
            state.loggedIn = false;
        },

        putUserStart: (state) => {
            state.isLoading = true;
        },
        putUserSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        putUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {
    signUserStart, 
    signUserSuccess, 
    signUserFailure, 
    logoutUser, 
    userDetailStart, 
    userDetailSuccess, 
    userDetailFailure,
    putUserStart,
    putUserSuccess,
    putUserFailure,
} = authSlice.actions;

export default authSlice.reducer;