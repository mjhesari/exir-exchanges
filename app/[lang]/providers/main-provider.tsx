"use client";
// Public imports
import { ReactNode } from "react";
//* Import providers
// NextUi
import { NextUIProvider } from "@nextui-org/react";
// Redux toolkit
import { langsType,getDictionary } from "../dictionaries/dictionaries";



const MainProviders = ({ children }: { children: ReactNode}) => {
  return (
      <NextUIProvider>{children}</NextUIProvider>
  );
};

export default MainProviders;
