import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
