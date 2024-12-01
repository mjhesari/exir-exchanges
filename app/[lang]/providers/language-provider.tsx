'use client';

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";

import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries"
import { setLaguage } from "@/redux/features/Language/lang-slice";

const LanguageProvider = ({dicts}: {dicts: DictsTypes}) => {

    return null;
}

export default LanguageProvider