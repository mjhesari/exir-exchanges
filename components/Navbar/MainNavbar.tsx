import { Link, Button, Select, SelectItem } from "@nextui-org/react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { Icon } from "@iconify/react";
import UserAvatar from "./UserAvatar";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

interface Region {
  key: string;
  label: string;
}

export default function MainNavbar({ dicts }: { dicts: DictsTypes }) {
  const region: Region[] = [
    { key: "en", label: "en" },
    { key: "fa", label: "fa" },
  ];
  return (
    <div className="bg-white hidden lg:block">
      <nav className="container mx-auto grid grid-cols-[max-content_auto_max-content] py-2">
        {/* Logo Section */}
        <div className="flex items-center gap-5">
          <Logo />
          <h1>{dicts?.exchangeName}</h1>
          {/* Search Section */}
          <div>
            <SearchInput dicts={dicts} />
          </div>
        </div>
        {/* Menu Link Section */}
        <div className="flex justify-center items-center gap-8">
          <Link color="foreground" href="#">
            {dicts?.menuSection?.allExchanges ?? ""}
          </Link>
          <Link href="#" color="foreground" aria-current="page">
            {dicts?.menuSection?.suggestAnExchange ?? ""}
          </Link>
        </div>

        <div className="flex items-center gap-5">
          {/* Select Language */}
          {/* <Select
            placeholder="En"
            className="w-[70px]"
          >
            {region.map((loacal) => (
              <SelectItem key={loacal.key}>{loacal.label}</SelectItem>
            ))}
          </Select> */}
          <UserAvatar />
          <Button
            radius="full"
            className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg"
          >
            <Icon icon="hugeicons:credit-card" width="1.4rem" height="1.4rem" />{" "}
            {dicts?.button.contribute}{" "}
          </Button>
        </div>
      </nav>
    </div>
  );
}
