"use client";
import { useDispatch, useSelector } from "react-redux";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Icon } from "@iconify-icon/react";
import { Button, Card, Divider } from "@nextui-org/react";
import SectionTitle from "../SectionTitle";
import CountrySelect from "../SelectBox/CountrySelect";
import FiatSelect from "../SelectBox/FiatSelect";
import PaymentSelect from "../SelectBox/PaymentSelect";
import CategorySelect from "../SelectBox/CategorySelect";
import MarketSwitch from "../SelectBox/MarketSwitch";
import MarginSwitch from "../SelectBox/MarginSwitch";
import { RootState } from "@/redux/app/store";
import {
  setSelectedCountries,
  resetFilters,
} from "@/redux/features/filters/filter-slice";
import { useCallback, useEffect, useTransition } from "react";
import { getExchangeData } from "@/utils/api";
import { setExchangeData } from "@/redux/features/data/data-slice";

const CardFilter = ({ dicts }: { dicts: DictsTypes }) => {
  const dispatch = useDispatch();
  const [filterDataLoading, startFiltering] = useTransition();

  const filters = useSelector((state: RootState) => state.filters);
  // const exchangeData = useSelector((state: RootState) => state.data.data);
  const handleClearAll = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  const applyFilters = async () => {
    await getExchangeData(0, 24, filters).then((data) =>
      dispatch(setExchangeData(data.data))
    );
  };
  
  useEffect(() => {
    const condition = Object.keys(filters).find(
      (key) => filters[key as keyof typeof filters].length
    )
    if (!condition) {
      startFiltering(() => applyFilters());
    }
  }, [filters]);

  return (
    <Card
      shadow="none"
      className="border bg-white min-w-[300px] h-full lg:h-[calc(100vh-100px)] overflow-y-auto sticky top-20"
    >
      <div className="p-5 flex flex-col">
        <div className="flex items-start flex-col">
          <SectionTitle>
            <Icon icon="mdi:filter" width="24" height="24" />{" "}
            {dicts?.CardFilter.filter}
          </SectionTitle>
            {Object.keys(filters).find(
              (key) => filters[key as keyof typeof filters].length
            ) || filterDataLoading ? (
              <Button
                onClick={handleClearAll}
                color="secondary"
                variant="light"
                size="sm"
                aria-label={`${dicts?.button.clearAll}`}
                endContent={<Icon icon="lucide:x" width={15} />}
              >
                {dicts?.button.clearAll}
              </Button>
            ) : null}
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <CategorySelect dicts={dicts} />
            <Divider className="my-0" />
            <PaymentSelect dicts={dicts} selectedPayments={[]} />
            <Divider className="my-0" />
            <FiatSelect dicts={dicts} selectedCurrencies={[]} />
            <Divider className="my-0" />
            <CountrySelect
              dicts={dicts}
              selectedCountries={[]}
              handleCountryChange={(value) =>
                setSelectedCountries(Array.from(value))
              }
              handleRemoveCountry={(country) =>
                setSelectedCountries([].filter((c) => c !== country))
              }
            />
            <Divider className="my-0" />
            <MarginSwitch dicts={dicts} />
            <Divider className="my-0" />
            <MarketSwitch dicts={dicts} />
            <Divider className="my-0" />
            <Button
              onClick={() => startFiltering(() => applyFilters())}
              aria-label="apply-filters"
              isDisabled={
                !Object.keys(filters).find(
                  (key) => filters[key as keyof typeof filters].length
                ) || filterDataLoading
              }
              isLoading={filterDataLoading}
            >
              Apply Filter
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardFilter;
