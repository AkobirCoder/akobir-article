import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    profileExtra: {
        image: '',
        username: '',
        fullname: '',
        pronoun: '',
        birthDate: '',
        phone: '',
        field: '',
        description: '',
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
        putProfileExtraStart: (state) => {
            state.isSaving = true;
        },
        putProfileExtraSuccess: (state, action) => {
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
        putProfileExtraFailure: (state, action) => {
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
    putProfileExtraStart, 
    putProfileExtraSuccess, 
    putProfileExtraFailure,
    clearProfileExtra
} = profileExtraSlice.actions;

export default profileExtraSlice.reducer;