import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Icon } from "@iconify-icon/react";

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
    <Card className="py-2 cursor-pointer">
      <CardHeader className="pt-1 px-3 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-lg h-40 w-full"
          src={image}
        />
      </CardHeader>
      <CardBody className="pt-0 px-4 flex flex-col items-start">
        <article className="mb-2">
          <h4 className="font-semibold">
            {title?.[dicts?.lang ?? "fa"] ?? ""}
          </h4>
        </article>
        <Button
          aria-label="try it now"
          className="bg-transparent text-indigo-500 items-center justify-center w-fit py-2 px-0"
          endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
        >
{dicts.button.tryItNow}
        </Button>
      </CardBody>
    </Card>
  );
}
