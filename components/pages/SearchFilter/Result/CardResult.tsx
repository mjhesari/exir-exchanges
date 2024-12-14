import { Card, Divider, Pagination, Select, SelectItem } from "@nextui-org/react";
import { ExchangeCard } from "./ExchangeCard";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

const CardResult = ({ dicts }: { dicts: DictsTypes }) => {
  return (
    <Card
      className="flex flex-col px-4 border w-full min-w-[300px]"
      shadow="none"
    >
      <div className="flex flex-col ">
      <div className="mb-4 flex flex-row justify-between items-center pt-4">
      <h2 className="text-2xl font-semibold p-4">Exchanges</h2>
      <div className="flex flex-row justify-center items-center">
      <span className="text-xs">Sort By</span>
        <Select
          className="w-28 h-fit text-xs"
          defaultSelectedKeys={["relevant"]}
          size="sm"
          classNames={{
            trigger: "bg-transparent shadow-none",
          }}
        >
          <SelectItem key="relevant" value="relevant">
            Relevant
          </SelectItem>
          <SelectItem key="newest" value="newest">
            Newest
          </SelectItem>
          <SelectItem key="oldest" value="oldest">
            Oldest
          </SelectItem>
        </Select>
      </div>
      </div>
        <div>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 py-3 md:gap-3 gap-y-4 lg:gap-3 sm:gap-x-3 px-0">
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
            <ExchangeCard dicts={dicts} />
          </div>
        </div>
          <Pagination className="mx-auto my-3" isCompact showControls initialPage={1} total={10} />
      </div>
    </Card>
  );
};

export default CardResult;
