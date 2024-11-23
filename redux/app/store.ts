// Public imports
import { configureStore } from '@reduxjs/toolkit';

//* Reducers
import lang from "../features/language/lang-slice"

export const store = configureStore({
  reducer: {
    lang
  },
});

//* Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
