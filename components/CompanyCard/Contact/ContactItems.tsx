import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { contacts } from "@/utils/data/data";
const ContactItems = () => {
    return (
        <div className="flex items-center justify-between bg-gray-500/15 rounded-full p-2">
          <p className="text-base text-gray-700 ml-2">
            parsin.exchange@gmail.com
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
    );
}

export default ContactItems;
