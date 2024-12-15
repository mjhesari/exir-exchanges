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

const getExchangeData = async () => {
  try{
    const data = await fetch(`${process.env.BASE_URL}/api/business`, {
      headers: { Authorization: `Bearer ${process.env.TOKEN}` },
    })
    .then((response) => response.json())
    .then((data) => data);
    return{ data}
  }
  catch(error){
    console.error("Error fetching LocalBusinessData:", error);
    return { data: { Data:{} } };
}}
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
  const {data}=await getExchangeData()
  const font = dicts.dir === "rtl" ? yekanBakh.className : roboto.className;
  return (
    <html lang={dicts.lang} dir={dicts.dir}>
      <body className={`${font}`}>
        <MainProviders exchange={data}>
          <NavTopLogo dicts={dicts}/>
          <MainNavbar dicts={dicts} />
          {children}
          <MobileNav dicts={dicts}/>
          <MainFooter dicts={dicts} />
        </MainProviders>
      </body>
    </html>
  );
}
