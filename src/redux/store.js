import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from 'redux/filtersSlice';
import { authReducer } from 'redux/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from 'redux/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filter: filtersReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],

  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   contactApi.middleware,
  // ],
});

// export default store;

setupListeners(store.dispatch);

export const persistor = persistStore(store);
