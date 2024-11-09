import { createSelector } from '@reduxjs/toolkit';
import { selectContactsList } from '../contacts/selectors';

export const selectFilterName = state => state.filters.name;

export const selectSortType = state => state.filters.sort;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilterName, selectSortType],
  (contacts, filter, sort) => {
    const arr = contacts.filter(({ name, number }) =>
      `${name} ${number}`.toLowerCase().includes(filter.toLowerCase().trim())
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
