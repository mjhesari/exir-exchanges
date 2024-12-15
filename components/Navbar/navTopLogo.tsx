import { Card } from "@nextui-org/react";
import Logo from "./Logo";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

const NavTopLogo = ({dicts}:{dicts:DictsTypes}) => {
  return (
    <div className="fixed inset-[10px_0_auto_0] h-max z-50">
      <div className="container mx-auto px-5">
        <Card
          className="lg:hidden flex flex-row p-1 justify-start w-44 gap-x-2 items-center rounded-full border"
          shadow="none"
        >
          <Logo /> <h1>{dicts?.exchangeName}</h1>
        </Card>
      </div>
    </div>
  );
};

export default NavTopLogo;
