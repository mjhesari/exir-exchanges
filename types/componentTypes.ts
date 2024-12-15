import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

// Select Components Types (FilterCard)
export interface PaymentsSelectProps {
  dicts:DictsTypes
  selectedPayments: string[];  
  handlePaymentChange: (value: Set<string>) => void;
  handleRemovePayment: (payment: string) => void; 
}


export interface CurrenciesSelectProps {
  dicts:DictsTypes
  selectedCurrencies: string[];
  handleCurrencyChange: (value: Set<string>) => void;
  handleRemoveCurrency: (currency: string) => void;
}

export interface Country {
  id: number;
  tr: {
    ar: string;
    en: string;
    fa: string;
  };
  code: string | null;
  iso: string;
  lang: Array<{
    id: number;
    name: string;
    dir: string;
    code: string;
    nativeName: string;
  }>;
}

export interface CategorySelectProps {
  dicts: DictsTypes;
  handleChange: (selected: string[]) => void; // تابع تغییر
  selectedCheckBox: string[]; // لیست انتخاب‌شده (مطابق با CheckboxGroup)
}