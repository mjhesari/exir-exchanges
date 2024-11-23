import 'server-only';

import dicts from './en.json';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  fa: () => import('./fa.json').then((module) => module.default),
};

// Define the type for supported locales
export type LocaleTypes = keyof typeof dictionaries;
export type DictsTypes = typeof dicts;

// The `getDictionary` function
export const getDictionary = async (locale: LocaleTypes): Promise<DictsTypes> => {
  if (!(locale in dictionaries)) {
    throw new Error(`Locale '${locale}' is not supported.`);
  }

  return dictionaries[locale]();
};
