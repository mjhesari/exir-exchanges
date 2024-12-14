import { Icon } from "@iconify/react";
import { Button, Card } from "@nextui-org/react";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

const CompanySocialMedia = ({ dicts }: { dicts: DictsTypes }) => {
  return (
    <Card className="flex rounded-lg border p-4" shadow="none">
      <h3 className="font-semibold text-lg ml-2 p-2">{dicts.socialNetwork}</h3>
      <div className="space-y-4 my-5" dir="ltr">
        <div className="flex items-center justify-between bg-gray-500/10 rounded-full p-1">
          <div className="p-3 px flex flex-row justify-center items-center">
            <Icon
              icon="lineicons:instagram"
              width="30"
              className="text-purple-500"
            />
            <p className="text-base text-gray-700 ml-2">
              Instagram.com/Parsin_Exchange
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              size="lg"
              isIconOnly
              radius="full"
              className="bg-transparent"
              endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-500/10 rounded-full p-1">
          <div className="p-3 flex flex-row justify-center items-center">
            <Icon
              icon="ic:twotone-whatsapp"
              className=" text-green-500"
              width="30"
            />
            <p className="text-base text-gray-700 ml-2">
              Whatsapp.com/Parsin_Exchange
            </p>
          </div>

          <div className="flex justify-center place-content-center items-center gap-2">
            <Button
              size="lg"
              isIconOnly
              className="bg-transparent"
              radius="full"
              endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-500/10 rounded-full p-1 ">
          <div className="p-3 flex flex-row justify-center items-center">
            <Icon
              icon="ri:linkedin-fill"
              width="30"
              className="text-blue-900"
            />
            <p className="text-base text-gray-700 ml-2">
              Linkedin.com/Parsin_Exchange
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              size="lg"
              isIconOnly
              radius="full"
              className="bg-transparent"
              endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-500/10 rounded-full p-1 ">
          <div className="p-3 flex flex-row justify-center items-center">
            <Icon
              icon="mingcute:discord-line"
              width="30"
              className="text-sky-600"
            />
            <p className="text-base text-gray-700 ml-2">
              Discord.com/Parsin_Exchange
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              size="lg"
              isIconOnly
              radius="full"
              className="bg-transparent"
              endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-500/10 rounded-full p-1 ">
          <div className="p-3 flex flex-row justify-center items-center">
            <Icon
              icon="meteor-icons:youtube"
              width="30"
              className="text-red-500"
            />
            <p className="text-base text-gray-700 ml-2">
              Youtube.com/Parsin_Exchange
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              size="lg"
              isIconOnly
              radius="full"
              className="bg-transparent"
              endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-500/10 rounded-full p-1 ">
          <div className="p-3 flex flex-row justify-center items-center">
            <Icon
              icon="mingcute:social-x-line"
              width="30"
              className="text-gray-900"
            />
            <p className="text-base text-gray-700 ml-2">
              X.com/Parsin_Exchange
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              size="lg"
              isIconOnly
              radius="full"
              className="bg-transparent"
              endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-500/10 rounded-full p-1 ">
          <div className="p-3 flex flex-row justify-center items-center">
            <Icon icon="proicons:tiktok" width="30" className="text-gray-500" />
            <p className="text-base text-gray-700 ml-2">
              TikTok.com/Parsin_Exchange
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              size="lg"
              isIconOnly
              radius="full"
              className="bg-transparent"
              endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
            ></Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CompanySocialMedia;
