import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Icon } from "@iconify/react";
export function ExchangeCard({
  dicts,
  image,
  title,
}: {
  dicts: DictsTypes;
  image: string;
  title: { [key: string]: string };
}) {
  return (
    <div className="cursor-pointer h-full">
      <div className="flex-col items-start p-0 rounded-b-none">
        <div className="object-cover rounded-lg h-40 w-full bg-default-300 flex justify-center items-center flex-col rounded-b-none">
        <Icon icon="carbon:no-image" className="text-white" width="32" height="32" />
        </div>
        <Image
          alt={title[title?.[dicts?.lang ?? "fa"] ??""]}
          className="object-cover rounded-lg h-40 w-full bg-zinc-500 hidden"
          src={image??""}
        />
      </div>
      <div className="flex flex-col items-start justify-center p-1">
          <h4 className="font-light p-2">
            {title?.[dicts?.lang ?? "fa"] ?? ""}
          </h4>
      </div>
    </div>
  );
}
