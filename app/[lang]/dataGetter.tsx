"use client";

// Public imports
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/app/hooks";
import { DataStructure } from "@/types/dataTypes";
interface DataGetterProps {
  exchangeData: DataStructure | null;
}

//* Import components

//* Redux actions
import { setExchangeData } from "@/redux/features/data/data-slice";
const DataGetter = ({ exchangeData }: DataGetterProps) => {
  // Hooks
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (exchangeData) {
        dispatch(setExchangeData(exchangeData))
    }
  }, [exchangeData,dispatch]);

  // Conditional rendering
  if (exchangeData) {
    return null;
  } else {
    <p>Loding</p>;
  }
};

export default DataGetter;
