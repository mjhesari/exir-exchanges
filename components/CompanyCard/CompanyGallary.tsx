import { Card } from "@nextui-org/react";
import Image from "next/image";
import img1 from "@/public/photo_2024-11-21_18-22-36.jpg";
import img2 from "@/public/photo_2024-11-21_18-23-11.jpg";
import img3 from "@/public/photo_2024-11-21_18-23-17.jpg";
import img4 from "@/public/photo_2024-11-21_18-24-06.jpg";

const CompanyGallary = () => {
  return (
    <Card
      className="md:p-8 rounded-lg items-center justify-center border p-4"
      shadow="none"
    >
      <div className="w-full grid grid-cols-4 md:gap-6 gap-3">
        <div className="row-span-2 col-span-2">
          <Image alt="gallary" src={img1} />
        </div>
        <div className="row-span-1 col-span-2">
          <Image alt="gallary" src={img2} />
        </div>
        <div className="row-span-1 col-span-1 bg-rose-400 ">
          <Image alt="gallary" src={img3} className="w-full h-full" />
        </div>
        <div className="row-span-1 col-span-1 bg-rose-400">
          <Image alt="gallary" src={img4} className="w-full h-full"/>
        </div>
      </div>
    </Card>
  );
};

export default CompanyGallary;
