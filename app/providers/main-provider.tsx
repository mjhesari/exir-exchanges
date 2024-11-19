// Public imports
import { ReactNode } from 'react';

//* Import providers
// NextUi
import { NextUIProvider } from '@nextui-org/react';
// Redux toolkit
import { Provider } from 'react-redux';
import { store } from '@/redux/app/store';

const MainProviders = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
};

export default MainProviders;
