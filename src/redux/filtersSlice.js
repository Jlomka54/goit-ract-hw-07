import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filter: "",
};

export const filterSlise = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const filterReducer = filterSlise.reducer;
export const { setFilter } = filterSlise.actions;
