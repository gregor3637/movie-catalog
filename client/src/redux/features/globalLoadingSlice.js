import { createSlice } from "@reduxjs/toolkit";

export const globalLoadingSlice = createSlice({
  name: "GlobalLoading ",
  initialState: {
    globalLoadingOpen: false,
  },
  reducers: {
    setGlobalLoading: (state, action) => {
      state.globalLoadingOpen = action.payload;
    },
  },
});

export const { setGlobalLoading } = globalLoadingSlice.actions;

export default globalLoadingSlice.reducer;
