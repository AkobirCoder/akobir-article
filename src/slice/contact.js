import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    success: false,
    error: null,
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState: initialState,
    reducers: {
        contactMessageStart: (state) => {
            state.isLoading = true;
        },
        contactMessageSuccess: (state) => {
            state.isLoading = false;
            state.success = true;
        },
        contactMessageFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export const {
    contactMessageStart,
    contactMessageSuccess,
    contactMessageFailure,
} = contactSlice.actions;

export default contactSlice.reducer;