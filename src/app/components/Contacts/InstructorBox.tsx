import React from "react";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import EmptyInstructor from "@images/EmptyInstructor.png";

interface InstructorBoxProps {
  name: string;
  description: string;
  image?: string;
}

const InstructorBox: React.FC<InstructorBoxProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:even:flex-row-reverse w-full items-center justify-center md:space-x-10 p-4">
      {/* Instructor Image */}
      <div className="relative md:odd:ml-8 clip-hexagon h-80 w-80">
        <Image
          alt="Instructor Alexander"
          src={image ? image : EmptyInstructor}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      {/*Instructor description */}
      <div className="flex flex-col">
        <p className="text-3xl font-bold">{}</p>
        <p className="text-sm">{description}</p>
        {/* More information button */}
        <button className="flex flex-row space-x-1 p-1 items-center justify-center flex-nowrap w-24 bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
          <div className="text-sm">Mere info</div>
          <MdKeyboardArrowDown className="bg-white rounded-full text-rg-green scale-90" />
        </button>
      </div>
    </div>
  );
};

export default InstructorBox;
