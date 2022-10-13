import { createSlice } from '@reduxjs/toolkit';
import {
  authRegister,
  authLogIn,
  authLogOut,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authRegister.pending](state, action) {
      console.log('authRegister.pending: ', action);
    },
    [authRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authRegister.rejected](state, action) {
      console.log('authRegister.rejected: ', action);
    },
    [authLogIn.pending](state, action) {
      console.log('authLogIn.pending: ', action);
    },
    [authLogIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authLogIn.rejected](state, action) {
      console.log('authLogIn.rejected: ', action);
    },
    [authLogOut.pending](state, action) {
      console.log('authLogOut.pending: ', action);
    },
    [authLogOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authLogOut.rejected](state, action) {
      console.log('authLogOut.rejected: ', action);
    },
    [fetchCurrentUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
