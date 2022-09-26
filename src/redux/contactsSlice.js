import { createSlice, nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'items',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer({ contacts }, action) {
        contacts.push(action.payload);
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
    deleteContacts({ contacts }, action) {
      // return {
      //   ...state,
      //   contacts: state.contacts.filter(
      //     contact => contact.id !== action.payload
      //   ),
      // };

      const index = contacts.findIndex(task => task.id === action.payload);
      contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'items',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, deleteContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
