import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const marketAttributeKey = "f6bcb948-3e63-41ee-9c87-5e1e6cdd7604";
const marginAttributeKey = "dd9f7158-ca1b-4569-b04e-305f317af6ac";
// const paymentAttributeKey='bcc4a9db-c980-4b08-ac37-0054a1885dcb';
// const currencyAttributeKey='d735db00-99ce-4bac-90dd-c0219baec715';
export interface FilterState {
  selectedCategories: string[];
  selectedCurrencies: string[];
  selectedPayments: string[];
  selectedCountries: string;
  switchIsSelectedMarket: string;
  switchIsSelectedMargin: string;
  exchangeName: { [key: string]: string };
}

const initialState: FilterState = {
  selectedCategories: [],
  selectedCurrencies: [],
  selectedPayments: [],
  selectedCountries: "",
  switchIsSelectedMarket: "",
  switchIsSelectedMargin: "",
  exchangeName: {},
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
    setSelectedCountries(state, action: PayloadAction<string>) {
      state.selectedCountries = action.payload;
    },
    toggleSelectedMarket(state, action: PayloadAction<boolean>) {
      state.switchIsSelectedMarket = action.payload ? marketAttributeKey : "";
    },
    toggleSelectedMargin(state, action: PayloadAction<boolean>) {
      state.switchIsSelectedMargin = action.payload ? marginAttributeKey : "";
    },
    setExchangeName(state, action: PayloadAction<{ [key: string]: string }>) {
      state.exchangeName = action.payload;
    },
    resetFilters(state) {
      state.selectedCategories = [];
      state.selectedCurrencies = [];
      state.selectedPayments = [];
      state.selectedCountries = "";
      state.switchIsSelectedMarket = "";
      state.switchIsSelectedMargin = "";
      state.exchangeName = {};
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
  setExchangeName,
} = filterSlice.actions;

export default filterSlice.reducer;
