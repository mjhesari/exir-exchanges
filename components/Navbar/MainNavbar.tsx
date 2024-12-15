import {
  Link,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { Icon } from "@iconify/react";
import UserAvatar from "./UserAvatar";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

export default function MainNavbar({ dicts }: { dicts: DictsTypes }) {
  return (
    <Navbar
      maxWidth="full"
      classNames={{ wrapper: "!container mx-auto px-0", base: "bg-white" }}
      className="border-b hidden lg:block shadow-sm"
    >
      <NavbarBrand className=" max-w-60">
        <Link href="/" className="flex items-center gap-3 text-black">
          <Logo />
          <h1>{dicts.exchangeName}</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="flex-1 flex justify-center items-center"
        justify="start"
      >
        {/* <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light">All</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Categories">
              <DropdownItem key="stock">Stock Footage</DropdownItem>
              <DropdownItem key="motion">Motion Graphics</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem> */}
        <NavbarItem>
          <SearchInput dicts={dicts} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex-1 gap-6 " justify="center">
        <NavbarItem>
          <Link href="/" className="text-black">
            {dicts?.menuSection?.mainNav?.allExchanges}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" className="text-black">
            {dicts?.menuSection?.mainNav?.suggestAnExchange}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4 flex-1">
        <NavbarItem>
          <Link
            href="/languages"
            aria-label="language page"
            className="text-black"
          >
            {dicts?.lang}
            <Icon icon="uil:angle-down" width="1.4rem" height="1.4rem" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <UserAvatar />
        </NavbarItem>
        <NavbarItem>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg"
          >
            <Icon icon="hugeicons:credit-card" width="1.4rem" height="1.4rem" />{" "}
            {dicts.contributors.contributors}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
