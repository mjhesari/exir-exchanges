import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const marketAttributeKey = "f6bcb948-3e63-41ee-9c87-5e1e6cdd7604";
  const marginAttributeKey = "dd9f7158-ca1b-4569-b04e-305f317af6ac"; 
export interface FilterState {
  selectedCategories: string[];
  selectedCurrencies: string[];
  selectedPayments: string[];
  selectedCountries: string[];
  switchIsSelectedMarket: string;
  switchIsSelectedMargin: string;
}

const initialState: FilterState = {
  selectedCategories: [],
  selectedCurrencies: [],
  selectedPayments: [],
  selectedCountries: [],
  switchIsSelectedMarket: "",
  switchIsSelectedMargin: "",
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
      state.switchIsSelectedMarket = action.payload?marketAttributeKey:"";
    },
    toggleSelectedMargin(state, action: PayloadAction<boolean>) {
      state.switchIsSelectedMargin = action.payload?marginAttributeKey:"";
    },
    resetFilters(state) {
      state.selectedCategories = [];
      state.selectedCurrencies = [];
      state.selectedPayments = [];
      state.selectedCountries = [];
      state.switchIsSelectedMarket = "";
      state.switchIsSelectedMargin = "";
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
