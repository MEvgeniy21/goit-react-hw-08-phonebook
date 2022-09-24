import { createSlice, nanoid } from '@reduxjs/toolkit';

const LS_KEY = 'contacts';

const contactsInitialState = () => {
  const dataContactsFromLS = JSON.parse(localStorage.getItem(LS_KEY));

  if (dataContactsFromLS) {
    return dataContactsFromLS;
  }
  return [];
};

const setLS = state => {
  localStorage.setItem(LS_KEY, JSON.stringify(state));
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
        setLS(state);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContacts(state, action) {
      const newState = state.filter(contact => contact.id !== action.payload);
      setLS(newState);
      return newState;
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
