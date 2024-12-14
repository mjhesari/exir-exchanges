import LanguageCard from "@/components/pages/languages/LanguageCard";
import img1 from "@/public/original-b93abe1472897c8a503205900c6a14d2.png";
import Image from "next/image";

const Languages = () => {
  return (
    <main>
      <section className="mx-auto bg-[#c5c5c593] bg- h-96 flex flex-row justify-around p-7 xl:p-0 items-center">
        <h2 className="text-6xl font-semibold text-default-600 leading-snug"> Change your region and <br/>
        language</h2>
        <Image src={img1} alt="languge" width="500" className="lg:block hidden"></Image>
      </section>
      <section className="container mx-auto p-5">
        <LanguageCard/>
      </section>
    </main>
  );
};

export default Languages;
