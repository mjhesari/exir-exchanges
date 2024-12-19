import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Business } from "./dataTypes";

export type initialStateTypes = {
  loading: boolean;
  data: {
    siteConfig: any;
    siteData: any;
  };
  error: string;
};
export type initialStateTypesLang = {
  lang: DictsTypes | null;
};

export interface DataState {
  data: Business[];
  details: {
    count: number;
  };
}
