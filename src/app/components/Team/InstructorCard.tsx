import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";
import EmptyInstructor from "@images/EmptyInstructor.png";

interface InstructorCardProps {
  name: string;
  isHelper?: boolean;
  image?: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ name, image }) => {
  return (
    <div className="flex flex-row space-x-2 border shadow-xl mb-2 rounded-xl overflow-hidden w-full lg:w-1/4">
      <div className="relative w-full flex flex-col">
        {/* Image */}
        <div
          className="clip-hexagon relative overflow-hidden"
          style={{ height: "300px" }}
        >
          <Image
            src={image ? image : EmptyInstructor}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        {/* Name and title */}
        <div className="p-4 mt-4">
          <p>{name}</p>
          <p>Instruktør</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
