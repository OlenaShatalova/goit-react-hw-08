import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    sort: 'default',
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.name = payload;
    },
    changeSortType(state, { payload }) {
      state.sort = payload;
    },
  },
});

export const filters = slice.reducer;

export const { changeFilter, changeSortType } = slice.actions; // {type: filters/changeFilter, payload: "new (state.name)"}
