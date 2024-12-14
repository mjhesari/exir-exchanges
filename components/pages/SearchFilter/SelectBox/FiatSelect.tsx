import { Chip, Select, SelectItem } from "@nextui-org/react";
// import Data
import { fiatDespoit } from "@/utils/data/data";
// import Types
import { CurrenciesSelectProps } from "@/types/componentTypes";
  
const FiatSelect:React.FC<CurrenciesSelectProps> = ({
    selectedCurrencies,
    handleCurrencyChange,
    handleRemoveCurrency,
  }) => {
    return (
        <div className="flex flex-col gap-3">
              <h3 className="font-semibold">Fiat Deposit</h3>

              <div className="flex w-full flex-col md:flex-nowrap gap-4">
                <Select
                  className="max-w-xs"
                  aria-label="fiat-selector"
                  placeholder="Choose Currencies"
                  selectionMode="multiple"
                  selectedKeys={new Set(selectedCurrencies)}
                  onSelectionChange={(keys) =>
                    handleCurrencyChange(keys as Set<string>)
                  }
                  content="none"
                >
                  {fiatDespoit.map((fiat) => (
                    <SelectItem key={fiat.key} value={fiat.key}>
                      {fiat.label}
                    </SelectItem>
                  ))}
                </Select>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedCurrencies.map((currency) => (
                    <Chip
                      key={currency}
                      variant="bordered"
                      onClose={() => handleRemoveCurrency(currency)}
                    >
                      {currency}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
    );
}

export default FiatSelect;
