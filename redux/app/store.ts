// Public imports
import { configureStore } from '@reduxjs/toolkit';

//* Reducers
import test from '../features/test/test-slice';

export const store = configureStore({
  reducer: {
    test,
  },
});

//* Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
