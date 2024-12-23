// import MainBanner from "@/components/Banner/MainBanner";
// import CompanyItemsCard from "@/components/CompanyCard/FeaturesExchange/CompanyItemsCard";
// import AdsCard from "@/components/CompanyCard/Ads/AdsCard";
// import CompanyProduct from "@/components/CompanyCard/Products/CompanyProduct";
// import CompanyCuntributes from "@/components/CompanyCard/Cuntributes/CompanyCuntributes";
// import CompanyPartners from "@/components/CompanyCard/Partners/CompanyPartners";
// import CompanyComments from "@/components/CompanyCard/Comments/CompanyComments";
import { CompanyDetails } from "@/components/CompanyCard/DetailsExchange/CompanyDetails";
import { CompanyOverview } from "@/components/CompanyCard/Overview/CompanyOverview";
import { getDictionary, langsType } from "../dictionaries/dictionaries";
import CompanyContact from "@/components/CompanyCard/Contact/CompanyContact";
import { CompanyLocCard } from "@/components/CompanyCard/Locaition/CompanyLoccard";
import CompanyGallary from "@/components/CompanyCard/Gallery/CompanyGallary";
import CompanySocialMedia from "@/components/CompanyCard/SocialMedia/CompanySocialMedia";
import CompanyHoldApp from "@/components/CompanyCard/HoldingApp/CompanyHoldApp";
import { Business } from "@/types/dataTypes";

const getdataExchange = async (id: string) => {
  try {
    const data = await fetch(`${process.env.BASE_URL}api/business/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },cache:'no-store'
    });
    const res = await data.json();
    return res;
  } catch (error) {
    console.error("Error fetching ExchangeData in SinglePage:", error);
    return { data: { Data: {} } };
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
      <main className="container mx-auto pt-20 lg:pt-4 grid grid-cols-1 lg:grid-cols-[auto_400px] gap-4">
        <section className="space-y-4 mx-5 lg:mx-0">
          <CompanyOverview exchangeData={exchangeData} dicts={dicts} />
          <div className="lg:hidden block">
            <CompanyContact exchangeData={exchangeData}  dicts={dicts}/>
          </div>
          <CompanyDetails exchangeData={exchangeData} dicts={dicts} />
          <CompanyGallary exchangeData={exchangeData} />
          <CompanySocialMedia  exchangeData={exchangeData} dicts={dicts}/>
          <CompanyLocCard  exchangeData={exchangeData} dicts={dicts}/>
          <CompanyHoldApp dicts={dicts} />
        </section>
        {/* <MainBanner /> */}
        <section className="space-y-4 mx-5 lg:mx-0 lg:block hidden">
          <CompanyContact  exchangeData={exchangeData} dicts={dicts} />
          {/* <CompanyItemsCard exchangeData={exchangeData} dicts={dicts} /> */}
          {/* <CompanyProduct dicts={dicts} /> */}
          {/* <CompanyCuntributes dicts={dicts} /> */}
          {/* <CompanyPartners  /> */}
          {/* <CompanyComments/> */}
          {/* <AdsCard /> */}
        </section>
      </main>
    </>
  );
}
