import { Icon } from "@iconify/react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

const CompanyHoldApp = ({ dicts }: { dicts: DictsTypes }) => {
  return (
    <div>
      <Card className="flex rounded-lg border p-8" shadow="none">
        <CardHeader>
          <h3 className="font-semibold text-lg ml-2">{dicts.holdingApp}</h3>
        </CardHeader>
        <CardBody className="flex-row justify-between items-center">
          <div>
            <Button size="lg" isIconOnly radius="full">
              <Icon icon="logos:google-play-icon" width="30" />
            </Button>
          </div>
          <Divider orientation="vertical" className="h-5" />
          <div>
            <Button size="lg" isIconOnly radius="full">
              <Icon icon="logos:apple-app-store" width="30" />
            </Button>
          </div>
          <Divider orientation="vertical" className="h-5" />
          <div>
            <Button size="lg" isIconOnly radius="full">
              <Icon icon="logos:chrome" width="30" />
            </Button>
          </div>
          <Divider orientation="vertical" className="h-5" />
          <div>
            <Button size="lg" isIconOnly radius="full">
              <Icon icon="logos:microsoft-icon" width="30" />
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CompanyHoldApp;
