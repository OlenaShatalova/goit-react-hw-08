import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    // builder.addCase(register.fulfilled, )
    console.log(builder);
    console.log(slice);
  },
});

export const auth = slice.reducer;
