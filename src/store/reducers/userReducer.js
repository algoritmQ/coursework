import {createSlice} from '@reduxjs/toolkit';

let initialState = {autorized : false, user:{}}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    setAuth: (state, {payload}) => {
        state.autorized = true;
        alert('Авторизован');
    },
    setUser: (state, {payload}) => {
        state.user = payload.data;
        state.autorized = true;
        alert('Юзер');
    },
    logout: (state) => {
        state.autorized = false;
        state.user = {};
        alert('Не авторизован');
    }
    }
});
export const userReducer = userSlice.reducer;
export const {setAuth, setUser, logout} = userSlice.actions;
