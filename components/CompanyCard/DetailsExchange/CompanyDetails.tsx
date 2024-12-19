import { Card } from "@nextui-org/card";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Business } from "@/types/dataTypes";


export function CompanyDetails({
  exchangeData,
  dicts,
}: {
  exchangeData: Business ;
  dicts: DictsTypes;
}) {
  return (
    <Card
      className="p-5 justify-start rounded-lg border"
      shadow="none"
    >
      <ul className="space-y-1">
        <li>
          <strong className="font-semibold">{dicts.cardDetails.companyType}:</strong><span className="p-2 text-default-500">{exchangeData.type??"No Data"}</span> 
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.founded}:</strong> <span className="p-2 text-default-500">{exchangeData?.foundingLocation??"No Data"}</span>
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.areaServed}:</strong> <span className="p-2 text-default-500">{exchangeData?.tags} , {exchangeData?.foundingLocation ?? ""}</span>
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.revenue}:</strong> <span className="p-2 text-default-500">No data</span>
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.NumberofEmployees}:</strong> <span className="p-2 text-default-500">{exchangeData?.employeeCount??"No Data"}</span>
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.Founders}:</strong>
          <ul className="list-disc list-inside">
            <li>no data</li>
          </ul>
        </li>
      </ul>
    </Card>
  );
}
