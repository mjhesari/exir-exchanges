import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

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
    <Card className="cursor-pointer h-full">
      <CardHeader className="pt-1 px-3 flex-col items-start">
        <Image
          alt={title[title?.[dicts?.lang ?? "fa"] ?? "No image"]}
          className="object-cover rounded-lg h-40 w-full"
          src={image??"undefined"}
        />
      </CardHeader>
      <CardBody className="pt-0 px-4 flex flex-col items-center justify-center">
          <h4 className="font-semibold">
            {title?.[dicts?.lang ?? "fa"] ?? ""}
          </h4>
      </CardBody>
    </Card>
  );
}
