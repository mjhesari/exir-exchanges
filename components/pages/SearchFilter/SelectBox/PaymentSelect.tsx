import { Chip, Select, SelectItem } from "@nextui-org/react";
// import Types
import { PaymentsSelectProps } from "@/types/componentTypes";
// import data static
import { paymentMethods } from "@/utils/data/data";


const PaymentSelect: React.FC<PaymentsSelectProps> = ({selectedPayment,handlePaymentChange,handleRemovePayment}) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold">Accepted Payment Methods</h3>
      <div className="flex flex-col gap-5">
        <Select
          className="max-w-xs"
          aria-label="payment-selector"
          placeholder="Choose Payment Methods"
          selectionMode="multiple"
          selectedKeys={new Set(selectedPayment)}
          onSelectionChange={(keys) => handlePaymentChange(keys as Set<string>)}
        >
          {paymentMethods.map((payment) => (
            <SelectItem key={payment.key} value={payment.key}>
              {payment.label}
            </SelectItem>
          ))}
        </Select>
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedPayment.map((payment) => (
            <Chip
              key={payment}
              variant="bordered"
              onClose={() => handleRemovePayment(payment)}
            >
              {payment}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentSelect;
