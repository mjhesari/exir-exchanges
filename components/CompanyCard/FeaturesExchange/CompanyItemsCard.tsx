import { Card } from "@nextui-org/card";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

const CompanyItemsCard = ({ dicts }: { dicts?: DictsTypes }) => {
  return (
    <div className="p-5 rounded-lg items-center justify-start border bg-white">
    <Card
      className=" flex items-center justify-center"
      shadow="none"
    >
      <article className="w-full flex gap-5">
        <div className="ml-2">
          <h3 className="text-xl font-semibold mb-5">{dicts?.cardCompanyItemsDetails.nameCompany}</h3>
          <ul className="text-md text-slate-600/95 space-y-5">
            <li>{dicts?.cardCompanyItemsDetails[1]}</li>
            <li>
              {dicts?.cardCompanyItemsDetails[2]}
            </li>
            <li>
              - Sending corporate and personal currency remittances to all parts
              of the world by providing an official invoice
            </li>
            <li>- Buying and selling of EIH and Kunlun remittances</li>
            <li>
              - Cash transfer delivery to neighbors (Iraq, Afghanistan, Oman,
              UAE, Türkiye, etc.), Europe and Canada, etc.
            </li>
            <li>
              - Importing foreign investors' currency by providing an official
              invoice
            </li>
            <li>
              - Advice on buying and selling digital currency (cryptocurrency).
            </li>
            <li>
              - The first free consultation center for bills, remittances,
              credit opening, digital currency, coins and musukuk
            </li>
          </ul>
        </div>
      </article>
    </Card>
    </div>
  );
};

export default CompanyItemsCard;
