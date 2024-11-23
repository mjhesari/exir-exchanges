// Public imports
import { configureStore } from '@reduxjs/toolkit';

//* Reducers
import test from '../features/test/test-slice';
import lang from "../features/language/lang-slice"
export const store = configureStore({
  reducer: {
    test,
    lang
  },
});

//* Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
