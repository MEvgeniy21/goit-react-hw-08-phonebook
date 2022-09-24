import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = { search: '' };

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setSearchFilter(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearchFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
