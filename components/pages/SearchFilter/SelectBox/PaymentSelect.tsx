import { Chip, Select, SelectItem } from "@nextui-org/react";
// import Types
import { PaymentsSelectProps } from "@/types/componentTypes";
// import data static
import { paymentMethods } from "@/utils/data/data";
import { useDispatch } from "react-redux";
import { setSelectedPayments } from "@/redux/features/filters/filter-slice";

const PaymentSelect: React.FC<PaymentsSelectProps> = ({dicts, selectedPayments }) => {
  const dispatch = useDispatch();

  // Dispatch function for updating payments
  const handlePaymentChange = (value: Set<string>) => {
    dispatch(setSelectedPayments(Array.from(value))); // ارسال به استور
  };

  // Dispatch function for removing a payment
  const handleRemovePayment = (payment: string) => {
    const updatedPayments = selectedPayments.filter(
      (selectedPayment) => selectedPayment !== payment
    );
    dispatch(setSelectedPayments(updatedPayments));
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold">{dicts?.CardFilter?.acceptedPaymentMethods}</h3>

      <div className="flex w-full flex-col md:flex-nowrap">
        <Select
          aria-label="payment-selector"
          placeholder={`${dicts?.placeholder?.paymentChoose}`}
          selectionMode="multiple"
          selectedKeys={new Set(selectedPayments)}
          onSelectionChange={(keys) => handlePaymentChange(keys as Set<string>)} >
          {paymentMethods.map((payment) => (
            <SelectItem key={payment.key} value={payment.key}>
              {payment.label}
            </SelectItem>
          ))}
        </Select>

        <div className="flex flex-wrap gap-2 mt-2">
          {selectedPayments.map((payment) => (
            <Chip
              key={payment}
              className=" text-wrap h-full py-1"
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
