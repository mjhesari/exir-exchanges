import { Card } from "@nextui-org/card";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Business } from "@/types/dataTypes";

export function CompanyDetails({
  exchangeData,
  dicts,
}: {
  exchangeData: Business;
  dicts: DictsTypes;
}) {
  
  return (
    <Card className="p-5 justify-start border" shadow="none">
      <ul className="space-y-1">
        <li>
          <strong className="font-semibold">
            {dicts.cardDetails.exchangeType}:
          </strong>
          {exchangeData?.tags?.map((e, index) => (
            <span className="p-2 text-default-500" key={index}>
              {e?.[dicts?.lang]}
            </span>
          ))}
        </li>
        <li>
          <strong className="font-semibold">
            {dicts.CardFilter.acceptedPaymentMethods}:
          </strong>

          <span className="p-2 text-default-500">
            {
              exchangeData?.attributes?.find(
                (e) => e.key === "Accepted Payment Methods"
              )?.value.toString().replace(/,/g, ' , ')
            ??"No Data"}
          </span>
        </li>
        <li>
          <strong className="font-semibold">
            {dicts.cardDetails.IncorporationCountry}:
          </strong>{" "}
          <span className="p-2 text-default-500">
            {exchangeData?.foundingLocation ?? "No Data"}
          </span>
        </li>
        <li>
          <strong className="font-semibold">
            {dicts.CardFilter.fiatDeposite}:
          </strong>{" "}
          <span className="p-2 text-default-500">
            {
              exchangeData?.attributes?.find((e) => e.key === "Fiat Deposit")
                ?.value.toString().replace(/,/g, ' , ')
            ??"No data"}
          </span>
        </li>
        <li>
          <strong className="font-semibold">
            {dicts.cardDetails.NumberofEmployees}:
          </strong>{" "}
          <span className="p-2 text-default-500">
            {exchangeData?.employeeCount ?? "No Data"}
          </span>
        </li>
        <li>
          <strong className="font-semibold">
            {dicts.cardDetails.Founding}:
          </strong>
          <span className="p-2 text-default-500">
            {exchangeData.foundingDate}
          </span>
        </li>
        <li>
          <strong className="font-semibold">
            {dicts.CardFilter.marginTrading}:
          </strong>
          <span className="p-2 text-default-500">{exchangeData.attributes?.find((e)=>(e.key==="Margin Trading"))?.value.toString() ? "Yes": "No"}</span>
        </li>{" "}
        <li>
          <strong className="font-semibold">
            {dicts.CardFilter.marketWithNoFees}:
          </strong>
          <span className="p-2 text-default-500">{exchangeData.attributes?.find((e)=>(e.key==="Market With Fees"))?.value.toString() ? "Yes": "No"}</span>
        </li>
      </ul>
    </Card>
  );
}
