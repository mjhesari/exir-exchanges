import { Icon } from "@iconify/react";
import { Input } from "@nextui-org/react";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";



const SearchInput = ({ dicts }: { dicts?: DictsTypes }) => {
  return (
    <Input
    classNames={{
      input: " font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 ",
      innerWrapper: "bg-transparent ",
      base:'max-xl:w-[15rem]',
      mainWrapper:'max-xl:w-[15rem] w-[25rem]'
    }}
    radius="full"
    placeholder={dicts?.Searchplaceholder}
    startContent={<Icon icon="solar:magnifer-line-duotone" />}
    type="search"
  />
  );
};

export default SearchInput;
