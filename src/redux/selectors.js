import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.items;

export const selectFilters = state => state.filter;

export const selectFilterContacts = createSelector(
  [selectItems, selectFilters],
  ({ contacts }, filter) => {
    const normalizedFilter = filter.search.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
