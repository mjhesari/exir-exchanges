"use client";
import { Card, Pagination, Select, SelectItem } from "@nextui-org/react";
import { ExchangeCard } from "./ExchangeCard";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { useAppSelector } from "@/redux/app/hooks";
const CardResult = ({ dicts }: { dicts: DictsTypes }) => {
  const exchangeData = useAppSelector((state) => state.data.data);
  return (
    <Card
      className="flex flex-col px-4 border w-full min-w-[300px]"
      shadow="none"
    >
      <div className="flex flex-col ">
        <div className="mb-4 flex flex-row justify-between items-center pt-4">
          <h2 className="text-2xl font-semibold p-4">{dicts?.CardResult?.exchanges}</h2>
          <div className="flex flex-row justify-center items-center">
            <span className="text-xs">{dicts?.CardResult?.sortBy}</span>
            <Select
              className="w-32 h-fit text-xs"
              defaultSelectedKeys={["relevant"]}
              size="sm"
              classNames={{
                trigger: "bg-transparent shadow-none",
              }}
            >
              <SelectItem key="relevant" value="relevant">
{dicts?.CardResult?.selector?.relevant}
              </SelectItem>
              <SelectItem key="newest" value="newest">
                {dicts?.CardResult?.selector?.newest}
              </SelectItem>
              <SelectItem key="oldest" value="oldest">
                {dicts?.CardResult?.selector?.oldest}
              </SelectItem>
            </Select>
          </div>
        </div>
        <div>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 py-3 md:gap-3 gap-y-4 lg:gap-3 sm:gap-x-3 px-0">
            {exchangeData.data.map((exchange) => (
              <ExchangeCard
                key={exchange.id}
                dicts={dicts}
                image={exchange.image}
                title={exchange.name}
              />
            ))}
          </div>
        </div>
        <Pagination
          className="mx-auto my-3"
          isCompact
          showControls
          initialPage={1}
          total={10}
        />
      </div>
    </Card>
  );
};

export default CardResult;
