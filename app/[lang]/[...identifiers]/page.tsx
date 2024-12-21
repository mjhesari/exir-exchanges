// import MainBanner from "@/components/Banner/MainBanner";
import { CompanyDetails } from "@/components/CompanyCard/DetailsExchange/CompanyDetails";
import { CompanyOverview } from "@/components/CompanyCard/Overview/CompanyOverview";
import { getDictionary, langsType } from "../dictionaries/dictionaries";
import CompanyItemsCard from "@/components/CompanyCard/FeaturesExchange/CompanyItemsCard";
import CompanyContact from "@/components/CompanyCard/Contact/CompanyContact";
import { CompanyLocCard } from "@/components/CompanyCard/Locaition/CompanyLoccard";
import CompanyGallary from "@/components/CompanyCard/Gallery/CompanyGallary";
// import AdsCard from "@/components/CompanyCard/Ads/AdsCard";
import CompanySocialMedia from "@/components/CompanyCard/SocialMedia/CompanySocialMedia";
// import CompanyProduct from "@/components/CompanyCard/Products/CompanyProduct";
import CompanyHoldApp from "@/components/CompanyCard/HoldingApp/CompanyHoldApp";
import CompanyCuntributes from "@/components/CompanyCard/Cuntributes/CompanyCuntributes";
import CompanyPartners from "@/components/CompanyCard/Partners/CompanyPartners";
// import CompanyComments from "@/components/CompanyCard/Comments/CompanyComments";
import { Business } from "@/types/dataTypes";

const getdataExchange = async (id: string) => {
  try{
  const data = await fetch(`${process.env.BASE_URL}api/business/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const res = await data.json();
  return res;}
  catch(error){
      console.error("Error fetching ExchangeData in SinglePage:", error);
      return { data: { Data:{} } };
  }
};

//* Getting business data
export default async function Home({
  params,
}: {
  params: { identifiers: string[]; lang: langsType };
}) {
  const dicts = await getDictionary(params?.lang);
  const publicId = params.identifiers[1];
  const exchangeData: Business = await getdataExchange(publicId);
  if (!exchangeData) {
    return <div>Data not found</div>;
  }

  return (
    <>
      <main>
        <section className="container mx-auto pt-20 lg:pt-5 grid grid-cols-1 lg:grid-cols-[auto_400px] gap-5 px-5 py-3 lg:p-[12px_0]">
          <CompanyOverview exchangeData={exchangeData} dicts={dicts} />
          <CompanyDetails exchangeData={exchangeData} dicts={dicts}/>
        </section>
        {/* <MainBanner /> */}
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-[auto_400px] gap-5 mt-2">
          <div className="space-y-5 mx-5 lg:mx-0">
            <CompanyItemsCard exchangeData={exchangeData} dicts={dicts} />
            {/* <CompanyProduct dicts={dicts} /> */}
            <CompanyGallary exchangeData={exchangeData}/>
            <CompanyPartners  />
            {/* <CompanyComments/> */}
          </div>
          <div className="space-y-5 mx-5 lg:mx-0">
            <CompanyContact dicts={dicts} exchangeData={exchangeData} />
            <CompanyLocCard dicts={dicts} exchangeData={exchangeData}/>
            {/* <AdsCard /> */}
            <CompanySocialMedia dicts={dicts}/>
            <CompanyHoldApp dicts={dicts} />
            <CompanyCuntributes dicts={dicts} />
          </div>
        </section>
      </main>
    </>
  );
}
