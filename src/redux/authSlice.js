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
  isLoadingLogIn: false,
  isLoadingLogOut: false,
  isLoadingRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authRegister.pending](state, action) {
      state.isLoadingRegister = true;
    },
    [authRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoadingRegister = false;
    },
    [authRegister.rejected](state, action) {
      state.isLoadingRegister = false;
    },
    [authLogIn.pending](state, action) {
      state.isLoadingLogIn = true;
    },
    [authLogIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoadingLogIn = false;
    },
    [authLogIn.rejected](state, action) {
      console.log('state: ', state);
      console.log('action: ', action);
      state.isLoadingLogIn = false;
    },
    [authLogOut.pending](state, action) {
      state.isLoadingLogOut = true;
    },
    [authLogOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoadingLogOut = false;
    },
    [authLogOut.rejected](state, action) {
      state.isLoadingLogOut = false;
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
