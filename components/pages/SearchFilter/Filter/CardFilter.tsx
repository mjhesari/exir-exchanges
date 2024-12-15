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
  setSelectedCategories,
  setSelectedCurrencies,
  setSelectedPayments,
  setSelectedCountries,
  toggleSelectedMarket,
  toggleSelectedMargin,
  resetFilters,
} from "@/redux/features/filters/filter-slice";
const CardFilter = ({ dicts }: { dicts: DictsTypes }) => {
  const dispatch = useDispatch();
  

  const {
    selectedCategories,
    selectedCurrencies,
    selectedPayments,
    selectedCountries,
    switchIsSelectedMarket,
    switchIsSelectedMargin,
  } = useSelector((state: RootState) => state.filters);

  const handleClearAll = () => {
    dispatch(resetFilters());
  };

  const handleCategoryChange = (value: string[]) => {
    dispatch(setSelectedCategories(value));
  };

  const handleCurrencyChange = (value: Set<string>) => {
    dispatch(setSelectedCurrencies(Array.from(value)));
  };

  const handlePaymentChange = (value: Set<string>) => {
    dispatch(setSelectedPayments(Array.from(value)));
  };

  const handleCountryChange = (value: Set<string>) => {
    dispatch(setSelectedCountries(Array.from(value)));
  };

  const handleToggleMarket = (value: boolean) => {
    dispatch(toggleSelectedMarket(value));
  };

  const handleToggleMargin = (value: boolean) => {
    dispatch(toggleSelectedMargin(value));
  };

  return (
    <Card
      shadow="none"
      className="border bg-white min-w-[300px] h-full lg:h-[calc(100vh-100px)] overflow-y-auto sticky top-20"
    >
      <div className="p-5 flex flex-col">
        <div className="flex items-start flex-col">
          <SectionTitle>
            <Icon icon="mdi:filter" width="24" height="24" /> {dicts?.CardFilter.filter}
          </SectionTitle>
          {selectedCategories.length > 0 ||
          selectedCurrencies.length > 0 ||
          selectedPayments.length > 0 ||
          switchIsSelectedMargin ||
          switchIsSelectedMarket ||
          selectedCountries.length > 0 ? (
            <Button
              onClick={handleClearAll}
              className="text-purple-600 text-sm bg-transparent"
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
            <CategorySelect
            dicts={dicts}
              handleChange={handleCategoryChange}
              selectedCheckBox={selectedCategories}
            />
            <Divider className="my-0" />
            <PaymentSelect
            dicts={dicts}
              selectedPayments={selectedPayments}
              handlePaymentChange={(value) => handlePaymentChange(value)}
              handleRemovePayment={(payment) =>
                handlePaymentChange(
                  new Set(selectedPayments.filter((p) => p !== payment))
                )
              }
            />

            <Divider className="my-0" />
            <FiatSelect
            dicts={dicts}
              selectedCurrencies={selectedCurrencies}
              handleCurrencyChange={(value) => handleCurrencyChange(value)}
              handleRemoveCurrency={(currency) =>
                handleCurrencyChange(
                  new Set(selectedCurrencies.filter((c) => c !== currency))
                )
              }
            />
            <Divider className="my-0" />
            <CountrySelect
            dicts={dicts}
              selectedCountries={selectedCountries}
              handleCountryChange={(value) => handleCountryChange(value)}
              handleRemoveCountry={(country) =>
                handleCountryChange(
                  new Set(selectedCountries.filter((c) => c !== country))
                )
              }
            />
            <Divider className="my-0" />
            <MarginSwitch
            dicts={dicts}
              SwitchSelectedMargin={switchIsSelectedMargin}
              setSwitchSelectedMargin={(value) => handleToggleMargin(value)}
            />
            <Divider className="my-0" />
            <MarketSwitch
            dicts={dicts}
              switchIsSelectedMarket={switchIsSelectedMarket}
              setSwitchIsSelectedMarket={(value) => handleToggleMarket(value)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardFilter;
