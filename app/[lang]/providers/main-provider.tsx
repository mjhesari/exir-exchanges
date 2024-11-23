'use client';
// NextUi
import { NextUIProvider } from '@nextui-org/react';
// Redux toolkit
import { Provider } from 'react-redux';
import { store } from '@/redux/app/store';
import LanguageProvider from './language-provider';
import { DictsTypes } from '../dictionaries/dictionaries';

export interface ProvidersProps {
  children: React.ReactNode;
  dicts: DictsTypes;
}
export function MainProviders({ children, dicts }: ProvidersProps) {
  return (
    <Provider store={store}>
      <LanguageProvider dicts={dicts} />
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}

export default MainProviders;
