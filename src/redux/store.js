import { configureStore } from '@reduxjs/toolkit';
import { auth } from './auth/slice';
import { contacts } from './contacts/slice';
import { filters } from './filters/slice';

export const store = configureStore({
  reducer: {
    auth,
    contacts,
    filters,
  },
});
