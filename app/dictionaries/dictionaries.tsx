import 'server-only';

import dicts from '../dictionaries/en.json';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  fa: () => import('../dictionaries/fa.json').then((module) => module.default),
};

// Define the type for supported locales
export type LocaleTyeps = keyof typeof dictionaries;
export type DictsTypes = typeof dicts;

// The `getDictionary` function
export const getDictionary = async (locale: LocaleTyeps): Promise<DictsTypes> => {
  if (!(locale in dictionaries)) {
    throw new Error(`Locale '${locale}' is not supported.`);
  }

  return dictionaries[locale]();
};
