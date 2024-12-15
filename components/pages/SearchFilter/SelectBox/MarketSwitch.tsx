import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Switch } from "@nextui-org/react";

interface SwitchMarketProps {
  dicts:DictsTypes
    switchIsSelectedMarket?: boolean;
    setSwitchIsSelectedMarket: ((isSelected: boolean) => void) | undefined;
  }

const MarketSwitch = ({dicts,switchIsSelectedMarket,setSwitchIsSelectedMarket}:SwitchMarketProps) => {
    return (
        <div className="flex flex-row justify-between items-center place-items-center gap-3">
              <h3 className="font-semibold">{dicts?.CardFilter?.marketWithFees}</h3>
              <Switch
                size="sm"
                aria-label="market-switch"
                color="secondary"
                onValueChange={setSwitchIsSelectedMarket}
                isSelected={switchIsSelectedMarket}
              />
            </div>
    );
}

export default MarketSwitch;
