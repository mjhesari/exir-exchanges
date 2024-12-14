import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import img1 from "@/public/image.png";
import { Icon } from "@iconify-icon/react";

export function ExchangeCard({ dicts }: { dicts: DictsTypes }) {
  return (
    <Card className="py-2 h-80">
      <CardHeader className="pt-1 px-3 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-lg h-40 w-full"
          src={img1}
        />
      </CardHeader>
      <CardBody className="pt-0">
        <article className="mb-2">
          <h4 className="font-semibold">Bianance</h4>
          <small className="text-default-500 ">
            3-seat sofa with chaise longue, Gunnared beige
          </small>
        </article>
        <Button
          aria-label="try it now"
          className="bg-transparent text-indigo-500 items-center justify-start w-fit py-2"
          endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
        >
          Try It Now
        </Button>
      </CardBody>
    </Card>
  );
}
