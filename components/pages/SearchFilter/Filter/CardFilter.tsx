import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Icon } from "@iconify-icon/react";
import { Button, Card, Divider} from "@nextui-org/react";
import SectionTitle from "../SectionTitle";
import { useState } from "react";
import CountrySelect from "../SelectBox/CountrySelect";
import FiatSelect from "../SelectBox/FiatSelect";
import PaymentSelect from "../SelectBox/PaymentSelect";
import CategorySelect from "../SelectBox/CategorySelect";
import MarketSwitch from "../SelectBox/MarketSwitch";
import MarginSwitch from "../SelectBox/MarginSwitch";

const CardFilter = ({ dicts }: { dicts: DictsTypes }) => {
  const [selectedCheckBox, setSelectedCheckBox] = useState<string[]>([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [switchIsSelectedMarket, setSwitchIsSelectedMarket] = useState<
    boolean | undefined
  >(false);
  const [switchIsSelectedMargin, setSwitchIsSelectedMargin] = useState<
    boolean | undefined
  >(false);

  const handleChange = (value: string[]) => {
    setSelectedCheckBox(value);
  };

  const handleClearAll = () => {
    setSelectedCheckBox([]);
    setSelectedCurrencies([]);
    setSelectedPayment([]);
    setSelectedCountries([]);
    setSwitchIsSelectedMargin(false);
    setSwitchIsSelectedMarket(false);
  };

  const handleCurrencyChange = (value: Set<string>) => {
    setSelectedCurrencies(Array.from(value));
  };

  const handleRemoveCurrency = (currency: string) => {
    setSelectedCurrencies((prev) =>
      prev.filter((selectedCurrency) => selectedCurrency !== currency)
    );
  };

  const handlePaymentChange = (value: Set<string>) => {
    setSelectedPayment(Array.from(value));
  };

  const handleRemovePayment = (payment: string) => {
    setSelectedPayment((prev) =>
      prev.filter((selected) => selected !== payment)
    );
  };

  const handleCountryChange = (value: Set<string>) => {
    setSelectedCountries(Array.from(value));
  };

  const handleRemoveCountry = (country: string) => {
    setSelectedCountries((prev) =>
      prev.filter((selectedCountry) => selectedCountry !== country)
    );
  };

  return (
    <Card shadow="none" className="border bg-white min-w-[300px] h-full lg:h-[calc(100vh-100px)] overflow-y-auto sticky top-20">
      <div className="p-5 flex flex-col">
        <div className="flex items-start flex-col">
          <SectionTitle><Icon icon="mdi:filter" width="24" height="24" /> Filter</SectionTitle>
          {selectedCheckBox.length > 0 ||
          selectedCurrencies.length > 0 ||
          selectedPayment.length > 0 ||
          switchIsSelectedMargin === true ||
          switchIsSelectedMarket === true ||
          selectedCountries.length > 0 ? (
            <Button
              onClick={handleClearAll}
              className="text-purple-600 text-sm bg-transparent"
              size="sm"
              aria-label="Clear all"
              endContent={<Icon icon="lucide:x" width={15} />}
            >
              Clear all
            </Button>
          ) : null}
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <CategorySelect
              handleChange={handleChange}
              selectedCheckBox={selectedCheckBox}
            />
            <Divider className="my-0" />
            <PaymentSelect
              selectedPayment={selectedPayment}
              handleRemovePayment={handleRemovePayment}
              handlePaymentChange={handlePaymentChange}
            />
            <Divider className="my-0" />
            <FiatSelect
              selectedCurrencies={selectedCurrencies}
              handleCurrencyChange={handleCurrencyChange}
              handleRemoveCurrency={handleRemoveCurrency}
            />
            <Divider className="my-0" />
            <CountrySelect
              selectedCountries={selectedCountries}
              handleCountryChange={handleCountryChange}
              handleRemoveCountry={handleRemoveCountry}
            />
            <Divider className="my-0" />
            <MarginSwitch
              SwitchSelectedMargin={switchIsSelectedMargin}
              setSwitchSelectedMargin={setSwitchIsSelectedMargin}
            />
            <Divider className="my-0" />
            <MarketSwitch
              switchIsSelectedMarket={switchIsSelectedMarket}
              setSwitchIsSelectedMarket={setSwitchIsSelectedMarket}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardFilter;
