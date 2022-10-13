import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from 'redux/filtersSlice';
import { authReducer } from 'redux/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from 'redux/contactsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filtersReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;

setupListeners(store.dispatch);
