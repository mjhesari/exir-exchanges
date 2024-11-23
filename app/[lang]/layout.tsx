import "@/styles/globals.css";
import "@/styles/app.css";
import clsx from "clsx";
import { MainProviders } from "../providers/main-provider";

//font
import localFont from "next/font/local"

import { getDictionary } from "../dictionaries/dictionaries";
import { LocaleTyeps } from "../dictionaries/dictionaries";

const yekanBakh = localFont({
  src : "./fonts/YekanBakh-VF.woff2",
  display : "swap"
})

// Metadata configuration

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: LocaleTyeps };
}) {
  const dicts = await getDictionary(params.lang)
  
  return (
    <html lang="en">
      <head>{/* Add custom <head> elements here if needed */}</head>
      <body>
        <MainProviders dicts={dicts}>
          <main className="container mx-auto max-w-7xl pt-4 md:pt-16 px-3 md:px-6 flex-grow">
            {children}
          </main>
        </MainProviders>
      </body>
    </html>
  );
}
