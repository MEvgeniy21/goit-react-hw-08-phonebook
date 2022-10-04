import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoadingGet = state => state.contacts.isLoadingGet;

export const selectIsLoadingAdd = state => state.contacts.isLoadingAdd;

export const selectLoadingDel = state => state.contacts.loadingDel;

export const selectLoadingEdit = state => state.contacts.loadingEdit;

export const selectError = state => state.contacts.error;

export const selectFilters = state => state.filter;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    const normalizedFilter = filter.search.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
