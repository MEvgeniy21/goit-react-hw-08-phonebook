import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const contactsInitialState = {
  items: [],
  isLoadingGet: false,
  isLoadingAdd: false,
  loadingDel: [],
  loadingEdit: [],
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoadingGet = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoadingGet = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoadingGet = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoadingAdd = true;
    },

    [addContact.fulfilled](state, action) {
      state.isLoadingAdd = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoadingAdd = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state, action) {
      state.loadingDel.push(action.meta.arg);
    },
    [deleteContact.fulfilled](state, action) {
      const idxLoad = state.loadingDel.findIndex(
        item => item.id === action.payload.id
      );
      state.loadingDel.splice(idxLoad, 1);
      state.error = null;
      const idxState = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(idxState, 1);
    },
    [deleteContact.rejected](state, action) {
      const idxLoad = state.loadingDel.findIndex(
        item => item.id === action.payload.id
      );
      state.loadingDel.splice(idxLoad, 1);
      state.error = action.payload;
    },
    [editContact.pending](state, action) {
      state.loadingEdit.push(action.meta.arg.id);
    },
    [editContact.fulfilled](state, action) {
      const idxLoad = state.loadingEdit.findIndex(
        item => item.id === action.payload.id
      );
      state.loadingEdit.splice(idxLoad, 1);
      state.error = null;
      const idxState = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(idxState, 1, action.payload);
    },
    [editContact.rejected](state, action) {
      const idxLoad = state.loadingEdit.findIndex(
        item => item.id === action.payload.id
      );
      state.loadingEdit.splice(idxLoad, 1);
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
