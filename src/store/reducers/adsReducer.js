import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    ads: []
}

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
    setAds: (state, {payload}) => {
        state.ads = payload;
    },
    resetAds: (state) => {
        state.ads = [];
    }
    }
});
export const adsReducer = adsSlice.reducer;
export const {setAds, resetAds } = adsSlice.actions;
