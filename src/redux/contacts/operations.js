import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';
//https:connections-api.goit.global/

export const fetchContacts = createAsyncThunk(
  // результат = асинхронний action
  'contacts/fetchAll', //  type майбутнього action, до якого буде додано /pending, потім /fulfilled або /rejected
  async (_, thunkAPI) => {
    ///Колбек функція, в якій виконується запит,
    ///називається payloadCreator і відповідає за
    ///складання значення властивості payload.
    ///Вона буде викликана з двома аргументами: arg та thunkAPI. Перший аргумент — arg (позначений тут як _ оскільки не використовується), це параметр, що може передаватись при виклику fetchContacts.
    // Другий аргумент — thunkAPI, {}, який надає допоміжні функції для роботи з дією.
    try {
      const res = await axios.get('/contacts');
      console.log('contacts-operations', res);

      return res.data; // повертає отримані дані у вигляді payload, що буде доступний в обробниках дії в Redux.
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', contact);
      console.log('contacts-add', res);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      console.log('contacts-del', res);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
