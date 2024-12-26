"use client";

// Public imports
import { createSlice } from "@reduxjs/toolkit";

// Import types
import { initialStateTypesLang } from "@/types/ReduxTypes";

//* Initial state
const initialState: initialStateTypesLang = {
  lang: [{
    id: 0,
    name: "",
    dir: "",
    code: "",
    nativeName: "",
  }]
};

//* Slice
const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default langSlice.reducer;
export const { setLanguage } = langSlice.actions;
