import { Icon } from "@iconify/react";
import { Button, Card } from "@nextui-org/react";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Business } from "@/types/dataTypes";

const CompanySocialMedia = ({
  exchangeData,
  dicts,
}: {
  exchangeData: Business;
  dicts: DictsTypes;
}) => {
  return (
    <Card className="flex border p-4" shadow="none">
      <h3 className="font-semibold text-lg px-1 mb-3">{dicts.socialNetwork}</h3>
      <div className="space-y-4" dir="ltr">
      {exchangeData.links?.map((e, index) => (
        <div className="flex items-center justify-between bg-gray-500/10 rounded-xl p-1 " key={index}>
              <div className="p-3 flex flex-row justify-center items-center">
                <Icon
                  icon={`ri:${e.type}-fill`}
                  width="30"
                  className="text-blue-900"
                />
                <p className="text-base text-gray-700 ml-2">{e.url} </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="lg"
                  isIconOnly
                  radius="full"
                  className="bg-transparent"
                  endContent={
                    <Icon icon="ep:arrow-right" width="20" height="20" />
                  }
                ></Button>
              </div>
        </div>
          ))}
      </div>
    </Card>
  );
};

export default CompanySocialMedia;
