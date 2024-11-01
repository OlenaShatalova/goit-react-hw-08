import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://671f3bcae7a5792f052d71c7.mockapi.io';
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
      const response = await axios.get('/contacts');
      return response.data; // повертає отримані дані у вигляді payload, що буде доступний в обробниках дії в Redux.
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
