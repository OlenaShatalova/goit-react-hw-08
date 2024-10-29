import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filters = slice.reducer;

export const { changeFilter } = slice.actions; // {type: filters/changeFilter, payload: "new (state.name)"}
