"use client";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { Business } from "@/types/dataTypes";
import { useRef } from "react";
import { convertToPhoneNumber } from "@/utils/functions/functions";
import Copier from "@/components/mirrors/Copy-Button";
// import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
export type ContactItemTypes = {
  content: string;
  type: "phone" | "mail";
};
const ContactItems = ({
  content,
  type,
  exchangeData,
}: ContactItemTypes & { exchangeData: Business }) => {
  const contentRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className="space-y-3">
      {exchangeData?.phone?.map((e, index) => (
        <div
          className="flex items-center justify-between bg-gray-500/15 rounded-xl p-2"
          key={index}
        >
          <p className="text-base text-gray-700 ml-2">
            {type === "phone" ? convertToPhoneNumber(e.value ?? "") : content}
          </p>
          <div className="flex gap-x-1" ref={contentRef} title={content}>
            <Copier value={content} />
            <Button
              size="sm"
              isIconOnly
              radius="full"
              className="border-1 bg-transparent border-indigo-500 text-indigo-500"
            >
              <Icon icon="solar:letter-linear" width="20" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactItems;
