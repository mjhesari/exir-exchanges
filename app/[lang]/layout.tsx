// Public imports
import '@/styles/globals.css';
import '@/styles/app.css';
import { Metadata } from 'next';

//* Import components
import { MainProviders } from './providers/main-provider';

//* Multi lang config
import { getDictionary } from './dictionaries/dictionaries';
import { LocaleTypes } from './dictionaries/dictionaries';

//* Font config
import localFont from 'next/font/local';
const yekanBakh = localFont({
  src: './fonts/YekanBakh-VF.woff2',
  display: 'swap',
});

//* Metadata
export const metadata: Metadata = {
  title: 'P-ID',
  description: 'Integrated authentication system',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: LocaleTypes };
}) {
  const dicts = await getDictionary(params.lang);

  return (
    <html
      lang={dicts.lang}
      dir={dicts.dir}
      className={`${yekanBakh.className} tracking-tighter light`}
    >
      <body>
        <MainProviders dicts={dicts}>
          {/* Main content */}
          <main>{children}</main>
        </MainProviders>
      </body>
    </html>
  );
}
