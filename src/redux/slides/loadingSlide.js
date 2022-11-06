import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const loadingSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
