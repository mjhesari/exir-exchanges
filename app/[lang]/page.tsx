"use client";

import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import CardResult from "@/components/pages/SearchFilter/Result/CardResult";
import DesktopFilterBar from "@/components/pages/SearchFilter/Filter/DesktopFilterBar";
import MobileFilterBar from "@/components/pages/SearchFilter/Filter/MobileFilterBar";

const Home = ({ dicts }: { dicts: DictsTypes }) => {
  return (
    <main className=" container mx-auto grid grid-cols-1 lg:grid-cols-[200px_auto] gap-x-32 gap-y-5 px-5 lg:px-0 pt-20 lg:pt-5">
      <DesktopFilterBar dicts={dicts}/>
      <MobileFilterBar dicts={dicts}/>
      <CardResult dicts={dicts} />
    </main>
  );
};

export default Home;
