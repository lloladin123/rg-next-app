import Image, { StaticImageData } from "next/image";
import React from "react";

interface GalleryImageProps {
  image: StaticImageData;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image }) => {
  return (
    <div className="border p-1 w-60 h-60">
      <div className="w-full h-full overflow-hidden relative hover:scale-110 duration-300 ease-in-out">
        <Image
          className=""
          alt="GalleryImage1"
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default GalleryImage;
