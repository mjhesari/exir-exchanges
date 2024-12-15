import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedCategories: string[];
  selectedCurrencies: string[];
  selectedPayments: string[];
  selectedCountries: string[];
  switchIsSelectedMarket: boolean;
  switchIsSelectedMargin: boolean;
}

const initialState: FilterState = {
  selectedCategories: [],
  selectedCurrencies: [],
  selectedPayments: [],
  selectedCountries: [],
  switchIsSelectedMarket: false,
  switchIsSelectedMargin: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedCategories(state, action: PayloadAction<string[]>) {
      state.selectedCategories = action.payload;
    },
    setSelectedCurrencies(state, action: PayloadAction<string[]>) {
      state.selectedCurrencies = action.payload;
    },
    setSelectedPayments(state, action: PayloadAction<string[]>) {
      state.selectedPayments = action.payload;
    },
    setSelectedCountries(state, action: PayloadAction<string[]>) {
      state.selectedCountries = action.payload;
    },
    toggleSelectedMarket(state, action: PayloadAction<boolean>) {
      state.switchIsSelectedMarket = action.payload;
    },
    toggleSelectedMargin(state, action: PayloadAction<boolean>) {
      state.switchIsSelectedMargin = action.payload;
    },
    resetFilters(state) {
      state.selectedCategories = [];
      state.selectedCurrencies = [];
      state.selectedPayments = [];
      state.selectedCountries = [];
      state.switchIsSelectedMarket = false;
      state.switchIsSelectedMargin = false;
    },
  },
});

export const {
  setSelectedCategories,
  setSelectedCurrencies,
  setSelectedPayments,
  setSelectedCountries,
  toggleSelectedMarket,
  toggleSelectedMargin,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
