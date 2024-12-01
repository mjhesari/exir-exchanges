import MainBanner from "@/components/Banner/MainBanner";
import { CompanyDetails } from "@/components/CompanyCard/CompanyDetails";
import { CompanyOverview } from "@/components/CompanyCard/CompanyOverview";
import { getDictionary, langsType } from "./dictionaries/dictionaries";
import CompanyItemsCard from "@/components/CompanyCard/CompanyItemsCard";
import CompanyContact from "@/components/CompanyCard/CompanyContact";
import { CompanyLocCard } from "@/components/CompanyCard/CompanyLoccard";
import CompanyGallary from "@/components/CompanyCard/CompanyGallary";
import AdsCard from "@/components/CompanyCard/AdsCard";
import CompanySocialMedia from "@/components/CompanyCard/CompanySocialMedia";
import CompanyProduct from "@/components/CompanyCard/CompanyProduct";
import CompanyHoldApp from "@/components/CompanyCard/CompanyHoldApp";
import CompanyCuntributes from "@/components/CompanyCard/CompanyCuntributes";
import CompanyPartners from "@/components/CompanyCard/CompanyPartners";
import CompanyComments from "@/components/CompanyCard/CompanyComments";
import NavTopLogo from "@/components/Navbar/navTopLogo";

export default async function Home({
  params,
}: {
  params: { lang: langsType };
}) {
  const dicts = await getDictionary(params.lang);
  return (
    <>
      <main>
        <section className="container pt-20 lg:pt-5 mx-auto grid grid-cols-1 lg:grid-cols-[auto_400px] gap-3 p-5 lg:p-[20px_0]">
          <CompanyOverview />
          <CompanyDetails dicts={dicts} />
        </section>
        <MainBanner />
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-[auto_400px] gap-3 py-5">
          <div className="space-y-3 mx-5 lg:mx-0">
            <CompanyItemsCard dicts={dicts} />
            <CompanyProduct dicts={dicts} />
            <CompanyGallary />
            <CompanyPartners dicts={dicts} />
            {/* <CompanyComments/> */}
          </div>
          <div className="space-y-3 mx-5 lg:mx-0">
            <CompanyContact dicts={dicts} />
            <CompanyLocCard dicts={dicts} />
            <AdsCard />
            <CompanySocialMedia dicts={dicts} />
            <CompanyHoldApp dicts={dicts} />
            <CompanyCuntributes dicts={dicts} />
          </div>
        </section>
      </main>
    </>
  );
}
