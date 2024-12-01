import { Icon } from "@iconify/react";
import { Input } from "@nextui-org/react";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";



const SearchInput = ({ dicts }: { dicts?: DictsTypes }) => {
  return (
    <Input
    radius="full"
      classNames={{
        base: "max-xl:w-[15rem] h-10",
        mainWrapper: "max-xl:w-[15rem] w-[20rem]",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-full",
      }}
      placeholder={dicts?.Searchplaceholder}
      size="sm"
      startContent={<Icon icon="solar:magnifer-line-duotone" />}
      type="search"
    />
  );
};

export default SearchInput;
