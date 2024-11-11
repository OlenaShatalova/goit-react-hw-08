export const handlePending = state => {
  state.loading = true;
};

export const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};
