import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
import { handlePending, handleRejected } from '../../util/statusHelper';
import toast from 'react-hot-toast';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      /////
      /////
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.push(payload);
        toast.success('Contact successfully added!');
      })
      .addCase(addContact.rejected, handleRejected)
      /////
      /////
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload: { id } }) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== id);
        toast.error('Contact successfully deleted!');
      })
      .addCase(deleteContact.rejected, handleRejected)
      /////
      /////
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map(contact =>
          payload.id === contact.id ? payload : contact
        );
        toast.success('Contact successfully edited!');
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contacts = slice.reducer; // функція, яка знає, як обробляти всі дії=actions для цього слайсу і оновлювати відповідну частину Redux-стану//
