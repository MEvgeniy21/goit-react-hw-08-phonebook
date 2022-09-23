import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = () => {
  const dataContactsFromLS = JSON.parse(localStorage.getItem('contacts'));

  if (dataContactsFromLS) {
    return dataContactsFromLS;
  }
  return [];
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: contactsInitialState,
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
