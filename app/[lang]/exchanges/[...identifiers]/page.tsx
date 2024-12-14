

import MainBanner from "@/components/Banner/MainBanner";
import { CompanyDetails } from "@/components/CompanyCard/DetailsExchange/CompanyDetails";
import { CompanyOverview } from "@/components/CompanyCard/Overview/CompanyOverview";
import { getDictionary, langsType } from "../../dictionaries/dictionaries";
import CompanyItemsCard from "@/components/CompanyCard/FeaturesExchange/CompanyItemsCard";
import CompanyContact from "@/components/CompanyCard/Contact/CompanyContact";
import { CompanyLocCard } from "@/components/CompanyCard/Locaition/CompanyLoccard";
import CompanyGallary from "@/components/CompanyCard/Gallery/CompanyGallary";
import AdsCard from "@/components/CompanyCard/Ads/AdsCard";
import CompanySocialMedia from "@/components/CompanyCard/SocialMedia/CompanySocialMedia";
import CompanyProduct from "@/components/CompanyCard/Products/CompanyProduct";
import CompanyHoldApp from "@/components/CompanyCard/HoldingApp/CompanyHoldApp";
import CompanyCuntributes from "@/components/CompanyCard/Cuntributes/CompanyCuntributes";
import CompanyPartners from "@/components/CompanyCard/Partners/CompanyPartners";
import CompanyComments from "@/components/CompanyCard/Comments/CompanyComments";

 //* Getting business data 
 const getData = async (id: string) => { 
  const data = await fetch(`${process.env.BASE_URL}${id}`, { 
    method: 'GET', 
    headers: { 
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${process.env.TOKEN}`, 
    }, 
  }); 
  const res = await data.json(); 
  return res; 
}; 
export default async function Home({
  params,
}: {
  params: { identifiers: [title: string, id: string],lang:langsType };
}) {
  const dicts = await getDictionary(params.lang);
 
  return (
    <>
      <main>
        <section className="container mx-auto pt-20 lg:pt-5 grid grid-cols-1 lg:grid-cols-[auto_400px] gap-5 px-5 py-3 lg:p-[12px_0]">
          <CompanyOverview />
          <CompanyDetails dicts={dicts} />
        </section>
        {/* <MainBanner /> */}
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-[auto_400px] gap-5 mt-2">
          <div className="space-y-5 mx-5 lg:mx-0">
            <CompanyItemsCard dicts={dicts} />
            <CompanyProduct dicts={dicts} />
            <CompanyGallary />
            <CompanyPartners dicts={dicts} />
            {/* <CompanyComments/> */}
          </div>
          <div className="space-y-5 mx-5 lg:mx-0">
            <CompanyContact dicts={dicts} />
            <CompanyLocCard dicts={dicts} />
            {/* <AdsCard /> */}
            <CompanySocialMedia dicts={dicts} />
            <CompanyHoldApp dicts={dicts} />
            <CompanyCuntributes dicts={dicts} />
          </div>
        </section>
      </main>
    </>
  );
}
