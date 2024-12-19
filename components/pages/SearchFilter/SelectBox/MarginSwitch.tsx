import { Switch } from "@nextui-org/react";
import { SwitchMarginProps } from "@/types/componentTypes";
const MarginSwitch = ({
  dicts,
  setSwitchSelectedMargin,
  SwitchSelectedMargin,
}: SwitchMarginProps) => {
  return (
    <div className="flex flex-row justify-between items-center place-items-center gap-3">
      <h3 className="font-semibold">{dicts?.CardFilter?.marginTrading}</h3>
      <Switch
        size="sm"
        aria-label="margin-switch"
        color="secondary"
        onValueChange={setSwitchSelectedMargin}
        isSelected={SwitchSelectedMargin}
      />
    </div>
  );
};

export default MarginSwitch;
