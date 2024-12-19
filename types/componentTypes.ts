import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

// Select Components Types (FilterCard)
export interface PaymentsSelectProps {
  dicts:DictsTypes
  selectedPayments: string[];  }


export interface CurrenciesSelectProps {
  dicts:DictsTypes
  selectedCurrencies: string[];}

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
  handleChange: (selected: string[]) => void; 
  selectedCheckBox: string[]; 
}


export interface SwitchMarginProps {
  dicts:DictsTypes
  SwitchSelectedMargin?: boolean;
  setSwitchSelectedMargin: ((isSelected: boolean) => void) | undefined;
}