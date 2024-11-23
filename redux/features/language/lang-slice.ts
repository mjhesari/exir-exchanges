"use client";

// Public imports
import { createSlice } from "@reduxjs/toolkit";

// Import types
import { initialStateTypesLang } from "@/types/language-types";

//* Initial state
const initialState: initialStateTypesLang = {
  lang: null,
};

//* Slice
const langSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLaguage: (state, action) => {
      state.lang = action.payload;
    }
  },
});

export default langSlice.reducer;
export const {setLaguage} = langSlice.actions
