import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface GalleryProps {
  title: string;
  image: StaticImageData;
}

const GalleryList: React.FC<GalleryProps> = ({ title, image }) => {
  return (
    <div className="relative flex w-full md:w-1/2 lg:w-1/3 p-3 items-center justify-center">
      <p className="absolute text-xl z-10 text-white">{title}</p>
      <Link
        href="/GalleryPage"
        className="overflow-hidden w-full relative h-50 hover:scale-110 duration-300 ease-in-out"
      >
        <Image
          className=""
          src={image}
          alt="RGs Opvisning 2022"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Link>
    </div>
  );
};

export default GalleryList;
