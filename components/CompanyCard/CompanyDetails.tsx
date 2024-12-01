import { Card } from "@nextui-org/card";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";


export function CompanyDetails({dicts}: {dicts: DictsTypes}) {
  return (
    <Card
      className="p-5 justify-start rounded-lg border"
      shadow="none"
    >
      <ul className="space-y-1">
        <li>
          <strong className="font-semibold">{dicts.cardDetails.companyType}:</strong><span className="p-2 text-default-500">Private</span> 
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.founded}:</strong> <span className="p-2 text-default-500">Unknown</span>
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.areaServed}:</strong> <span className="p-2 text-default-500">Local, IRAN</span>
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.revenue}:</strong> <span className="p-2 text-default-500">Unknown</span>
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.NumberofEmployees}:</strong> <span className="p-2 text-default-500">Unknown</span>
        </li>
        <li>
          <strong className="font-semibold">{dicts.cardDetails.Founders}:</strong>
          <ul className="list-disc list-inside">
            <li>Shah Rezaei</li>
            <li>Jan Nesar</li>
          </ul>
        </li>
      </ul>
    </Card>
  );
}
