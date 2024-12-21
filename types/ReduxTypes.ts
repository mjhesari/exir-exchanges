import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Business } from "./dataTypes";


export type initialStateTypesLang = {
  lang: DictsTypes | null;
};

export interface DataState {
  data: Business[];
  details: {
    count: number;
  };
}
