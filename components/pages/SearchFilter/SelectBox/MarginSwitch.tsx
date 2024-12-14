import { Switch } from "@nextui-org/react";

interface SwitchMarginProps {
  SwitchSelectedMargin?: boolean;
  setSwitchSelectedMargin: ((isSelected: boolean) => void) | undefined;
}
const MarginSwitch = ({
  setSwitchSelectedMargin,
  SwitchSelectedMargin,
}: SwitchMarginProps) => {
  return (
    <div className="flex flex-row justify-between items-center place-items-center gap-3">
      <h3 className="font-semibold">Margin Trading</h3>
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
