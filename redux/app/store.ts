// Public imports
import { configureStore } from '@reduxjs/toolkit';

//* Reducers
import filterReducer from "@/redux/features/filters/filter-slice";
import dataReducer from "@/redux/features/data/data-slice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    data: dataReducer,
  },
});

//* Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
