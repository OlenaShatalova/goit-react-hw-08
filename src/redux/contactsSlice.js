import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer; // функція, яка знає, як обробляти всі дії для цього слайсу і оновлювати відповідну частину Redux-стану

export const { addContact, deleteContact } = contactsSlice.actions; // {type: contacts/addContacts, payload: {id,name,number}} ; the same for deleteContacts

export const selectContacts = state => state.contacts.items;
// export const selectFilteredContacts
