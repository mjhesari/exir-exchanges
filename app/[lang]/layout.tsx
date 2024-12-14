import MainNavbar from "@/components/Navbar/MainNavbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";
//* Import components
import MainProviders from "./providers/main-provider";
import { langsType, getDictionary } from "./dictionaries/dictionaries";
import MainFooter from "@/components/Footer/MainFooter";
import MobileNav from "@/components/Navbar/mobileNav";
import NavTopLogo from "@/components/Navbar/navTopLogo";

const getExchangeData=async()=>{
const data=await fetch(`${process.env.BASE_URL}/api/`, {
  headers: { Authorization: `Bearer ${process.env.TOKEN}` },
})

}
//* Local fonts
const yekanBakh = localFont({
  src: "./fonts/YekanBakh-VF.woff2",
  display: "swap",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

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
  const font = dicts.dir === "rtl" ? yekanBakh.className : roboto.className;
  return (
    <html lang={dicts.lang} dir={dicts.dir}>
      <body className={`${font} ${dicts.dir}`}>
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