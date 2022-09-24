import { createSlice, nanoid } from '@reduxjs/toolkit';

const LS_KEY = 'contacts';

const contactsInitialState = () => {
  const dataContactsFromLS = JSON.parse(localStorage.getItem(LS_KEY));

  if (dataContactsFromLS) {
    return dataContactsFromLS;
  }
  return [];
};

const checkExistingName = ({ state, newName }) => {
  return state.find(
    contact => contact.name.toLowerCase() === newName.toLowerCase()
  );
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
        const newName = action.payload.name;
        const existName = checkExistingName({ state, newName });
        if (existName) {
          alert(`${newName} is already in contacts`);
          return;
        }
        state.push(action.payload);
        setLS(state);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name: name.trim(),
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
