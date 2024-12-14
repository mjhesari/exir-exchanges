"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Fancybox from "./fancy-box";
import Link from "next/link";
import { Card } from "@nextui-org/react";
import img1 from "@/public/photo_2024-11-21_18-22-36.jpg";
import img2 from "@/public/photo_2024-11-21_18-23-11.jpg";
import img3 from "@/public/photo_2024-11-21_18-23-17.jpg";
import img4 from "@/public/photo_2024-11-21_18-24-06.jpg";
import img5 from "@/public/image-2.png";
import img6 from "@/public/image-4.png";

interface ImageData {
  id: number;
  src: StaticImageData;
  alt: string;
  size: string;
  title: string;
}

const CompanyGallery: React.FC = () => {
  const images: ImageData[] = [
    {
      id: 1,
      src: img1,
      alt: "Photo 1",
      size: "row-span-2 col-span-2",
      title: "Image 1",
    },
    {
      id: 2,
      src: img2,
      alt: "Photo 2",
      size: "row-span-1 col-span-2",
      title: "Image 2",
    },
    {
      id: 3,
      src: img3,
      alt: "Photo 3",
      size: "row-span-1 col-span-1",
      title: "Image 3",
    },
    {
      id: 4,
      src: img4,
      alt: "Photo 4",
      size: "row-span-1 col-span-1",
      title: "Image 4",
    },
    {
      id: 5,
      src: img5,
      alt: "Photo 5",
      size: "",
      title: "Image 5",
    },
    {
      id: 6,
      src: img6,
      alt: "Photo 6",
      size: "",
      title: "Image 6",
    },
  ];

  return (
    <Card
      className="rounded-lg items-center justify-center border p-4"
      shadow="none"
    >
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="grid grid-cols-4 gap-5 place-items-center">
          {images.map((image, index) => {
            const isOverflow = index > 3;
            const isOverflowStyle = `${isOverflow ? "absolute" : "relative"}`;
            const isLastone=index===3
            return (
              <div
                key={image.id}
                className={`rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer ${image.size}`}
              >
                <Link
                  className="block"
                  data-fancybox="gallery"
                  data-caption={image.title}
                  href={image.src.src}
                >
                  {!isOverflow ? (
                    <div
                      className={`group overflow-hidden ${isOverflowStyle}`}
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-delay={index * 100}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="!relative w-full"
                        placeholder="blur"
                        />
                        {isLastone ? <div className="bg-black/20 grid place-items-center absolute inset-0 text-6xl z-20 text-white">+{images.length - 4}</div>:null}
                    </div>
                  ) : null}
                </Link>
              </div>
            );
          })}
        </div>
      </Fancybox>
    </Card>
  );
};

export default CompanyGallery;
