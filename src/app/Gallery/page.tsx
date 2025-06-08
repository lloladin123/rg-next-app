import React from "react";
import RgShow2022 from "@images/Afslutning2022.png";
import RgShow2023 from "@images/Indmarch2023.jpg";
import GalleryList from "../components/Gallery/GalleryList";

const Gallery = () => {
  return (
    <div className="w-full min-h-screen items-center justify-center flex flex-col">
      <div className="w-10/12 space-y-4">
        <h2 className="text-2xl text-center">Gallery</h2>
        {/* Image container */}
        <div className="flex flex-row w-full flex-wrap">
          <GalleryList title="RGs Opvisning 2022" image={RgShow2022} />
          <GalleryList title="RGs Opvisning 2023" image={RgShow2023} />
          <GalleryList title="RGs Opvisning 2023" image={RgShow2023} />
          <GalleryList title="RGs Opvisning 2023" image={RgShow2023} />
          <GalleryList title="RGs Opvisning 2023" image={RgShow2023} />
          <GalleryList title="RGs Opvisning 2023" image={RgShow2023} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
