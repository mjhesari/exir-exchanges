import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { Business } from "@/types/dataTypes";
// import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
const ContactItems = ({
  exchangeData,
}: {
  exchangeData: Business;
}) => {
  return (
    <div className="space-y-3">
      {exchangeData?.phone?.map((e,index) => (
        <div className="flex items-center justify-between bg-gray-500/15 rounded-full p-2" key={index}>
          <p className="text-base text-gray-700 ml-2">
            {e.value}
          </p>
          <div className="flex gap-x-1">
            <Button
              size="sm"
              isIconOnly
              className="border-1 bg-transparent border-indigo-500 text-indigo-500"
              radius="full"
            >
              <Icon icon="solar:copy-linear" width="20" />
            </Button>
            <Button
              size="sm"
              isIconOnly
              radius="full"
              className="border-1 bg-transparent border-indigo-500 text-indigo-500"
            >
              <Icon icon="solar:letter-linear" width="20" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactItems;
