import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Business } from "@/types/dataTypes";

const EmailItems = ({
  exchangeData,
  dicts,
}: {
  exchangeData: Business;
  dicts: DictsTypes;
}) => {
  return (
    <div className="space-y-3">
      {/* {exchangeData?.mail?.length > 0 ? ( exchangeData?.mail?.map((e, index) => (
        <div className="flex items-center justify-between bg-gray-500/15 rounded-full p-2" key={index}>
          <p className="text-base text-gray-700 ml-2" key={index}>{e}</p>
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
  ))
  ) : (
    <p>No emails available</p>
  )} */}
    </div>
  );
};

export default EmailItems;
