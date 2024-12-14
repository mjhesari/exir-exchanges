import 'server-only'; 
import dicts from './en.json'; 
 
const dictionaries = { 
  'en': () => import('./en.json').then((module) => module.default), 
  'fa': () => import('./fa.json').then((module) => module.default), 
}; 
export type langsType = keyof typeof dictionaries; 
export type DictsTypes = typeof dicts;


export const getDictionary = async (locale: langsType) => {
  if (!dictionaries[locale]) {
    throw new Error(`Dictionary for locale '${locale}' not found`);
  }
  return dictionaries[locale](); 
};
