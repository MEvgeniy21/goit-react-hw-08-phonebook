import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlice';
import { filtersReducer } from 'redux/filtersSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export default configureStore({
  reducer: { items: contactsReducer, filter: filtersReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
