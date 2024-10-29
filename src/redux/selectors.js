import { createSelector } from '@reduxjs/toolkit';

export const selectContactsList = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilterName = state => state.filters.name;
export const selectSortType = state => state.filters.sort;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilterName, selectSortType],
  (contacts, filter, sort) => {
    const arr = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    switch (sort) {
      case 'alphabetical':
        return arr.toSorted((f, s) => f.name.localeCompare(s.name));
      case 'reverse':
        return arr.toSorted((f, s) => s.name.localeCompare(f.name));
      default:
        return arr;
    }
  }
);
