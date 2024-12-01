import MainNavbar from "@/components/Navbar/MainNavbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

//* Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

//* Import components
import MainProviders from "./providers/main-provider";
import { langsType, getDictionary } from "./dictionaries/dictionaries";
import MainFooter from "@/components/Footer/MainFooter";
import MobileNav from "@/components/Navbar/mobileNav";
import NavTopLogo from "@/components/Navbar/navTopLogo";
//* Set meta tags
export const metadata: Metadata = {
  title: "Exir Exchange",
  description: "Exir Exchange",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { lang: langsType } }>) {
  const dicts = await getDictionary(params?.lang);
  return (
    <html lang={dicts.lang} dir={dicts.dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainProviders>
          <NavTopLogo />
          <MainNavbar dicts={dicts} />
          {children}
          <MobileNav />
          <MainFooter dicts={dicts} />
        </MainProviders>
      </body>
    </html>
  );
}
