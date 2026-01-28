import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    profileExtra: {
        image: '',
        birthYear: '',
        phone: '',
        field: '',
        description: '',
        study: '',
        socials: {
            telegram: '',
            instagram: '',
            linkedin: '',
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
        saveprofileExtraSuccess: (state, action) => {
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
        }
    }
});

export const {saveProfileExtraStart, saveprofileExtraSuccess, saveProfileExtraFailure} = profileExtraSlice.actions;

export default profileExtraSlice.reducer;