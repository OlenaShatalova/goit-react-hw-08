import { createSelector } from '@reduxjs/toolkit';

export const selectContactsList = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilterName = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilterName],
  (contacts, filter) => {
    return contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      .toSorted((f, s) => f.name.localeCompare(s.name));
  }
);
