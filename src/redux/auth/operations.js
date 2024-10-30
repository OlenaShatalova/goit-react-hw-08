import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'auth/register',
  async (_, thunkAPI) => {
    try {
      console.log('register');
      // const response = await axios.get('/contacts');
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (_, thunkAPI) => {
  try {
    console.log('login');
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    console.log('logout');
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    try {
      console.log('refreshUser');
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
