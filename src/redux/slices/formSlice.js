import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        values: {},
    },
    reducers: {
        setFormValues: (state, action) => {
            state.values = { ...state.values, ...action.payload };
        },
    },
});

export const { setFormValues } = formSlice.actions;
