import { Icon } from "@iconify/react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import ContactItems from "./ContactItems";
import { Business } from "@/types/dataTypes";
import EmailItems from "./EmailItems";

const CompanyContact = ({
  exchangeData,
  dicts,
}: {
  exchangeData: Business ;
  dicts: DictsTypes;
}) => {
  return (
    <Card className="flex h-max rounded-lg border p-2" shadow="none">
      <h3 className="font-semibold text-lg p-3 px-5">
        {dicts?.infoContact.contact}
      </h3>
      <div className="space-y-4 my-2 mx-3">

        <ContactItems exchangeData={exchangeData} dicts={dicts}/>
        {/* <EmailItems exchangeData={exchangeData} dicts={dicts} /> */}
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
