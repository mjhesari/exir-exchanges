"use client";
import {
  Button,
  Card,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { ExchangeCard } from "./ExchangeCard";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { useAppSelector } from "@/redux/app/hooks";
import { useState } from "react";
// import { setExchangeData } from "@/redux/features/data/data-slice";
// import { getExchangeData } from "@/utils/api";
const CardResult = ({ dicts }: { dicts: DictsTypes }) => {
  const exchangeData = useAppSelector((state) => state.data.data);
  // const dispatch = useAppDispatch();
  const [pageIndex, setPageIndex] = useState(0);
  // const [loading, setLoading] = useState(false);
  
  // const filters = useAppSelector((state) => state.filters);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await getExchangeData(pageIndex,24,filters);
  //       if (Array.isArray(res.data)) {
  //         dispatch(setExchangeData([...(exchangeData || []), ...res.data]));
  //       } else {
  //         console.error("Unexpected data format:", res.data);
  //       }
  //     } catch (error) {
  //       console.error("Error while fetching exchange data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, [pageIndex]);
  
  return (
    <Card
      className="flex flex-col px-4 border w-full min-w-[300px]"
      shadow="none"
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center pt-4">
          <h2 className="text-2xl font-semibold p-4">
            {dicts?.CardResult?.exchanges}
          </h2>
          <div className="flex flex-row justify-center items-center">
            <span className="text-xs">{dicts?.CardResult?.sortBy}</span>
            <Select
            aria-label="select-by-sort"
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
            {exchangeData.length > 0 ? (
              exchangeData.map((exchange, index) => (
                <Card
                  as={"a"}
                  href={`/${exchange.slug}/${exchange.publicId}`}
                  key={exchange.id || index}
                >
                  <ExchangeCard
                    key={exchange.id || index}
                    dicts={dicts}
                    image={exchange?.image??''}
                    title={exchange.name}
                  />
                </Card>
              ))
            ) : (
              <p>No exchanges available</p>
            )}
          </div>
        </div>
        <Button
          className="w-max mx-auto my-4"
          radius="full"
          variant="bordered"
          // startContent={loading?<Spinner size="sm" color="secondary"/>:""}
          onClick={() => setPageIndex(pageIndex + 1)}
          // disabled={loading}
          aria-label="load-more"
        >
          Load more
        </Button>
      </div>
    </Card>
  );
};

export default CardResult;