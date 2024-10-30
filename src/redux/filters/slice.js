import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    sort: 'default',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    changeSortType(state, action) {
      state.sort = action.payload;
    },
  },
});

export const filters = slice.reducer;

export const { changeFilter, changeSortType } = slice.actions; // {type: filters/changeFilter, payload: "new (state.name)"}
