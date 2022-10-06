import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from 'redux/filtersSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from 'redux/contactsSlice';

const store = configureStore({
  reducer: {
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
