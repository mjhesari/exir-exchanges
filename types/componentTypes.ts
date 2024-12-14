// Select Components Types (FilterCard)
export interface PaymentsSelectProps {
  selectedPayment: string[];
  handlePaymentChange: (value: Set<string>) => void;
  handleRemovePayment: (country: string) => void;
}

export interface CurrenciesSelectProps {
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
export interface Category {
  selectedCheckBox: string[];
  handleChange: (value: string[]) => void;
}
