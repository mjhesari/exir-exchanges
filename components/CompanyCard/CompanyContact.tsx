import { Icon } from "@iconify/react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

const CompanyContact = ({ dicts }: { dicts?: DictsTypes }) => {
  return (
    <Card className="flex h-max rounded-lg border p-6" shadow="none">
      <h3 className="font-semibold text-lg ml-2">
        {dicts?.infoContact.contact}
      </h3>
      <div className="space-y-4 my-5 mx-3">
        <div className="flex items-center justify-between bg-gray-500/15 rounded-full p-1 w-[max_content]">
          <p className="text-base text-gray-700 ml-2">
            parsin.exchange@gmail.com
          </p>
          <div className="flex gap-2">
            <Button
              size="md"
              isIconOnly
              className="border-1 bg-transparent border-indigo-500 text-indigo-500"
              radius="full"
            >
              <Icon icon="solar:copy-linear" width="20" />
            </Button>
            <Button
              size="md"
              isIconOnly
              radius="full"
              className="border-1 bg-transparent border-indigo-500 text-indigo-500"
            >
              <Icon icon="solar:letter-linear" width="20" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-500/15 rounded-full p-1">
          <p className="text-base text-gray-700 mx-2" dir="ltr">
            +98 51 3844 2277{" "}
          </p>
          <div className="flex justify-center place-content-center items-center gap-2">
            <Button
              size="md"
              isIconOnly
              radius="full"
              className="border-1 bg-transparent border-indigo-500 text-indigo-500"
            >
              <Icon icon="solar:copy-linear" width="20" />
            </Button>
            <Button
              size="md"
              isIconOnly
              className="border-1 bg-transparent border-indigo-500 text-indigo-500"
              radius="full"
            >
              <Icon icon="solar:letter-linear" width="20" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center place-content-center items-center gap-2">
          <Button
            className="w-full bg-green-500/20 text-green-500 hover:bg-green-300"
            startContent={<Icon icon="ic:twotone-whatsapp" className="w-5" />}
            radius="full"
            size="lg"
          >
            Whatsapp Chat
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CompanyContact;
