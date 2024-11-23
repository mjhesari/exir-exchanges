'use client';

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";

import { setLaguage } from "@/redux/features/language/lang-slice";
import { DictsTypes } from "../[lang]/dictionaries";

const LanguageProvider = ({dicts}: {dicts: DictsTypes}) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setLaguage(dicts))
    }, [])

    return null;
}
export default LanguageProvider