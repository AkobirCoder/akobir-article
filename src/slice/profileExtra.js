import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    profileExtra: {
        image: '',
        birthDate: '',
        phone: '',
        field: '',
        bio: '',
        study: '',
        socials: {
            telegram: '',
            instagram: '',
            linkedin: '',
            github: '',
        }
    },
    isSaving: false,
    error: null,
}

export const profileExtraSlice = createSlice({
    name: 'profileExtra',
    initialState: initialState,
    reducers: {
        saveProfileExtraStart: (state) => {
            state.isSaving = true;
        },
        saveProfileExtraSuccess: (state, action) => {
            state.isSaving = false;
            state.profileExtra = {
                ...state.profileExtra,
                ...action.payload,
                socials: {
                    ...state.profileExtra.socials,
                    ...action.payload.socials
                },
            };
        },
        saveProfileExtraFailure: (state, action) => {
            state.isSaving = false;
            state.error = action.payload;
        },

        clearProfileExtra: (state) => {
            state.profileExtra = {
                image: '',
                birthDate: '',
                phone: '',
                field: '',
                bio: '',
                study: '',
                socials: {
                    telegram: '',
                    instagram: '',
                    linkedin: '',
                    github: '',
                }
            }
        }
    }
});

export const {
    saveProfileExtraStart, 
    saveProfileExtraSuccess, 
    saveProfileExtraFailure,
    clearProfileExtra
} = profileExtraSlice.actions;

export default profileExtraSlice.reducer;