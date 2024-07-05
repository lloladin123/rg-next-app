import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import GalleryImage1 from "@images/RGsOpvisningImage1.png";
import RgShow2023 from "@images/Indmarch2023.jpg";
import GalleryImage from "../components/GalleryPage/GalleryImage";

const GalleryPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-10/12 space-y-4 py-8 flex flex-col text-black">
        <h1 className="text-center text-2xl">Galleri</h1>
        <div className="flex flex-row space-x-0.5">
          <div className="flex flex-row py-1 px-2 bg-rg-green text-white rounded-2xl">
            <FaArrowLeft className="mt-1" />
            <Link href="/Gallery">Tilbage</Link>
          </div>
          <p className="py-1">RGs Opvisning 2022</p>
        </div>
        <p>Billeder</p>

        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-4 gap-2">
            <GalleryImage image={RgShow2023} />
            <GalleryImage image={RgShow2023} />
            <GalleryImage image={RgShow2023} />
            <GalleryImage image={RgShow2023} />
            <GalleryImage image={RgShow2023} />
            <GalleryImage image={RgShow2023} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
