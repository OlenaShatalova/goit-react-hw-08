import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contactsSlice';
import { filters } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts,
    filters,
  },
});
