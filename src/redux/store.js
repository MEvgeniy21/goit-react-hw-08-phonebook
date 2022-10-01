import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlice';
import { filtersReducer } from 'redux/filtersSlice';

export default configureStore({
  reducer: { contacts: contactsReducer, filter: filtersReducer },
});
