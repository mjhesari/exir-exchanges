"use client";
// Public imports
import { ReactNode } from "react";
//* Import providers
// NextUi
import { NextUIProvider } from "@nextui-org/react";
// Redux toolkit
import { DataStructure } from "@/types/dataTypes";
import { Provider } from "react-redux";
import { store } from "@/redux/app/store";
import DataGetter from "../dataGetter";

const MainProviders = ({
  children,
  exchange,
}: {
  children: ReactNode;
  exchange: DataStructure;
}) => {
  return (
    <Provider store={store}>
      <DataGetter exchangeData={exchange} />
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
};

export default MainProviders;
