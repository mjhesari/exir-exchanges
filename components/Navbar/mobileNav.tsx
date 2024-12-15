"use client";
import { Icon } from "@iconify/react";
import { Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { Divider } from "@nextui-org/divider";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
const MobileNav = ({ dicts }: { dicts: DictsTypes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Bottom Navigation */}
      <div className=" fixed bottom-4 left-0 right-0 flex justify-center mx-3 z-20 lg:hidden">
        <div className="bg-background/70 bg-white rounded-full p-4 gap-1 overflow-auto flex flex-row border justify-center">
          <Button
            variant="light"
            size="md"
            onPress={() => setIsOpen(!isOpen)}
            isIconOnly
            endContent={
              <Icon
                icon="mdi:chevron-up"
                className="transition-transform duration-200"
                width="20"
              />
            }
          ></Button>
          {/* مونده کار */}
          <div className="gap-4 overflow-x-auto flex flex-row px-3">
            <Link href="#apps">{dicts?.menuSection?.mobileMenu?.apps}</Link>
            <Link href="#social">{dicts?.menuSection?.mobileMenu?.social}</Link>
            <Link href="#services">
              {dicts?.menuSection?.mobileMenu?.services}
            </Link>
            <Link href="#contact">
              {dicts?.menuSection?.mobileMenu?.contact}
            </Link>
            <Link href="#about">about</Link>
            <Link href="#portfolio">portfolio</Link>
            <Link href="#blog">blog</Link>
            <Link href="#support">support</Link>
          </div>
        </div>
      </div>
      {/* Sliding Menu */}
      <div
        className={`z-30 bg-white gap-3 h-max fixed max-w-[420px] bottom-0 left-5 right-5 mx-auto bg-background/70 backdrop-blur-lg rounded-t-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="h-20">
          {" "}
          <Button
            variant="light"
            size="md"
            className="absolute top-0 right-0 m-2 z-20 "
            onPress={() => setIsOpen(!isOpen)}
            radius="full"
            isIconOnly
            endContent={
              <Icon
                icon="bitcoin-icons:cross-filled"
                className="transition-transform duration-200"
                width="30"
              />
            }
          ></Button>
        </div>
        <div className="p-4 space-y-4 max-w-md mx-auto z-10">
          <Link
            href="#all-exchanges"
            className="block py-2 hover:bg-default-100 rounded-lg px-4"
          >
            <span className="text-accent">
              {dicts?.menuSection?.mainNav?.allExchanges}
            </span>
          </Link>
          <Link
            href="#suggest"
            className="block py-2 hover:bg-default-100 rounded-lg px-4"
          >
            <span className="text-accent">
              {dicts?.menuSection?.mainNav?.suggestAnExchange}
            </span>
          </Link>
          <div className="flex items-center py-2 hover:bg-default-100 rounded-lg px-4">
            <Icon icon="mdi:magnify" className="h-5 w-5 mr-2" />
            <span>{dicts?.button?.search}</span>
          </div>
          <div className="flex items-center py-2 hover:bg-default-100 rounded-lg px-4">
            <Icon icon="mdi:translate" className="h-5 w-5 mr-2" />
            <span className="mx-2">{dicts?.lang}</span>
          </div>
          <Button
            className="w-full"
            color="secondary"
            variant="bordered"
            radius="full"
          >
            {dicts?.button?.manageProfile}
          </Button>
          <Button className="accent-btn" fullWidth>
            {dicts?.button?.countributeToEarn}
          </Button>
          <div className="pt-4">
            <div className="flex justify-around text-sm [&_*]:text-default-500">
              <Link href="#terms" size="sm">
                {dicts?.footerLink?.terms}
              </Link>
              <Divider orientation="vertical" className="h-5" />
              <Link href="#privacy" size="sm">
                {dicts?.footerLink?.privacy}
              </Link>
              <Divider orientation="vertical" className="h-5" />
              <Link href="#contact" size="sm">
                {dicts?.footerLink?.security}
              </Link>
              <Divider orientation="vertical" className="h-5" />
              <Link href="#about" size="sm">
                {dicts?.footerLink?.aboutExir}
              </Link>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-default-500">
                © 2024 Exir Exchange
              </span>
              <div className="flex gap-4 [&_*]:text-default-500">
                <Link href="#whatsapp">
                  <Icon icon="mdi:whatsapp" className="h-5 w-5" />
                </Link>
                <Link href="#twitter">
                  <Icon icon="mdi:twitter" className="h-5 w-5" />
                </Link>
                <Link href="#instagram">
                  <Icon icon="mdi:instagram" className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
