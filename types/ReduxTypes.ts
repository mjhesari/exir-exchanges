import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";


export type initialStateTypes = {
    loading: boolean;
    data: {
      siteConfig: any;
      siteData: any;
    };
    error: string;
  };
  export type initialStateTypesLang = {
    lang : DictsTypes | null
  };