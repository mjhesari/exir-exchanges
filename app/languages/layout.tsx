import "../[lang]/globals.css";
import NavTopLogo from "@/components/Navbar/navTopLogo";
import MainNavbar from "@/components/Navbar/MainNavbar";
import MainFooter from "@/components/Footer/MainFooter";
import { getDictionary } from "../[lang]/dictionaries/dictionaries";
import MainProviders from "../providers/main-provider";
import { getAllLanguage, getExchangeData } from "@/utils/api";

export const metadata = {
  title: "Languages",
  description: "Change Language Page",
};

export default async function LanguageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dicts = await getDictionary('en');
  const {data}=await getExchangeData(0,24)
  const lang=await getAllLanguage()
  return (
    <html>
      <body>
      <MainProviders exchange={data} lang={lang}>
        <NavTopLogo dicts={dicts} />
        <MainNavbar dicts={dicts}/>
        {children}
        {/* <MobileNav dicts={dicts}/> */}
        <MainFooter dicts={dicts} />
        </MainProviders>
      </body>
    </html>
  );
}
