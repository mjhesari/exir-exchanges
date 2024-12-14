import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CardFilter from "./CardFilter";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Icon } from "@iconify/react";

const MobileFilterBar = ({ dicts }: { dicts: DictsTypes }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="lg:hidden bg-white border w-max text-lg"
      startContent={<Icon icon="mdi:filter" width="24" height="24" />}>
        Filter
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} className="lg:hidden w-[85%]" classNames={{ backdrop: 'lg:hidden', closeButton: 'z-50 text-xl' }}>
        <DrawerContent>
          <CardFilter dicts={dicts} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileFilterBar;
